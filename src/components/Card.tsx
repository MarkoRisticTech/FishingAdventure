import Image from 'next/image'

interface CardProps {
    title: string
    description: string
    image: string
    alt: string
    buttonText: string
}
export const Card = ({
    title,
    description,
    image,
    alt,
    buttonText,
}: CardProps) => {
    return (
        <div className="card w-96 glass">
            <figure>
                <Image src={image} alt={alt} width={500} height={500} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">{buttonText}</button>
                </div>
            </div>
        </div>
    )
}
