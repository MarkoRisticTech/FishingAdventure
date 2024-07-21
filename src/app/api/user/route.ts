import { NextRequest, NextResponse } from 'next/server'
import connectMongo from '@/utils/connect-mongo'
import { HttpStatusCode } from 'axios'
import { CreateUserDto } from '@/dto/create-user.dto'
import User from '@/models/user'

export async function POST(req: NextRequest) {
    try {
        await connectMongo()
        const body: CreateUserDto = await req.json()
        if (body.name && body.email) {
            const user = await User.create(body)
            return NextResponse.json(
                { user, message: 'New user has been created' },
                { status: HttpStatusCode.Created }
            )
        }
        return NextResponse.json(
            { message: 'User name or email is missing' },
            { status: HttpStatusCode.BadRequest }
        )
    } catch (error) {
        return NextResponse.json(
            { message: error },
            { status: HttpStatusCode.BadRequest }
        )
    }
}
