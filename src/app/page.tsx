'use client'

import { useSession } from 'next-auth/react'

import { Hero } from '@/components/Hero'
import { Card } from '@/components/Card'
import { LoginForm } from '@/components/LoginForm'
import { Loading } from '@/components/Loading'

export default function Home() {
    const { status } = useSession()

    if (status === 'unauthenticated') {
        return (
            <Hero>
                <LoginForm />
            </Hero>
        )
    }

    if (status === 'loading') {
        return (
            <Hero>
                <Loading />
            </Hero>
        )
    }

    return (
        <Hero>
            <Card
                title="Best fishing lures"
                description="Check out our best fishing lures for your next fishing adventure"
                image="/images/lures.jpg"
                alt="lures"
                buttonText="Check now!"
            />
            <Card
                title="Check out our blog"
                description="You can write best blog about your fishing adventure"
                image="/images/fishing-blog.jpg"
                alt="fishing-blog"
                buttonText="Write now!"
            />
            <Card
                title="Best fishing spots"
                description="Looking for best fishing spots? Check out our list of best fishing spots"
                image="/images/fishing-spot.jpg"
                alt="fishing-spot"
                buttonText="Look now!"
            />
        </Hero>
    )
}
