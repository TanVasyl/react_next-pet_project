import Link from "next/link";
import React from "react"
import style from './style.module.scss'

const Header = () => {
    return (
        <header>
            <Link className={style.button} href='/'>Home</Link>
            <Link className={style.button} href='/profile'>UserName</Link>
        </header>
    )
};

export default Header;
