import {ComponentPropsWithoutRef, ElementType, ReactNode} from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'tertiary'
    className?: string
    onClick?: () => void
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
    {
        variant = 'primary',
        className,
        as,
        ...rest
    }: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
    const Component = as || 'button'
    return (
        <Component
            className={`${s[variant]}  ${s.button} ${className}`}
            {...rest}
        />
    )
}
