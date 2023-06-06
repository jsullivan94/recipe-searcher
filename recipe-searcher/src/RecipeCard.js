

function RecipeCard({name, image, description, difficult}) {
    return (
            <div className="recipe-card">
                <h1>{name}</h1>
                <img src={image} alt={name}/>
                <div>{description}</div>
            </div>
);

}

export default RecipeCard;