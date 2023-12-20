import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import './gamesFilter.css'
import {Link} from "react-router-dom";

export default class GamesFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: ''
        };
    }


    componentDidMount() {
        this.setState({selectedCategory:this.props.filter})
    }
    selectCategory(category){
        this.setState({ selectedCategory:category});
        this.props.setFilter(category);
    }
    render() {
        const category=this.state.selectedCategory
        return (
            <div className={'filter'}>
                <div className="filter-box">
                    <h4
                        onClick={()=>this.selectCategory('Скидки')}
                        className={category==='Скидки'?'selected-category':'category-title'}
                    >Discounts</h4>
                    <h4
                        onClick={()=>this.selectCategory('Новинки')}
                        className={category==='Новинки'?'selected-category':'category-title'}
                    >Novelty</h4>
                    <h4
                        onClick={()=>this.selectCategory('Ожидаемые')}
                        className={category==='Ожидаемые'?'selected-category':'category-title'}
                    >
                        expected</h4>
                </div>
            </div>
        );

    }
}