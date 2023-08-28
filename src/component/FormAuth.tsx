'use client'

import { title } from "process";
import React, { FC, useState } from "react"

interface FormProps {
    title: string,
    handleClick: (email: string, password: string) => void
}

const FormAuth: FC<FormProps> = ({ title, handleClick }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <input
                type="email"
                placeholder="Введите Ваш e-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                type="password"
                placeholder="Введите Ваш пароль"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button onClick={() => handleClick(email, password)}>{title}</button>
        </div>
    )
};

export default FormAuth;
