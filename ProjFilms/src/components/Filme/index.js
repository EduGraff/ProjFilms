import "./Filme.css";
import React, { useState, useEffect } from "react";
import Detalhes from '../../pages/details';
import Assistido from '../../Assistido'

function Filme() {

  const [filmes, setFilmes] = useState(null);
  const [ordena, setOrdena] = useState('titulo');
  const [buscaTitulo, setBuscaTitulo] = useState("");
 
  useEffect(() => {

    fetch('https://my-json-server.typicode.com/marycamila184/movies/movies/')
      .then(response => response.json())
      .then(data => setFilmes(data))
      .catch(err => console.error(err))
  }, []);

  if (!filmes) {
    const newLocal = <img src="/assets/images/loading-gif.gif"></img>;
    return <div className="loadingApi">
      <p>Carregando...</p>
      {newLocal}
    </div>;
  }

  const handleSortChange = (event) => {
    setOrdena(event.target.value);
  };

  const ordenaFilmes = filmes.sort((a, b) => {
    if (ordena === 'titulo') {
      return a.titulo.localeCompare(b.titulo);
    } else if (ordena === 'data') {
      return new Date(a.ano) - new Date(b.ano);
    } else if (ordena === 'nota') {
      return b.nota - a.nota;
    }
  });

  const filtroFilme = filmes.filter((filmeF) =>
    filmeF.titulo.toLowerCase().includes(buscaTitulo.toLowerCase())
  );


  
  return (
    <div className="container text-center">
      <div className="custom-title p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">Filmes</h1>
        <p className="fs-5 text-muted">Catalogo de Filmes.</p>
        <div className="row">
          <div className="col-sm">
            <label>Buscar por título: </label>
            <input className='form-control'
              type="text"
              placeholder="Busca por Título"
              value={buscaTitulo}
              onChange={event => setBuscaTitulo(event.target.value)}
            />
            <div className="col-sm"></div>
          </div>
          <div className="col-sm"></div>
          <div className="col-sm">
            <label>Ordenar por: </label>
            <select className='form-select' value={ordena} onChange={handleSortChange}>
              <option value="titulo">Título</option>
              <option value="data">Data</option>
              <option value="nota">Nota</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        {filtroFilme.map((filme, i) => (
          <div className="col" key={i}>
            <div className="card_format">
              <div className="card">
                <div className="image_width">
                  <img src={filme.poster} alt={filme.titulo} className="card-img-top" />
                </div>
                <div className="card-body">
                  <h2 className="card-title">{filme.titulo}</h2>
                  <br></br>
                  <h3>Ano: {filme.ano}</h3>
                  <br></br>
                  <h3>Nota: {filme.nota}</h3>
                  <br></br>
                  <Assistido
                    jaVisto={filme.assistido} />
                  <a href={`/details/${filme.id}`}>
                    <div>
                      <button onClick={<Detalhes id={filme.id} />} className="btn btn-primary">Detalhes</button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filme;

