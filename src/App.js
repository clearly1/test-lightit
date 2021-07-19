import './App.css';
import React, {lazy, Suspense, useEffect} from "react";
import Header from "./components/Header/Header";
import {Switch, Route, HashRouter} from 'react-router-dom';
import LoadingElem from "./components/LoadingElem/LoadingElem";
import {ToastContainer} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth, setUsername} from "./features/auth/authSlice";

const CatalogProductsPage = lazy(() => import( './pages/CatalogProductsPage/CatalogProductsPage' ));

function App() {
    const dispatch = useDispatch();

    useEffect(()=>{
        if(document.cookie.match('(^|;) ?username=([^;]*)(;|$)') && document.cookie.match('(^|;) ?token=([^;]*)(;|$)')){
            dispatch(setUsername(document.cookie.match('(^|;) ?username=([^;]*)(;|$)')[2]))
        }
    },[]);

    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <ToastContainer />
                <div className="mainContainer">
                    <Suspense fallback={<LoadingElem/>}>
                        <Switch>
                            <Route exact path="/" component={CatalogProductsPage}/>
                        </Switch>
                    </Suspense>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
