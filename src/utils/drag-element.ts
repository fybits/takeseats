export default function dragElement<T extends HTMLElement>(dialog: T): T {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = dialog.querySelector<HTMLDivElement>(".dialog-header")!;
    if (header) {
        // if present, the header is where you move the DIV from:
        header!.onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        dialog.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e: MouseEvent) {
        e = e || window.event;
        e.preventDefault();
        dialog.style.zIndex = '1';
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        dialog.style.top = (dialog.offsetTop - pos2) + "px";
        dialog.style.left = (dialog.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        dialog.style.zIndex = '0';
        document.onmouseup = null;
        document.onmousemove = null;
    }
    return dialog;
}