import NextAuth, { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { User as NextAuthUser, Account } from 'next-auth'
import axios from 'axios'
import connectMongo from '@/utils/connect-mongo'
import User from '@/models/user'

const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || '',
            clientSecret: process.env.GOOGLE_SECRET || '',
        }),
    ],
    callbacks: {
        async signIn({
            user,
            account,
        }: {
            user: NextAuthUser
            account: Account | null
        }) {
            if (account?.provider === 'google') {
                try {
                    await connectMongo()
                    const userExists = await User.findOne({ email: user.email })

                    if (!userExists) {
                        const res = await axios(
                            `${process.env.NEXTAUTH_URL}/api/user`,
                            {
                                method: 'POST',
                                data: {
                                    email: user.email,
                                    name: user.name,
                                },
                            }
                        )
                        if (res.status === 201) {
                            return true
                        }
                    }

                    return true
                } catch (e) {
                    console.error(e)
                    return false
                }
            }
            return false
        },
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
