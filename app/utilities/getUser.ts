export type User = {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
    token?: string
    refreshToken?: string
}

export const getUser = async () => {
    let user:User;
    const res = await fetch('http://localhost:3000/api/users', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json()).catch(err => console.log(err))

    user = res.user
    window.localStorage.setItem('token', JSON.stringify(user.token))
    window.localStorage.setItem('refreshToken', JSON.stringify(user.refreshToken))
    delete user.token
    delete user.refreshToken
    window.localStorage.setItem('user', JSON.stringify(user))
    return res
    
}

export const getToken = () => {
    const token = window.localStorage.getItem('token')
    return token
}

export const getRefreshToken = () => {
    const refreshToken = window.localStorage.getItem('refreshToken')
    return refreshToken
}
