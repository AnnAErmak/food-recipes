import * as React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import Recipes from "./pages/Recipes";

const App: React.FC = () => {

    return (
            <Routes>
                <Route path="/" element={<Recipes/>}>
                    <Route path="/recipe">
                        <Route path=":id" element={<div>Инфа об одном рецепте</div>}/>
                    </Route>
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                    <Route index element={<div>главная</div>}/>
                </Route>
            </Routes>
    )
}

export default App
