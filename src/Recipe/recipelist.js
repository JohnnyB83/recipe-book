import React, { Component } from 'react';
import RecipeCard from './recipecard';
import Search from './search';
import '../App.css';

class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.state = {recipes: this.props.recipes, currentRecipe: {}, selected: false, search: ''};

        this.updateTerm = this.updateTerm.bind(this);
    }

    updateTerm(term) {
        this.setState({search: term});
    }

    handleClick(data) {
        this.setState({currentRecipe: data, selected: !this.state.selected});
        this.props.currentRecipe(data);

    }

    render() {
        return (
            <div>
                <Search updateTerm={this.updateTerm} />
                {
                    this.state.recipes.map((recipe, index) => {
                        if(recipe.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                            return <RecipeCard key={index}
                            onClick={() => this.handleClick(recipe)}
                            className={this.state.currentRecipe.name === recipe.name ? 'active' : ''}
                            recipeName={recipe.name}
                            recipeDesc={recipe.desc}
                            recipeImg={recipe.img} />
                        }
                    })

                }
            </div>
        )
    }
}

export default RecipeList;