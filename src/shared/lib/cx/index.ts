import { cx as clsx, CxOptions } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

export function cx(...inputs: CxOptions[]): string {
    return twMerge(clsx(inputs))
}
