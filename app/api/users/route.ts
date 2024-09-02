import { NextRequest, NextResponse } from 'next/server';

export const GET = async(
    req: NextRequest,
) => {
    return NextResponse.json({ message: 'John Doe' })
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
