import React from 'react';


function Card(props) {
    return (
        <>
                    <div className="col my-5">
                        <div className="card">
                            <img src={props.imgsrc} className="card-img-top" alt="..." height="200px"/>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-center">{props.title}</h5>
                                    <p className="card-text text-center">{props.des}</p>
                                    <a href={props.link} className="btn btn-primary" target="_blank">Go somewhere</a>
                                </div>
                        </div>
                    </div>
        </>
    )
}


export default Card;
