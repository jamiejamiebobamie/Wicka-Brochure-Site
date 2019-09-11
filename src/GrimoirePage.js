import React from 'react';
import data from './grimoirePages_data'

function GrimoirePage(props){
    return (
        <div className="innerDIV">
            <div className="grimoire_words">
                <h2>{data[props.pageIndex].title}</h2>
                <p>{data[props.pageIndex].description}</p>
            </div>
            <div className="grimoire_picture">
                <img className="test_gif" width={data[props.pageIndex].width} height={data[props.pageIndex].height} src={data[props.pageIndex].img} alt=""/>
            </div>
        </div>
    )
}

export default GrimoirePage
