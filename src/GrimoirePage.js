import React from 'react';
import data from './grimoirePages_data'

function GrimoirePage(props){
    return (
        <div className={data[props.pageIndex].style}>
            <div className={data[props.pageIndex].grim_words}>
                <h2>{data[props.pageIndex].title}</h2>
                <p>{data[props.pageIndex].description}</p>
            </div>
            <div className={data[props.pageIndex].grim_picture}>
                <img
                    className="test_gif"
                    width={data[props.pageIndex].width}
                    height={data[props.pageIndex].height}
                    src={data[props.pageIndex].img}
                    alt="img"/>
            </div>
        </div>
    )
}

export default GrimoirePage
