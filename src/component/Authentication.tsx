'use client'
import React, { useState } from "react"
import Registration from "./Registration/Registration";
import '../service/firebase'
import useIsAuth from "@/hooks/useIsAuth";
import Link from "next/link";
import Authorization from "./Authorization/Authorization";




const Authentication = () => {
    const { isAuth, id, email } = useIsAuth()
    const [switchForm, setSwitchForm] = useState(true)
    if (!!isAuth) {
        return (
            <>
                <div>{id}</div>
                <div>{email}</div>
            </>
        )
    }
    return (
        <div>
            {switchForm ?
                <div>
                    <Registration />
                    <span>или <a onClick={() => setSwitchForm(!switchForm)}>Авторизуйся</a> </span>
                </div>
                :
                <div>
                    <Authorization />
                    <span onClick={() => setSwitchForm(!switchForm)}>Вернуться к регистрации?</span>
                </div>
            }


        </div>
    )
};

export default Authentication;
