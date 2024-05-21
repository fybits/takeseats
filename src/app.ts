
import { Application, Assets, Spritesheet, SpritesheetData, Texture, autoDetectRenderer, getTemporaryCanvasFromImage, loadTextures } from 'pixi.js';
import { DataEventData, PeerRoom } from './PeerRoom';
import Controls from './Controls';
import Camera from './game-objects/Camera';
import GameManager, { SerializedObject } from './GameManager';
import Card from './game-objects/Card';
import Stack from './game-objects/Stack';
import { Vector } from './utils/Vector';
import { currentID } from './utils/uniqueID';
import JSZip, { JSZipObject, file } from 'jszip';
import { saveAs } from 'file-saver';
import dragElement from './utils/drag-element';

declare global {
    var gm: GameManager;
}

interface SaveFile {
    name: string;
    meta: {
        timestamp: number;
    }
    gameObjects: SerializedObject[];
    hands: { player: string | null, items: number[] }[];
    nextUID: number;
}

const canvas = document.querySelector<HTMLCanvasElement>('canvas')!;
canvas.tabIndex = 0;
canvas.autofocus = true;

const lobbyControlsContainer = document.querySelector<HTMLDivElement>('div#lobby-controls')!;

const nicknameInput = document.querySelector<HTMLInputElement>('input#nickname')!;
const hostBtn = document.querySelector<HTMLButtonElement>('button#host')!;
const lobbyInput = document.querySelector<HTMLInputElement>('input#lobby')!;
const joinBtn = document.querySelector<HTMLButtonElement>('button#join')!;

const createCardForm = dragElement(document.querySelector<HTMLFormElement>('#card-dialog')!);
const createDeckForm = dragElement(document.querySelector<HTMLFormElement>('#deck-dialog')!);
const saveTableForm = dragElement(document.querySelector<HTMLFormElement>('#save-dialog')!);
const loadTableForm = dragElement(document.querySelector<HTMLFormElement>('#load-dialog')!);

const closeBtns = document.querySelectorAll<HTMLInputElement>('.close');
closeBtns.forEach((btn) => {
    btn.onclick = (e) => (e.target as HTMLElement).parentElement!.parentElement!.hidden = true;
})

const storedNickname = localStorage.getItem('nickname');
if (storedNickname) {
    nicknameInput.value = storedNickname;
}

let room: PeerRoom | null = null;

function getDataURL(file: Blob): Promise<string> {
    const reader = new FileReader();
    const newFile = new File([file], 'temp', { type: file.type || 'image/jpeg' })
    return new Promise(resolve => {
        reader.onload = ev => {
            resolve(reader.result as string)
        }
        reader.readAsDataURL(newFile)
    })
}

const aliasesToFetch: Set<string> = new Set<string>();
let fetchTimeout: number | undefined;

