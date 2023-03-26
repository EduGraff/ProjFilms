import React from 'react';
import Footer from './../components/Footer/index';
import { useParams } from 'react-router-dom';
import './details.css';

const filmes = [{
    "nome": "Megamente",
    "duracao": "1H36",
    "genero": "Animação/Comédia",
    "descricao": "Embora seja o vilão mais brilhante que o mundo já conheceu, Megamente é o menos bem-sucedido. Derrotado repetidamente pelo heroico Metro Man, ele fica surpreso quando finalmente consegue derrotar o seu inimigo de longa data. Porém, sem Metro Man, Megamente não tem nenhum propósito na vida, então ele cria um novo adversário que logo decide que é mais divertido ser um vilão que um herói.",
    "ano": 2010,
    "foto": "megamente.jpg",
    "nota": "81%"
},
{
    "nome": "Shrek",
    "duracao": "1H30",
    "genero": "Animação/Comédia",
    "descricao": "Um ogro tem sua vida invadida por personagens de contos de fadas que acabam com a tranquilidade de seu lar. Ele faz um acordo pra resgatar uma princesa.",
    "ano": 2001,
    "foto": "shrek.jpg",
    "nota": "86%"
},
{
    "nome": "Zohan",
    "duracao": "1H52",
    "genero": "Ação/Aventura/Comédia",
    "descricao": "Cansado de todas as lutas em seu país, um lendário militar israelense chamado Zohan finge sua própria morte e se muda para Nova York, onde pode realizar seu grande sonho: tornar-se um cabeleireiro famoso.",
    "ano": 2006,
    "foto": "zohan.jpg",
    "nota": "76%"
}
]


function Detalhes() {
    const { filme } = useParams();

    return (
        <div>

            {(() => {
                if (filme === 'Megamente') {
                    return (
                        <div className="container text-center">
                            <div class="custom-title p-3 pb-md-4 mx-auto text-center">
                                <h1 class="display-4 fw-normal">Detalhes</h1>
                                <p class="fs-5 text-muted">Informações sobre {filmes[0].nome}</p>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <div className="card" >
                                        <div class="image_details">
                                            <img src={'/assets/images/' + filmes[0].foto} alt={filmes.nome} className="card-img-top" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div className="card-pos">
                                        <div className="card">
                                            <div class="text_details">
                                                <h1>Filme: {filme}</h1>
                                                <p>Duração: {filmes[0].duracao}</p>
                                                <p>Genêro: {filmes[0].genero}</p>
                                                <p>Ano: {filmes[0].ano} </p>
                                                <h3>Sinopse</h3>
                                                <div class="card-sinopse">
                                                    <p>{filmes[0].descricao}</p>
                                                </div>
                                                <p>Nota: {filmes[0].nota}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } else if (filme === 'Shrek') {
                    return (
                        <div className="container text-center">
                            <div class="custom-title p-3 pb-md-4 mx-auto text-center">
                                <h1 class="display-4 fw-normal">Detalhes</h1>
                                <p class="fs-5 text-muted">Informações sobre {filmes[1].nome}</p>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <div className="card" >
                                        <div class="image_details">
                                            <img src={'/assets/images/' + filmes[1].foto} alt={filmes.nome} className="card-img-top" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div className="card-pos">
                                        <div className="card">
                                            <div class="text_details">
                                                <h1>Filme: {filme}</h1>
                                                <p>Duração: {filmes[1].duracao}</p>
                                                <p>Genêro: {filmes[1].genero}</p>
                                                <p>Ano: {filmes[1].ano} </p>
                                                <h3>Sinopse</h3>
                                                <p>{filmes[1].descricao}</p>
                                                <p>Nota: {filmes[1].nota}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } else if (filme === 'Zohan') {
                    return (
                        <div className="container text-center">
                            <div class="custom-title p-3 pb-md-4 mx-auto text-center">
                                <h1 class="display-4 fw-normal">Detalhes</h1>
                                <p class="fs-5 text-muted">Informações sobre {filmes[2].nome}</p>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <div className="card" >
                                        <div class="image_details">
                                            <img src={'/assets/images/' + filmes[2].foto} alt={filmes.nome} className="card-img-top" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div className="card-pos">
                                        <div className="card">
                                            <div class="text_details">
                                                <h1>Filme: {filme}</h1>
                                                <p>Duração: {filmes[2].duracao}</p>
                                                <p>Genêro: {filmes[2].genero}</p>
                                                <p>Ano: {filmes[2].ano} </p>
                                                <h3>Sinopse</h3>
                                                <p>{filmes[2].descricao}</p>
                                                <p>Nota: {filmes[2].nota}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })()}
            <Footer />
        </div>
    )
}


export default Detalhes;