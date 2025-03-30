import React, {useEffect} from "react";
import {getRecipes} from "../../../utils/getRecipes.ts";
import {Link} from "react-router-dom";
import cn from "classnames";
import styles from "./Recipes.module.scss";
import Text from "../../../components/Text";

const Recipes: React.FC = () => {

    const [recipes, setRecipes] = React.useState<{id:number}[]>([])
    useEffect(() => {
        getRecipes().then(res => setRecipes(res))
    }, []);

    return (
        <>
            <div className={cn(styles.imageContainer)} />
            <Text view={'p-20'} color={'primary'} className={styles.text}>
                Find the perfect food and drink ideas for every occasion, from weeknight dinners to holiday feasts.
            </Text>
            <div style={{display: "flex", flexDirection:"column"}}>
                {recipes.map((recipe, index) => (
                    <Link to={`/recipe/${recipe.id}`} key={index}>{recipe.id}</Link>))
                }
            </div>
        </>

    )
}

export default Recipes
