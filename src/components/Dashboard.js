import '../styles/dashboard.scss';
import '../styles/result.scss'
import React from 'react';
import { Tips } from './Tips';
import { Result } from './Result';

export function Dashboard(){
    return(
        <div className="dashboard">
         <Tips></Tips>
         <Result></Result>
        </div>
    )
}



export default Dashboard;