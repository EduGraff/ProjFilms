import "./about.css"

export default function About() {

    return (

        <div className="container text-center">
            <div class="custom-title p-3 pb-md-4 mx-auto text-center">
                <h1 class="display-4 fw-normal">Sobre</h1>
            </div>
            <div class="row">

                <div class="col-sm">
                    <div className="card-pos">
                        <div className="card">
                            <div class="text_details">
                                <h1 class="title-about">O que queremos? </h1>
                                <p class="text-about">Que você tenha um experiência de outro universo! </p>
                                <br></br>
                                <h1 class="title-about">E como faremos isso? </h1>
                                <p class="text-about">Entregando uma biblioteca de streaming de filmes e séries completa para você acessar direto da sua televisão, computador ou celular! </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div className="card" >
                        <div class="image_details">
                            <img src={'/assets/images/logo.png'} className="card-img-top" />
                            <div class="name-emp">
                                <p >MARS ROCKET</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}