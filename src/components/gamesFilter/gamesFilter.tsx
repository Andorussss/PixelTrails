import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import './gamesFilter.css';
import { Link } from "react-router-dom";

interface GamesFilterProps {
    filter: string;
    setFilter: (category: string) => void;
}

interface GamesFilterState {
    selectedCategory: string;
}

export default class GamesFilter extends Component<GamesFilterProps, GamesFilterState> {
    constructor(props: GamesFilterProps) {
        super(props);
        this.state = {
            selectedCategory: ''
        };
    }

    componentDidMount() {
        this.setState({ selectedCategory: this.props.filter });
    }

    selectCategory = (category: string): void => {
    this.setState({ selectedCategory: category });
    this.props.setFilter(category);
}

render() {
    const { selectedCategory } = this.state;
    return (
        <div className={'filter'}>
            <div className="filter-box">
                <h4
                    onClick={() => this.selectCategory('Скидки')}
                    className={selectedCategory === 'Скидки' ? 'selected-category' : 'category-title'}
                >
                    Discounts
                </h4>
                <h4
                    onClick={() => this.selectCategory('Новинки')}
                    className={selectedCategory === 'Новинки' ? 'selected-category' : 'category-title'}
                >
                    Novelty
                </h4>
                <h4
                    onClick={() => this.selectCategory('Ожидаемые')}
                    className={selectedCategory === 'Ожидаемые' ? 'selected-category' : 'category-title'}
                >
                    Expected
                </h4>
            </div>
        </div>
    );
}
}
