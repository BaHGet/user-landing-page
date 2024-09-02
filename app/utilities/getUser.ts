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
    const res =  await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        username: 'emilys',
        password: 'emilyspass',
        })
    }).then(res => res.json()).catch(err => console.log(err))
    user = res
    localStorage.setItem('token', JSON.stringify(user.token))
    localStorage.setItem('refreshToken', JSON.stringify(user.refreshToken))
    delete user.token
    delete user.refreshToken
    localStorage.setItem('user', JSON.stringify(user))
    console.log(user)
    return res
    
}

export const getToken = () => {
    const token = localStorage.getItem('token')
    return token
}

export const getRefreshToken = () => {
    const refreshToken = localStorage.getItem('refreshToken')
    return refreshToken
}
