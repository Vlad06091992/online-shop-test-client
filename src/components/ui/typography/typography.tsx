import {ComponentPropsWithoutRef, ElementType, ReactNode} from 'react'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'h1'> = {
    as?: T
    color?: string
    children: ReactNode
    variant?:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'tertiaryButton'
        | 'secondaryButton'
        | 'primaryButton'
        | 'textDescription',
    className?: string
} & ComponentPropsWithoutRef<T>
export const Typography = <T extends ElementType = 'h1'>({
                                                             as,
                                                             variant = 'h1',
                                                             className,
                                                             color,
                                                             ...rest
                                                         }: TypographyProps<T>) => {
    const Component = as || 'h1'

    return <Component style={{color}} className={`${s[variant]} ${className} `} {...rest} />
}
