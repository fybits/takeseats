
import { Application, Assets, Spritesheet, SpritesheetData, Texture, autoDetectRenderer, loadTextures } from 'pixi.js';
import { DataEventData, PeerRoom } from './PeerRoom';
import Controls from './Controls';
import Camera from './game-objects/Camera';
import GameManager from './GameManager';
import Card from './game-objects/Card';
import Stack from './game-objects/Stack';

declare global {
    var gm: GameManager;
}

const canvas = document.querySelector<HTMLCanvasElement>('canvas')!;
canvas.tabIndex = 0;
canvas.autofocus = true;

const lobbyControlsContainer = document.querySelector<HTMLDivElement>('div#lobby-controls')!;

const nicknameInput = document.querySelector<HTMLInputElement>('input#nickname')!;
const hostBtn = document.querySelector<HTMLButtonElement>('button#host')!;
const lobbyInput = document.querySelector<HTMLInputElement>('input#lobby')!;
const joinBtn = document.querySelector<HTMLButtonElement>('button#join')!;

const createCardForm = document.querySelector<HTMLFormElement>('#card-dialog')!;
const createDeckForm = document.querySelector<HTMLFormElement>('#deck-dialog')!;

const closeBtns = document.querySelectorAll<HTMLInputElement>('.close');
closeBtns.forEach((btn) => {
    btn.onclick = (e) => (e.target as HTMLElement).parentElement!.hidden = true;
})

const storedNickname = localStorage.getItem('nickname');
if (storedNickname) {
    nicknameInput.value = storedNickname;
}

let room: PeerRoom | null = null;

function getBase64(file: File): Promise<string> {
    const reader = new FileReader()
    return new Promise(resolve => {
        reader.onload = ev => {
            resolve(reader.result as string)
        }
        reader.readAsDataURL(file)
    })
}

const aliasesToFetch: Set<string> = new Set<string>();
let fetchTimeout: number | undefined;

export const GetTexture = (key: string) => {
    let texture = Assets.get<Texture>(key);
    // console.log(texture)
    if (!texture) {
        const isSpritesheetMatch = key.match(/(.+)-\d+$/);
        if (isSpritesheetMatch) {
            // console.log(isSpritesheetMatch)
            aliasesToFetch.add(`${isSpritesheetMatch[1]}-sheet`);
        } else {
            aliasesToFetch.add(key);
        }
        if (fetchTimeout) {
            clearTimeout(fetchTimeout);
        }
        fetchTimeout = setTimeout(() => {
            room?.send({
                type: 'request-resource',
                message: Array.from(aliasesToFetch.values()).map((key) => ({ alias: key })),
            })
            aliasesToFetch.clear();
        }, 1000);
        texture = new Texture(Assets.get<Texture>('card'));
    }
    texture.label = key;
    return texture;
}

