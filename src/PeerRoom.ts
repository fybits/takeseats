/* Credit
    AntonNevsgodov <nevzgodov.anton@gmail.com>
*/

import { DataConnection, Peer } from 'peerjs'
import { Vector } from './utils/Vector';
import GameObject from './game-objects/GameObject';
import { SerializedObject } from './GameManager';
import { SpritesheetData, tilingBit } from 'pixi.js';

export type DataEventData =
    | { type: 'members-list', message: string[] }
    | { type: 'sync-objects', message: { gameObjects: SerializedObject[], hands: { items: number[], player: string | null }[], nextUID: number } }
    | { type: 'sync-resources', message: { alias: string, spritesheetData?: SpritesheetData, src: string }[] }
    | { type: 'request-resource', message: { alias: string }[] }
    | { type: 'chat' | 'announce', message: string }
    | { type: 'ping-point', message: { position: Vector, texture: string, tint: number, duration: number } }
    | { type: 'player-cursor', message: { position: Vector } }
    | { type: 'move-start-object', message: { target: number } }
    | { type: 'move-object', message: { target: number, position: Vector } }
    | { type: 'move-end-object', message: { target: number } }
    | { type: 'rotate-object', message: { target: number, angle: number } }
    | { type: 'roll-object', message: { target: number, seed: number } }
    | { type: 'flip-object', message: { target: number } }
    | { type: 'stack-object', message: { target: number, object_to_stack: number } }
    | { type: 'take-object-from-stack', message: { target: number, object_from_stack: number, point: Vector } }
    | { type: 'put-card-in-hand', message: { handIndex: number, card_id: number, index: number } }
    | { type: 'player-choose-hand', message: { handIndex: number } }
    | { type: 'player-disconnected', message: null }
    | { type: 'update-card-hidden', message: { card_id: number, handIndex: number, state: 'enter' | 'leave' } }

export class PeerRoom {
    private members: DataConnection[] = [];
    private peer: Peer;
    private unloadListener = () => this.destroy();

    private listeners: ((address: string, data: DataEventData) => void)[] = []

    constructor(private userId: string) {
        this.peer = new Peer(userId, { host: 'takeseats.ru', port: 9000, path: '/takeseats', secure: false });
        this.peer.on('error', (err) => { console.error(`${err.name}: ${err.message} [${err.type}]`) })
        this.peer.on('connection', (member) => this.addDataConnectionEventHandlers(member));
        window.addEventListener('beforeunload', this.unloadListener)
    }

    private emit(address: string, data: DataEventData) {
        this.listeners.forEach((listener) => listener(address, data));
    }

    private addDataConnectionEventHandlers(dc: DataConnection) {
        dc.on('open', () => {
            this.members.push(dc);
            dc.send({ type: 'members-list', message: this.members.map((m) => m.peer).filter(p => p !== dc.peer) });
            console.log('sending members', this.members)
            this.emit(dc.peer, { type: 'announce', message: dc.peer });
        });

        dc.on('close', () => {
            this.members = this.members.filter((m) => m !== dc);
            this.emit(dc.peer, { type: 'player-disconnected', message: null })
        });

        dc.on('data', ((data: DataEventData) => {
            if (data.type === 'members-list') {
                console.log('received members', data.message)
                data.message.forEach((peer) => {
                    if (!this.members.some(m => m.peer === peer)) {
                        const dc = this.peer.connect(peer);
                        this.addDataConnectionEventHandlers(dc);
                    };
                })
                return;
            }

            this.emit(dc.peer, data);
        }) as (data: unknown) => void)

        dc.on('error', () => {
            console.log('error');
        })
    }

    connectToMember(userId: string) {
        this.peer.once('open', () => {
            const dc = this.peer.connect(userId);
            this.addDataConnectionEventHandlers(dc);
        })
    }

    destroy() {
        this.peer.destroy();
        window.removeEventListener('beforeunload', this.unloadListener)
    }

    address() {
        return this.userId;
    }

    on(event: 'message', listener: (address: string, data: DataEventData) => void) {
        this.listeners.push(listener);
    }

    send(arg: DataEventData, chunked?: boolean) {
        this.listeners.forEach(l => l(this.userId, arg))
        this.members.forEach(m => m.send(arg, chunked))
    }

    sendTo(to: string, arg: DataEventData, chunked?: boolean) {
        const peer = this.members.find(m => m.peer === to);
        if (peer) peer.send(arg, chunked)
    }
}