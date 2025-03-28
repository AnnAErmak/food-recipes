import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getRecipe} from "../../../utils/getRecipe.ts";

const InfoRecipe: React.FC = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState<{title:string}>({})

    useEffect(() => {
        getRecipe(+id).then(res => setRecipe(res))
    }, []);
    return (
       <div>{recipe.title}</div>
    )
}

export default InfoRecipe
