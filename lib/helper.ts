export function isEmptyOrUndefined(text: string | undefined): boolean {
    return text === undefined || text.trim().length === 0;
}
