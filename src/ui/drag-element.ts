import { Vector } from "../utils/Vector";

const dragElement = <T extends HTMLElement>(dialog: T): T => {
    const lastPos: Vector = new Vector();
    const dragMouseDown = (e: MouseEvent) => {
        e.preventDefault();
        dialog.style.zIndex = '1';
        lastPos.x = e.clientX;
        lastPos.y = e.clientY;
        document.addEventListener('mouseup', closeDragElement);
        document.addEventListener('mousemove', elementDrag);
    }

    const elementDrag = (e: MouseEvent) => {
        e.preventDefault();
        const dx = lastPos.x - e.clientX;
        const dy = lastPos.y - e.clientY;
        lastPos.x = e.clientX;
        lastPos.y = e.clientY;
        dialog.style.top = (dialog.offsetTop - dy) + "px";
        dialog.style.left = (dialog.offsetLeft - dx) + "px";
    }

    const closeDragElement = () => {
        dialog.style.zIndex = '0';
        document.removeEventListener('mouseup', closeDragElement);
        document.removeEventListener('mousemove', elementDrag);
    }

    const header = dialog.querySelector<HTMLDivElement>(".dialog-header")!;
    if (header) {
        header!.addEventListener('mousedown', dragMouseDown);
    } else {
        dialog.addEventListener('mousedown', dragMouseDown);
    }

    return dialog;
}

export default dragElement;