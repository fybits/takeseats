
import { Application, Assets, Texture, autoDetectRenderer, loadTextures } from 'pixi.js';
import { PeerRoom } from './PeerRoom';
import Controls from './Controls';
import Camera from './game-objects/Camera';
import GameManager from './GameManager';
import Card from './game-objects/Card';

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

export const GetTexture = (key: string) => {
    const texture = Assets.get<Texture>(key);
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
    Assets.add({ alias: 'cards-sheet', src: "assets/spritesheet.json" })
    await Assets.load(['card', 'cursor', 'card-face', 'cards-sheet']);

    const connectToLobby = (nickname: string, lobbyKey?: string) => {
        localStorage.setItem('nickname', nickname);
        room = new PeerRoom(`${nickname}_takeseats`);
        const isHost = !lobbyKey;
        if (!isHost) {
            console.log("connect")
            room.connectToMember(`${lobbyKey}_takeseats`);
        }
        lobbyControlsContainer.hidden = true;
        const gameManager = new GameManager(app, camera, room, isHost);
        if (isHost) {
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
                const backFile: File = formData.get('back') as File;
                if (!(Assets.cache.has(faceFile.name) && Assets.cache.has(backFile.name))) {
                    const [faceUrl, backUrl] = await Promise.all([getBase64(faceFile), getBase64(backFile)]);
                    console.log(faceFile, backFile)
                    Assets.add({ alias: faceFile.name, src: faceUrl, data: { label: faceFile.name } })
                    Assets.add({ alias: backFile.name, src: backUrl, data: { label: backFile.name } })
                    room?.send({
                        type: 'sync-resources',
                        message: [{ alias: faceFile.name, src: faceUrl }, { alias: backFile.name, src: backUrl }]
                    })
                    await Assets.load<Texture>([faceFile.name, backFile.name]);
                }
                const card = new Card(GetTexture(faceFile.name), GetTexture(backFile.name));
                gameManager.camera.addChild(card);
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
