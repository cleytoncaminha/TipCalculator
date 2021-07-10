import '../styles/dashboard.scss';
import React from 'react';
import dollarImg from '../assets/images/icon-dollar.svg'

function targetValue(event){
    console.log(event.target.value)
}

export function Dashboard(){
    return(
        <div className="dashboard">
         <div className="bill"><p>Bill</p>
         <div><input type="number"></input></div>
         
         </div>
        </div>
    )
}



export default Dashboard;