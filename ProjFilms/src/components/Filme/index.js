import "./Filme.css";

const filmes = [{
  "nome": "Megamente",
  "foto": "megamente.jpg",
  "descricao": "Embora seja o vilão mais brilhante que o mundo já conheceu, Megamente é o menos bem-sucedido. Derrotado repetidamente pelo heroico Metro Man, ele fica surpreso quando finalmente consegue derrotar o seu inimigo de longa data. Porém, sem Metro Man, Megamente não tem nenhum propósito na vida, então ele cria um novo adversário que logo decide que é mais divertido ser um vilão que um herói."
},
{
  "nome": "Shrek",
  "foto": "shrek.jpg",
  "descricao": "Um ogro tem sua vida invadida por personagens de contos de fadas que acabam com a tranquilidade de seu lar. Ele faz um acordo pra resgatar uma princesa."
},
{
  "nome": "Zohan",
  "foto": "zohan.jpg",
  "descricao": "Cansado de todas as lutas em seu país, um lendário militar israelense chamado Zohan finge sua própria morte e se muda para Nova York, onde pode realizar seu grande sonho: tornar-se um cabeleireiro famoso."
}
]

export default function Filme() {
  return (
    <div className="container text-center">
      <div class="custom-title p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal">Filmes</h1>
        <p class="fs-5 text-muted">Catalogo de Filmes.</p>
      </div>
      <div class="row">
        {filmes.map((filme, i) => (
          <div className="col" key={i}>
            <div class="card_format">
              <div className="card">
                <div class="image_width">
                  <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" />
                </div>
                <div className="card-body">
                  <h1 className="card-title">{filme.nome}</h1>
                  <br></br>
                  <h3>Sinopse</h3>
                  <br></br>
                  <div class="card-sinopse">
                    <p className="card-text">{filme.descricao}</p>
                  </div>
                  <br></br>
                  <a href={`/details/${filme.nome}`}>
                    <div className="btn btn-primary">
                      Detalhes
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}