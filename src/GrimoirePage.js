import React from 'react';
import data from './grimoirePages_data.js'

function GrimoirePage(props){
    return (
        <div className="innerDIV">
        <div className="grimoire_words">
            <h2>{data[props.pageIndex].title}</h2>
            <p>{data[props.pageIndex].description}</p>
        </div>
        <div className="grimoire_picture">
            <img className="test_gif" width='541' height="387"src={data[props.pageIndex].picture} alt=""/>
        </div>
        </div>
    )
}

export default GrimoirePage
