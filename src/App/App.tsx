import * as React from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/Header";

const App: React.FC = () => {

    return (
        <div className={'app'}>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default App
