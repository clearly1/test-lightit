import './App.css';
import React, {lazy, Suspense, useEffect} from "react";
import Header from "./components/Header/Header";
import {Switch, Route, HashRouter} from 'react-router-dom';
import LoadingElem from "./components/LoadingElem/LoadingElem";
import {ToastContainer} from "react-toastify";
import {useDispatch} from "react-redux";
import {setUsername} from "./features/auth/authSlice";
import axios from 'axios'

const CatalogProductsPage = lazy(() => import( './pages/CatalogProductsPage/CatalogProductsPage' ));

function App() {
    const dispatch = useDispatch();

    useEffect(()=>{
        if(document.cookie.match('(^|;) ?username=([^;]*)(;|$)') && document.cookie.match('(^|;) ?token=([^;]*)(;|$)')){
            dispatch(setUsername(document.cookie.match('(^|;) ?username=([^;]*)(;|$)')[2]))
        }
    },[]);

    const logOutFunc = () => {
        dispatch(setUsername(null));
        document.cookie = 'username=; expires=' + new Date().toUTCString();
        document.cookie = 'token=; expires=' + new Date().toUTCString();
        window.location.href = "/";
    };

    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if(error.status === 401){
            logOutFunc();
        }
        return Promise.reject(error);
    });

    return (
        <div className="App">
            <HashRouter>
                <Header logOutFunc={logOutFunc}/>
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
