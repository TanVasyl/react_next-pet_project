import { useCallback, useEffect, useState } from "react"


export type userData = {
  email: string,
  id: string,
  token: string
}
const useIsAuth = () => {
  const [userData, setUserData] = useState({} as userData)
  const getLocalUser = useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('CurrentUser')!)
    return setUserData(localUser)
  }, [])

  return {
    isAuth: !!userData?.id,
    email: userData?.email,
    id: userData?.id,
    token: userData?.token
  }
};

export default useIsAuth;
