'use client'
import React from "react"
import FormAuth from "../FormAuth";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { setUser, setLocalStorage } from "@/store/userSlice/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

const Registration = () => {
    const { push } = useRouter()
    const dispatch = useAppDispatch()

    const handleRegistration = (email: string, password: string) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                const person = {
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }
                dispatch(setUser(person));
                dispatch(setLocalStorage(person))
                push('/profile')
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <div>
            <FormAuth title={`Зарегистрироваться`} handleClick={handleRegistration} />
        </div>
    )
};

export default Registration;