(async () => {

    const app = new Application();
    await app.init({ canvas: canvas, resizeTo: window, backgroundColor: '#1E553E', antialias: true, roundPixels: true });
    const camera = new Camera();
    app.stage.addChild(camera);

    new Controls(canvas);
    Assets.add({ alias: "card", src: "assets/card.png" });
    Assets.add({ alias: "card-face", src: "assets/card-face.png" });
    Assets.add({ alias: "cursor", src: "assets/cursor.png" });
    Assets.add({ alias: "arrow", src: "assets/arrow.png" });
    Assets.add({ alias: 'cards-sheet', src: "assets/spritesheet.json" })
    await Assets.load(['card', 'cursor', 'arrow', 'card-face', 'cards-sheet']);
    // await Assets.load(['card', 'cursor', 'arrow', 'card-face']);
    const connectToLobby = (nickname: string, lobbyKey?: string) => {
        localStorage.setItem('nickname', nickname);
        room = new PeerRoom(nickname);
        const isHost = !lobbyKey;
        if (!isHost) {
            console.log("connect")
            room.connectToMember(lobbyKey);
        }
        lobbyControlsContainer.hidden = true;
        const gameManager = new GameManager(app, camera, room, isHost);

        const syncBtn = document.querySelector<HTMLButtonElement>("#sync-btn")!;
        syncBtn.hidden = false;
        syncBtn.addEventListener('click', () => gameManager.sync())

        const cardBtn = document.querySelector<HTMLButtonElement>("#create-card-btn")!;
        cardBtn.hidden = false;
        cardBtn.addEventListener('click', () => {
            createCardForm.hidden = false;
        });
        createCardForm.onsubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData(createCardForm);
            const faceFile = formData.get('face') as File;
            const backFile = formData.get('back') as File;

            let itemsToSend: Extract<DataEventData, { type: 'sync-resources' }>['message'] | null = null;
            if (!(Assets.cache.has(faceFile.name) && Assets.cache.has(backFile.name))) {
                const [faceUrl, backUrl] = await Promise.all([getBase64(faceFile), getBase64(backFile)]);
                Assets.add({ alias: faceFile.name, src: faceUrl })
                Assets.add({ alias: backFile.name, src: backUrl })
                await Assets.load<Texture>([faceFile.name, backFile.name]);
                itemsToSend = [{ alias: faceFile.name, src: faceUrl }, { alias: backFile.name, src: backUrl }];
            }
            const card = new Card(GetTexture(faceFile.name), GetTexture(backFile.name));
            gameManager.camera.addChild(card);
            gameManager.sync();
            if (itemsToSend) {
                room?.send({
                    type: 'sync-resources',
                    message: itemsToSend,
                })
            }
        }

        const deckdBtn = document.querySelector<HTMLButtonElement>("#create-deck-btn")!;
        deckdBtn.hidden = false;
        deckdBtn.addEventListener('click', () => {
            createDeckForm.hidden = false;
        });
        const backSeparateCheckBox = document.querySelector<HTMLInputElement>("#back-separate")!;
        backSeparateCheckBox.onchange = (e) => {
            document.querySelector<HTMLDivElement>('#back-index')!.hidden = (e.target as HTMLInputElement).checked;
            document.querySelector<HTMLDivElement>('#back-file')!.hidden = !(e.target as HTMLInputElement).checked;
        }
        createDeckForm.onsubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData(createDeckForm);
            const spritesheetFile = formData.get('spritesheet') as File;
            const backFile = formData.get('back') as File;
            const backIndex = +<string>formData.get('back-index');
            const cols = +<string>formData.get('cols');
            const rows = +<string>formData.get('rows');
            const isBackSeparate = formData.get('back-separate') === 'on';

            let itemsToSend: Extract<DataEventData, { type: 'sync-resources' }>['message'] | null = null;
            if (!(Assets.cache.has(`${spritesheetFile.name}-sheet`) && (!isBackSeparate || (isBackSeparate && Assets.cache.has(backFile.name))))) {
                const spriteSheetTextureUrl = await getBase64(spritesheetFile);
                Assets.add({ alias: spritesheetFile.name, src: spriteSheetTextureUrl });
                await Assets.load<Texture>([spritesheetFile.name]);
                const texture = GetTexture(spritesheetFile.name);
                const width = texture.width;
                const height = texture.height;

                const frames = {}

                for (let j = 0; j < rows; j++) {
                    for (let i = 0; i < cols; i++) {
                        frames[`${spritesheetFile.name}-${j * cols + i + 1}`] = {
                            frame: { x: width / cols * i, y: height / rows * j, w: width / cols, h: height / rows },
                            sourceSize: { w: width / cols, h: height / rows },
                            spriteSourceSize: { x: 0, y: 0, w: width / cols, h: height / rows }
                        }
                    }
                }

                const spritesheetData: SpritesheetData = {
                    frames,
                    meta: {
                        scale: 1,
                        size: {
                            w: width,
                            h: height,
                        }
                    }
                }
                const spritesheet = new Spritesheet(texture, spritesheetData);
                await spritesheet.parse();
                Assets.cache.set(`${spritesheetFile.name}-sheet`, spritesheet);

                const backUrl = await getBase64(backFile);
                Assets.add({ alias: backFile.name, src: backUrl });
                await Assets.load<Texture>([backFile.name]);

                itemsToSend = [{ alias: spritesheetFile.name, spritesheetData, src: spriteSheetTextureUrl }]

                if (isBackSeparate) {
                    itemsToSend.push({ alias: backFile.name, src: backUrl });
                }
            }

            const spritesheet = Assets.get<Spritesheet>(`${spritesheetFile.name}-sheet`);
            const backTexture = isBackSeparate ? GetTexture(backFile.name) : spritesheet.textures[`${spritesheetFile.name}-${backIndex}`];
            console.log(backTexture)
            const cards: Card[] = [];

            for (let i = 0; i < Object.keys(spritesheet.textures).length - 1 + +isBackSeparate; i++) {
                const card = new Card(spritesheet.textures[`${spritesheetFile.name}-${i + 1}`], backTexture);
                cards.push(card);
            }
            gameManager.camera.addChild(new Stack(cards));
            gameManager.sync();
            if (itemsToSend) {
                room?.send({
                    type: 'sync-resources',
                    message: itemsToSend,
                })
            }
        }
        globalThis.gm = gameManager;

        gameManager.startGame();
    };

    hostBtn.addEventListener('click', (e) => {
        connectToLobby(nicknameInput.value);
    });

    joinBtn.addEventListener('click', (e) => {
        connectToLobby(nicknameInput.value, lobbyInput.value);
    })

})();
