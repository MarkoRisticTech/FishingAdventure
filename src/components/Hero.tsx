interface HeroProps {
    children: React.ReactNode
}
export const Hero = ({ children }: HeroProps) => {
    return (
        <div className="hero min-h-screen bg-primary-content">
            <div className="hero-content w-screen flex flex-wrap">
                {children}
            </div>
        </div>
    )
}
