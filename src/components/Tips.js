import React from 'react';
import '../styles/dashboard.scss';

function targetValue(event){
    console.log(event.target.value)

}

export function Tips(){
    return (
        <div className="tips"><p>select tips %</p>
        <div className="btns">
        <button type="submit" onClick={targetValue} className="btn" value="5">5%</button>
        <button type="submit" onClick={targetValue} className="btn" value="10">10%</button>
        <button type="submit" onClick={targetValue} className="btn" value="15">15%</button>
        <button type="submit" onClick={targetValue} className="btn" value="25">25%</button>
        <button type="submit" onClick={targetValue} className="btn" value="50">50%</button>
        <input type="number" placeholder="Custom"></input></div>
        </div>
    )
}