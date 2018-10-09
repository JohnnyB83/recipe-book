import React, { Component } from 'react';

class RecipeDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        if(this.props.showRecipe) {
            return (
                <div className='recipe-detail'>
                    <h3 className='recipe-title'>{this.props.showRecipe.name}</h3>
                    <h4>Time to make:</h4>
                    <h4>Tags:</h4>
                    <h4 className='recipe-steps-title'>Directions:</h4>
                    {
                        this.props.showRecipe.steps.map((instruction, index) => {
                            return <p className='recipe-steps' key={index}>{instruction}</p>
                        })
                    }
                </div>
            );
        }

        else {
            return (
                <div>
                    <h4>Please select</h4>
                </div>
            );
        }
    }
}

export default RecipeDetail;