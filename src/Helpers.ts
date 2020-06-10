export const charIsUpper = (char: string): boolean =>
    char.toUpperCase() === char;

export const charIsWhitespace = (char: string): boolean => !!char.match(/\s/g);
