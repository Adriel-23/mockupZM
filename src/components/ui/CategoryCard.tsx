type CategoryCardProps = {
    title: string
    image: string
    description?: string
}

function CategoryCard({ title, image, description }: CategoryCardProps) {
    return (
        <article>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        {description ? <p>{description}</p> : null}
        </article>
    )
}

export default CategoryCard