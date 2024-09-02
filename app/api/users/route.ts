import { NextRequest, NextResponse } from 'next/server';

export const GET = async(
    req: NextRequest,
) => {
    const user = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            username: 'emilys',
            password: 'emilyspass',
            })
        }).then(res => res.json()).catch(err => console.log(err))
    return NextResponse.json({ user: user })
}

export const POST = async(
    req: NextRequest,
) => {
    const body = await req.json()
    const email = body.email
    const password = body.password
    if(email==='test@task.com' && password==='12345678') {
        return NextResponse.json({ authentication: true })
    }else{
        if(email!=='test@task.com') {
            return NextResponse.json({ authentication: false, error: 'User Not Found' })
        }
        else if(password!=='12345678') {
            return NextResponse.json({ authentication: false, error: 'Wrong Password' })
        }else{
            return NextResponse.json({ authentication: false, error: 'internal error' })
        }
    }
}
