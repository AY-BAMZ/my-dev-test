import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type TailwindClasses = { [className: string]: boolean };

export function cn(...inputs: (string | TailwindClasses)[]): string {
    return twMerge(clsx(...inputs));
}
