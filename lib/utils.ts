export function cn(...classes: Array<string | undefined | null | false>) { return classes.filter(Boolean).join(' '); }
export function imageStyles(image: string) { return { backgroundImage: `linear-gradient(180deg, rgba(5,20,28,.03),rgba(5,20,28,.18)),url("${image}")` }; }
