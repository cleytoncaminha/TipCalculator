import React from 'react';
import '../styles/dashboard.scss';
import '../styles/result.scss';


export function Tips(){
   function billValue(){
        let t = document.getElementsByClassName("billvalue")
        console.log(t)
   }

    return (
        <div className="dashboard">
         <div>  <div className="bill"><p>Bill</p>
         <div><input type="number" className="billvalue" placeholder="0" onChange={billValue}></input></div>
         </div>
        <div className="tips"><p>select tips %</p>
        <div className="btns">
        <button type="submit" className="btn" value="5" >5%</button>
        <button type="submit" className="btn" value="10">10%</button>
        <button type="submit" className="btn" value="15">15%</button>
        <button type="submit"  className="btn" value="25">25%</button>
        <button type="submit" className="btn" value="50">50%</button>
        <input type="number" placeholder="Custom"></input></div>
        </div>
        <div className="people"> <div className="numberpeople">
            <p>Number of People</p> <p className="error">Can't be zero</p></div>
            <input type="number" className="inputerror" placeholder="0"></input>
        </div>
        </div>

        <div className="results">

        <div className="amount">
            <div>Tip amount <br/><span>/ person</span></div>
        <div class="number"> 52,00</div>
        </div>
        <div className="amount total"><div>Total <br/><span>/ person</span></div>
        <div class="number"> 52,00</div> </div>
        <div className="reset"><button value="RESET">RESET</button></div>
       
    </div>
    
    </div>
    )
}