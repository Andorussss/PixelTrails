import React, {Component,useState} from 'react'
import {Route, Routes,} from 'react-router-dom';
import {
    HomePage,BasketPage,ActionGenrePage,
    AdventureGenrePage, SportGenrePage,StrategyGenrePage,
    RaceGenrePage, SimulatorGenrePage,PrivacyPolicyPage,
    AboutUsPage,GamePage
} from '../pages'
import Header from "../header";
import Footer from "../footer";
import './app.css';
import 'bootstrap/dist/css/bootstrap.css'
import ErrorBoundary from "../error-boundary";
export default class App extends Component {
    state = {
        hasError: false,
    }


    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true })
    }
    componentDidMount() {
        const BasketGames=[];
        localStorage.setItem('basket',JSON.stringify(BasketGames));
    }
    render() {
        return (
            <ErrorBoundary>
                <div className={'App'}>
                    <Header/>
                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage/>} />
                            <Route path="/basket" element={<BasketPage/>} />
                            <Route path="/action-genre" element={<ActionGenrePage/>} />
                            <Route path="/adventure-genre" element={<AdventureGenrePage/>} />
                            <Route path="/sport-genre" element={<SportGenrePage/>} />
                            <Route path="/strategy-genre" element={<StrategyGenrePage/>} />
                            <Route path="/race-genre" element={<RaceGenrePage/>} />
                            <Route path="/simulator-genre" element={<SimulatorGenrePage/>} />
                            <Route path="/game-page" element={<SimulatorGenrePage/>}/>
                            <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
                            <Route path="/about-us" element={<AboutUsPage/>}/>
                            <Route path="/game/:id" element={<GamePage/>}/>
                        </Routes>
                    </main>
                    <Footer/>
                </div>
            </ErrorBoundary>
        );
    }
}