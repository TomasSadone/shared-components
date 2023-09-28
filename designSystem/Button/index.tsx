import React, { ButtonHTMLAttributes } from "react"

type Props = {
    children?: React.ReactNode,
    hierarchy?: 'primary' | 'secondary'
    className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const AppButton = ({children, hierarchy = 'primary', className, ...props}: Props) => {
    return <button className={`${className} ${hierarchy}`} {...props}>{children}</button>
}