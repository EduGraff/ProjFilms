import React from 'react';
import "./../pages/plans.css"

const planos = [{
    "plano": "Free",
    "preco": "R$29.80",
    "detalhes": "Acesso limitado a biblioteca de filmes, e com anúncios recorrentes!"
},
{
    "plano": "Silver",
    "preco": "R$59.30",
    "detalhes": "Acesso ilimitado a biblioteca de filmes, porêm com anúncios recorrentes!"
},
{
    "plano": "Gold",
    "preco": "R$84.99",
    "detalhes": "Acesso ilimitado a biblioteca de filmes, sem anúncios para atrapalhar sua experiência!"
}
]


export default function Plans() {
    return (
        <div>

            <div className="container text-center">
                <div class="custom-title p-3 pb-md-4 mx-auto text-center">
                    <h1 class="display-4 fw-normal">Planos</h1>
                    <p class="fs-5 text-muted">Escolha o melhor plano que encaixa no seu bolso! </p>
                </div>
                <div class="row">
                    {planos.map((planos, i) => (
                        <div className="col" key={i}>
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title">{planos.plano}</h2>
                                    <h3>{planos.preco} /mês </h3>
                                    <br></br>
                                    <p className="card-text">{planos.detalhes}</p>
                                    <a>
                                        <div id="id_button" className="btn btn-primary">
                                            Adquirir
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}