export const GetTexture = (key: string) => {
    let texture = Assets.get<Texture>(key);
    if (!texture) {
        const isSpritesheetMatch = key.match(/(.+)-\d+$/);
        if (isSpritesheetMatch) {
            aliasesToFetch.add(`${isSpritesheetMatch[1]}-sheet`);
        } else {
            aliasesToFetch.add(key);
        }
        if (fetchTimeout) {
            clearTimeout(fetchTimeout);
        }
        fetchTimeout = setTimeout(() => {
            console.log('request-resource')
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
    Assets.add({ alias: 'd20', src: "assets/d20.json" });

    // await Assets.load(['card', 'cursor', 'arrow', 'card-face', 'cards-sheet']);
    await Assets.load(['card', 'cursor', 'arrow', 'card-face', 'd20']);
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

        //#region ui
        const syncBtn = document.querySelector<HTMLButtonElement>("#sync-btn")!;
        syncBtn.hidden = false;
        syncBtn.addEventListener('click', async () => gameManager.sync());

        const saveBtn = document.querySelector<HTMLButtonElement>("#save-btn")!;
        saveBtn.hidden = false;
        saveBtn.addEventListener('click', async () => {
            saveTableForm.hidden = false;
            return;

        });

        saveTableForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(saveTableForm);
            const name = formData.get('name') as string;
            const isPackingTextures = formData.get('pack-textures') === 'on';

            const objectSerialized: SerializedObject[] = [];
            const aliasesToSave: Set<string> = new Set<string>();
            const textures: { alias: string, spritesheetData?: SpritesheetData, src: string }[] = [];

            const getTexture = (texture: Texture) => {
                const isSpritesheetMatch = texture.label!.match(/(.+)-\d+$/);
                if (isSpritesheetMatch) {
                    if (!aliasesToSave.has(`${isSpritesheetMatch[1]}-sheet`)) {
                        aliasesToSave.add(`${isSpritesheetMatch[1]}-sheet`);
                        const spritesheet = Assets.get<Spritesheet>(`${isSpritesheetMatch[1]}-sheet`);
                        textures.push({
                            alias: isSpritesheetMatch[1],
                            spritesheetData: spritesheet.data,
                            src: texture.source.label,
                        });
                    }
                } else {
                    if (!aliasesToSave.has(texture.label!)) {
                        textures.push({
                            alias: texture.label!,
                            src: texture.source.label,
                        });
                    }
                }
            }

            for (let obj of gameManager.gameObjects.values()) {
                objectSerialized.push(obj.serialize());
                if (isPackingTextures) {
                    if (obj instanceof Card) {
                        getTexture(obj.face);
                        getTexture(obj.back);
                    } else {
                        getTexture(obj.currentGraphics.texture);
                    }
                }
            }
            const zip = new JSZip();
            if (isPackingTextures) {
                const texturesFolder = zip.folder('textures');
                textures.forEach((texture) => {
                    texturesFolder?.file(texture.alias, texture.src.replace(/^data:image\/?[A-z]*;base64,/, ''), { base64: true });
                    if (texture.spritesheetData) {
                        texturesFolder?.file(`${texture.alias}.json`, JSON.stringify(texture.spritesheetData));
                    }
                });
            }

            const state: SaveFile = {
                gameObjects: objectSerialized,
                hands: gameManager.hands.map((hand) => ({ player: null, items: hand.items.map(item => item.id) })),
                nextUID: currentID,
                name,
                meta: {
                    timestamp: Date.now(),
                }
            }

            const storageRoot = await navigator.storage.getDirectory();
            const saveFile = await storageRoot.getFileHandle(`${name}.json`, { create: true });
            const texturesFile = await storageRoot.getFileHandle(`${name}_textures.zip`, { create: true });

            zip.generateAsync({ type: "blob", compression: 'DEFLATE' }).then(async (content) => {
                if (e.submitter!.id === 'save-table-to-disk') {
                    const blob = new Blob([JSON.stringify(state)], { type: 'plain/text' });
                    saveAs(blob, `${name}.json`);
                    if (isPackingTextures) {
                        saveAs(content, `${name}_textures.zip`);
                    }
                } else {
                    const stream = await saveFile.createWritable();
                    try {
                        await stream.write(JSON.stringify(state));
                    } finally {
                        await stream.close();
                    }
                    if (isPackingTextures) {
                        const streamTextures = await texturesFile.createWritable();
                        try {
                            await streamTextures.write(content);
                        } finally {
                            await streamTextures.close();
                        }
                    }
                }
            });

        })

        const loadBtn = document.querySelector<HTMLButtonElement>("#load-btn")!;
        loadBtn.hidden = false;
        loadBtn.addEventListener('click', async () => {
            loadTableForm.hidden = false;
            // show saves
            const listContainer = document.querySelector<HTMLDivElement>('#saves-list')!;
            listContainer.innerHTML = ''
            const storageRoot = await navigator.storage.getDirectory();
            const entries = storageRoot.entries();
            for await (const [path, fileHandle] of entries) {
                if (path.endsWith('.json')) {
                    const item = document.createElement('div');
                    item.className = 'save-list-item';

                    const itemImage = document.createElement('img');
                    itemImage.src = 'https://icons.iconarchive.com/icons/iconcubic/dnd-dice/32/d20-icon.png';
                    itemImage.height = 35;
                    item.appendChild(itemImage);

                    const itemInfoContainer = document.createElement('div');

                    const itemText = document.createElement('p');
                    itemText.innerText = path.replace('.json', '');
                    itemInfoContainer.appendChild(itemText);

                    const saveHandle = await storageRoot.getFileHandle(path);
                    const saveFile = await saveHandle.getFile();
                    const itemMeta = document.createElement('p');
                    itemMeta.className = 'meta';;
                    item.appendChild(itemInfoContainer);
                    try {
                        const state: SaveFile = JSON.parse(await saveFile.text());

                        itemMeta.innerText = new Date(state.meta.timestamp).toLocaleString();

                        const itemLoad = document.createElement('button');
                        itemLoad.addEventListener('click', async () => {
                            const texturesFileHandle = await storageRoot.getFileHandle(`${path.replace('.json', '')}_textures.zip`);
                            await loadTextures(await texturesFileHandle.getFile());
                            loadSave(state);
                        })
                        itemLoad.innerText = 'Load';
                        item.appendChild(itemLoad);
                    } catch (e) {
                        itemMeta.innerText = 'CORRUPTED';
                        itemMeta.style.color = 'red';
                        itemMeta.style.fontWeight = 'bold';
                    }
                    itemInfoContainer.appendChild(itemMeta);

                    const itemRemove = document.createElement('button');
                    itemRemove.innerText = 'x';
                    itemRemove.addEventListener('click', async () => {
                        await storageRoot.removeEntry(path);
                        item.remove();
                    })
                    item.appendChild(itemRemove);

                    listContainer.appendChild(item);
                }
            }
        });

        loadTableForm.addEventListener('submit', async (e) => {
            e.preventDefault()
            if (e.submitter?.id === 'load-table') {
                const formData = new FormData(loadTableForm);
                const saveFile = formData.get('save-file') as File;
                const state: SaveFile = JSON.parse(await saveFile.text());
                loadSave(state);
            }
        });

        const loadTextures = async (texturesFile: File) => {
            const zip = new JSZip();
            const zipObject = await zip.loadAsync(await texturesFile.arrayBuffer(), { createFolders: true });
            const textureAliases: string[] = [];
            const spritesheetsToResolve: { path: string, spriteSheetData: SpritesheetData }[] = [];
            const filesTextures: { path: string, file: JSZipObject }[] = [];
            zipObject.folder('textures')!.forEach((path, file) => filesTextures.push({ path, file }));
            for (const { path, file } of filesTextures) {
                if (path.endsWith('json')) {
                    spritesheetsToResolve.push({ path, spriteSheetData: JSON.parse(await file.async('string')) })
                } else {
                    const blob = await file.async('blob');
                    const src = await getDataURL(blob);
                    textureAliases.push(path);
                    Assets.add({ alias: path, src: src })
                }
            }
            await Assets.load(textureAliases);
            spritesheetsToResolve.forEach(async ({ path, spriteSheetData }) => {
                const alias = path.replace('.json', '');
                const texture = GetTexture(alias);
                const spritesheet = new Spritesheet(texture, spriteSheetData);
                await spritesheet.parse();
                Assets.cache.set(`${alias}-sheet`, spritesheet);
            });
        }

        const loadSave = async (state: SaveFile) => {
            gameManager.syncObjects({
                gameObjects: state.gameObjects,
                nextUID: state.nextUID,
                hands: state.hands,
            });
            gameManager.sync();
        }

        const cardBtn = document.querySelector<HTMLButtonElement>("#create-card-btn")!;
        cardBtn.hidden = false;
        cardBtn.addEventListener('click', () => {
            createCardForm.hidden = false;
        });
        const cardSizeToggle = document.querySelectorAll<HTMLInputElement>('#card-size-options > input')!;
        const customSizeValuesDiv = document.querySelector<HTMLInputElement>('#card-size-custom-values')!;

        const cardSizeToggleHandler = (event: Event) => {
            customSizeValuesDiv.hidden = (event.target as HTMLInputElement).value !== 'custom';
        };
        cardSizeToggle.forEach((input) => input.addEventListener('change', cardSizeToggleHandler))

        createCardForm.onsubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData(createCardForm);
            const faceFile = formData.get('face') as File;
            const backFile = formData.get('back') as File;

            if (!(Assets.cache.has(faceFile.name) && Assets.cache.has(backFile.name))) {
                const [faceUrl, backUrl] = await Promise.all([getDataURL(faceFile), getDataURL(backFile)]);
                Assets.add({ alias: faceFile.name, src: faceUrl })
                Assets.add({ alias: backFile.name, src: backUrl })
                await Assets.load<Texture>([faceFile.name, backFile.name]);
            }

            const cardSize = formData.get('card-size');
            const size = new Vector();
            switch (cardSize) {
                case 'image':
                    size.x = -1;
                    size.y = -1;
                    break;
                case 'custom':
                    size.x = +(formData.get('width') || 200);
                    size.y = +(formData.get('height') || 280);
                    break
                case 'default':
                default:
                    size.x = 200;
                    size.y = 280;
                    break;
            }
            const card = new Card(GetTexture(faceFile.name), GetTexture(backFile.name), size.x, size.y);
            gameManager.camera.addChild(card);
            gameManager.sync();
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
                const spriteSheetTextureUrl = await getDataURL(spritesheetFile);
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

                const backUrl = await getDataURL(backFile);
                Assets.add({ alias: backFile.name, src: backUrl });
                await Assets.load<Texture>([backFile.name]);

                itemsToSend = [{ alias: spritesheetFile.name, spritesheetData, src: spriteSheetTextureUrl }]

                if (isBackSeparate) {
                    itemsToSend.push({ alias: backFile.name, src: backUrl });
                }
            }

            const spritesheet = Assets.get<Spritesheet>(`${spritesheetFile.name}-sheet`);
            const backTexture = isBackSeparate ? GetTexture(backFile.name) : spritesheet.textures[`${spritesheetFile.name}-${backIndex}`];

            const cards: Card[] = [];

            for (let i = 0; i < Object.keys(spritesheet.textures).length - 1 + +isBackSeparate; i++) {
                const card = new Card(spritesheet.textures[`${spritesheetFile.name}-${i + 1}`], backTexture);
                cards.push(card);
            }
            gameManager.camera.addChild(new Stack(cards));
            gameManager.sync();
        }
        //#endregion ui

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
