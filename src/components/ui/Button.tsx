import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'tertiary'
}

function Button({
    children,
    variant = 'primary',
    ...props
}: ButtonProps) {
    return (
        <button {...props} data-variant={variant}>
        {children}
        </button>
    )
}

export default Button