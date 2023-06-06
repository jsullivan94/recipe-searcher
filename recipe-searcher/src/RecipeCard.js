

function RecipeCard({name, image, description, difficult}) {
    return (
        <div>
        <h1>{name}</h1>
        <h3>{difficult}</h3>
        <img src={image} alt={name}/>
        <div>{description}</div>
        </div>
);

}

export default RecipeCard;