import React, {useEffect} from "react";
import {getRecipes} from "../../../utils/getRecipes.ts";
import {Link} from "react-router-dom";

const Recipes: React.FC = () => {

    const [recipes, setRecipes] = React.useState<{id:number}[]>([])
    useEffect(() => {
        getRecipes().then(res => setRecipes(res))
    }, []);

    return (
        <>
            <div>Страница с рецептами</div>
            <div style={{display: "flex", flexDirection:"column"}}>
                {recipes.map((recipe, index) => (
                    <Link to={`/recipe/${recipe.id}`} key={index}>{recipe.id}</Link>))
                }
            </div>
        </>

    )
}

export default Recipes
