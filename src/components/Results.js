import React from 'react'

const Results = ({title,image,url,ingredients}) => {
    return (
        <div className="result card">
            <div className="image">
           <img src={image} alt={title}/>
           </div>
           <div className="container">
                <h2>{title}</h2> <br/>
                <h3><b>Ingredients:</b></h3>
                <ul>
                {ingredients.map((ingredient, index) => 
                    <li>{index}{ingredient.text}</li>
                )}
                </ul><br/>
                
            </div>
         <div className="btn">
            <button><a href={url}>See Full Recipe</a> </button>
            </div>
        </div>
    )
}

export default Results
