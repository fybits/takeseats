export const button = (selector: string, onClick?: (event: MouseEvent) => {} | void): HTMLButtonElement => {
    const button = document.querySelector<HTMLButtonElement>(selector)!;
    if (onClick)
        button?.addEventListener('click', onClick);
    return button;
}

export const toggle = (button: HTMLButtonElement, view: HTMLElement) => {
    button.addEventListener('click', () => {
        view.hidden = !view.hidden;
    });
    return button;
}

export const form = (selector: string, onSubmit?: (event: SubmitEvent) => {} | void): HTMLFormElement => {
    const form = document.querySelector<HTMLFormElement>(selector)!;
    if (onSubmit)
        form?.addEventListener('submit', onSubmit);
    return form;
}
