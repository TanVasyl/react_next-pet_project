'use client'
import React, { useEffect, useState } from "react"
import { initializeApp } from "firebase/app";
import Registration from "./Registration/Registration";



type userData = {
    email: string,
    password: string
}

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
}
const getData = initializeApp(firebaseConfig)


const Autharization = () => {
    const [userData, setUserData] = useState({} as userData)
    useEffect(() => {
        const user: userData = JSON.parse(localStorage.getItem('CurrentUser')!)
        setUserData(user)
    }, [])
    if (userData) {
        return (
            <div>LogOut</div>
        )
    }
    return (
        <Registration />
    )
};

export default Autharization;
