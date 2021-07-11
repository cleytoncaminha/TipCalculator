import '../styles/dashboard.scss';
import React from 'react';
import dollarImg from '../assets/images/icon-dollar.svg'
import { Tips } from './Tips';


export function Dashboard(){
    return(
        <div className="dashboard">
         <div className="bill"><p>Bill</p>
         <div><input type="number"></input></div>
         </div>
         <Tips></Tips>
        </div>
    )
}



export default Dashboard;