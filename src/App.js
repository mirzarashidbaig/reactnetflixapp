import React from 'react';
import Card from "./Card";
import Sdata from './Sdata';
import './index.css'

         

function ncard(val){
    return (


<Card
        imgsrc = {val.imgsrc}
        title = {val.title}
        des = {val.des}
        link = {val.link}
        
/>
    )

}


function App() {
    return(
        <>
        <div className="container">
            <div className="row">
        <h1 className='  text-center'>Top 5 Netflix Serie</h1>
                
            </div>
            <div className="row">

        
            {Sdata.map(ncard)}

            <div className="row">
            
            </div>
        
            </div>
        </div>
        
        </>
    )
    
    
}



export default App;



