import { createSlice } from '@reduxjs/toolkit'

type UserType = {
    email: string | null,
    id: string | null,
    token: string | null
}

const initialState: UserType = {
    email: null,
    id: null,
    token: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, { payload }) {
            state.email = payload.email
            state.id = payload.id
            state.token = payload.token
            localStorage.setItem('CurrentUser', JSON.stringify(payload))
        },
        removeUser(state) {
            state.email = null
            state.id = null
        }
    }
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer 