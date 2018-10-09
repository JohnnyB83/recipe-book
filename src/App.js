import React, { Component } from 'react';
import RecipeList from './Recipe/recipelist';
import RecipeDetail from './Recipe/recipedetail';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {currentRecipe: ''};

    this.updateCurrentRecipe = this.updateCurrentRecipe.bind(this);
  }

  updateCurrentRecipe(data) {
    this.setState({currentRecipe: data});
  }

  render() {
    const testRecipes = [
      {
      name: 'Lasagna',
      desc: 'description for test1',
      img: 'img',
      tags: [],
      steps: ['1. Get pan', '2. Put pan in oven']
      },
      {
        name: 'test2',
        desc: 'description for test2',
        img: 'source image',
        tags: [],
        steps: []
      },
      {
        name: 'awesome recipe',
        desc: 'description',
        img: 'source image',
        tags: [],
        steps: []
      }
  ];

    return (
      <div className="App">
        <div className='header'>
          <h3>header</h3>
        </div>
        <div className='recipe-list'>
          <RecipeList recipes={testRecipes} currentRecipe={this.updateCurrentRecipe} />
        </div>
        <div className='recipe-detail'>
          <RecipeDetail showRecipe={this.state.currentRecipe} />
        </div>
      </div>
    );
  }
}

export default App;
