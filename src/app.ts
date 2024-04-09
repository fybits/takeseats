
import { Application, } from 'pixi.js';
import { PeerRoom } from './PeerRoom';
import Controls from './Controls';
import Camera from './game-objects/Camera';
import GameManager from './GameManager';
import { Vector } from './utils/Vector';

const canvas = document.querySelector<HTMLCanvasElement>('canvas')!;
canvas.tabIndex = 0;
canvas.autofocus = true;

const lobbyControlsContainer = document.querySelector<HTMLDivElement>('div#lobby-controls')!;

const nicknameInput = document.querySelector<HTMLInputElement>('input#nickname')!;
const hostBtn = document.querySelector<HTMLButtonElement>('button#host')!;
const lobbyInput = document.querySelector<HTMLInputElement>('input#lobby')!;
const joinBtn = document.querySelector<HTMLButtonElement>('button#join')!;


const storedNickname = localStorage.getItem('nickname');
if (storedNickname) {
    nicknameInput.value = storedNickname;
}

let room: PeerRoom | null = null;


(async () => {

    const app = new Application();
    await app.init({ canvas: canvas, resizeTo: window, backgroundColor: '#1E553E' });
    const camera = new Camera();
    app.stage.addChild(camera);

    new Controls(canvas);

    const connectToLobby = (nickname: string, lobbyKey?: string) => {
        localStorage.setItem('nickname', nickname);
        room = new PeerRoom(`${nickname}_takeseats`);
        if (lobbyKey) {
            console.log("connect")
            room.connectToMember(`${lobbyKey}_takeseats`);
        }
        lobbyControlsContainer.hidden = true;
        const gameManager = new GameManager(app, camera, room);
        room.on("message", (address, { type, message }) => {
            switch (type) {
                case 'player-cursor':
                    if (address !== room?.address()) {
                        gameManager.onPlayerCursor(address, message);
                    }
                    break;
                case 'move-object':
                    if (address !== room?.address()) {
                        gameManager.onObjectMove(address, message);
                    }
                    break;
            }
        });
        gameManager.startGame();
    };

    hostBtn.addEventListener('click', (e) => {
        connectToLobby(nicknameInput.value);
    });

    joinBtn.addEventListener('click', (e) => {
        connectToLobby(nicknameInput.value, lobbyInput.value);
    })

})();
