import './App.css';
import React, {lazy, Suspense} from "react";
import Header from "./components/Header/Header";
import {Switch, Route, HashRouter} from 'react-router-dom';
import LoadingElem from "./components/LoadingElem/LoadingElem";

const CatalogProductsPage = lazy(() => import( './pages/CatalogProductsPage/CatalogProductsPage' ));
/*
const SingleProductPage = lazy(() => import( './pages/SingleProductPage/SingleProductPage' ));
*/

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <div className="mainContainer">
                    <Suspense fallback={<LoadingElem/>}>
                        <Switch>
                            <Route exact path="/" component={CatalogProductsPage}/>
                            {/*<Route exact path="/product/:id" component={SingleProductPage}/>*/}
                        </Switch>
                    </Suspense>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
