import { signIn } from 'next-auth/react'

export const LoginForm = () => {
    return (
        <div className="flex items-center justify-center">
            <button
                onClick={() => signIn('google')}
                className="btn btn-primary btn-lg flex items-center"
                type="button"
            >
                Sign in with Google
            </button>
        </div>
    )
}
