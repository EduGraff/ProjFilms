import React from 'react';
import './details.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import Filme from '../components/Filme/index.js';
import Assistido from '../Assistido'
import Comments from './../components/Comments/index';

function Detalhes({props}) {
    const [detalhes, setDetalhes] = useState();
    const {filme} = useParams();
  
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${filme}`)
            .then((response) => response.json())
            .then((data) => {
                setDetalhes(data);
            });
    }, []);
    
    if (!detalhes) {
        return <div className="loadingApi">
            <p>Carregando...</p>
            <img src="/assets/images/loading-gif.gif"></img>
        </div>;
    }

    return (

        <div>
            <div className="container text-center">
                <div className="custom-title p-3 pb-md-4 mx-auto text-center">
                    <h1 className="display-4 fw-normal">Detalhes</h1>
                    <p className="fs-5 text-muted">Informações sobre {detalhes.titulo}</p>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div className="card" >
                            <div className="image_details">
                                <img src={detalhes.poster} alt={detalhes.titulo} className="card-img-top" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card-pos">
                            <div className="card">
                                <div className="text_details">
                                    <h1>Filme: {detalhes.titulo}</h1>
                                    <p>Ano: {detalhes.ano} </p>
                                    <h3>Sinopse</h3>
                                    <div className="card-sinopse">
                                        <p>{detalhes.sinopse}</p>
                                    </div>
                                    <Assistido jaVisto={detalhes.assistido} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Comments filme={detalhes.titulo} /> */}
            </div>
        </div>
    )
}
export default Detalhes;