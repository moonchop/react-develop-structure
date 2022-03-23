import React from 'react'
import { StringLiteralLike } from 'typescript';

interface IButtonProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({children,onClick}: IButtonProps) {
    return (
    <button onClick={onClick} style={{background:"pink"}}>{children}</button>
    )
}

export default Button;