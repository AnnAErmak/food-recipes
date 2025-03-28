import * as React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import Recipes from "./pages/Recipes";
import InfoRecipe from "./pages/InfoRecipe";

const App: React.FC = () => {

    return (
            <Routes>
                <Route path="/" element={<Recipes/>} />
                    <Route path="recipe/:id" element={<InfoRecipe/>} />
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                    <Route index element={<Recipes/>}/>
                {/*</Route>*/}
            </Routes>
    )
}

export default App
