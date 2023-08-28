'use client'
import React from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import FormAuth from "../FormAuth";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { setLocalStorage, setUser } from "@/store/userSlice/userSlice";
import { useRouter } from "next/navigation";

const Authorization = () => {
    const dispatch = useAppDispatch()
    const { push } = useRouter()

    const handleLogIn = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                const person = {
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }
                dispatch(setUser(person));
                dispatch(setLocalStorage(person));
                push('/profile')
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                console.log(error.code, error.message);

            });
    }

    return (
        <div>
            <FormAuth title="Авторизация" handleClick={handleLogIn} />
        </div>
    )
};

export default Authorization;
