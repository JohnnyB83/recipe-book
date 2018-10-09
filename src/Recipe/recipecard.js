import React from 'react'

function RecipeCard(props) {
    return (
        // <div className={props.className + ' card'} onClick={props.onClick}>
        //     <img class="card-img-left card-images" src={props.recipeImg} alt="Card image" />
        //     <div className='card-body'>
        //         <h5 className='card-title'>{props.recipeName}</h5>
        //         <h6 className='card-text'>{props.recipeDesc}</h6>
        //     </div>
        // </div>

        <div className={props.className + " card"} onClick={props.onClick}>
            <div className="row no-gutters">
                <div className="col-auto">
                    <img className="card-images" src={props.recipeImg} alt="" />
                </div>
                <div className="col">
                    <div className="card-block px-2">
                        <h5 className="card-title">{props.recipeName}</h5>
                        <h6 className="card-text">{props.recipeDesc}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard