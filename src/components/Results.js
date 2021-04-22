import React from 'react'

const Results = ({title,image,url}) => {
    return (
        <div className="result">
           <img src={image} alt=""/>
          <a href={url}> <p style={{color:''}}>{title}</p></a>
            
        </div>
    )
}

export default Results
