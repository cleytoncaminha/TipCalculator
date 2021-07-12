import React from "react"


export function Result(){
    return (<div className="results">
        <div className="amount"><div>Tip amount <br/><span>/ person</span></div>
        <div class="number"> 52,00</div>
        </div>
        <div className="amount total"><div>Total <br/><span>/ person</span></div>
        <div class="number"> 52,00</div> </div>
        <div className="reset"><button value="RESET">RESET</button></div>
       
    </div>)
}