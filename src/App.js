import './App.css';
import React, {lazy, Suspense} from "react";
import Header from "./components/Header/Header";
import {Switch, Route, HashRouter} from 'react-router-dom';
import LoadingElem from "./components/LoadingElem/LoadingElem";

const ProductsContainer = lazy(() => import( './components/ProductsContainer/ProductsContainer' ));

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <div className="mainContainer">
                    <Suspense fallback={<LoadingElem/>}>
                        <Switch>
                            <Route exact path="/" component={ProductsContainer}/>
                        </Switch>
                    </Suspense>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
