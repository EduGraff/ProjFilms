import React, { useState } from 'react';
import './cadaster.css';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [nomeCartao, setNomeCartao] = useState('');
    const [numeroCartao, setNumeroCartao] = useState('');
    const [cvcCartao, setCvcCartao] = useState('');
    const [botao1Ativo, setBotao1Ativo] = useState(false);
    const [botao2Ativo, setBotao2Ativo] = useState(false);
    const [botao3Ativo, setBotao3Ativo] = useState(false);


    function handleNomeChange(event) {
        setNome(event.target.value);
    }

    function handleTelefoneChange(event) {
        setTelefone(event.target.value);
    }

    function handleEnderecoChange(event) {
        setEndereco(event.target.value);
    }

    function handleNomeCartaoChange(event) {
        setNomeCartao(event.target.value);
    }

    function handleNumeroCartaoChange(event) {
        setNumeroCartao(event.target.value);
    }

    function handleCvcChange(event) {
        setCvcCartao(event.target.value);
    }

    function handleSubmit() {
        if (numeroCartao.length < 20 && cvcCartao.length < 3) {
            return alert("Número do cartão e CVC digitado incorretamente!")
        }
        if (numeroCartao.length < 20) {
            return alert("Número do cartão digitado incorretamente!")
        }

        if (cvcCartao.length < 3) {
            return alert("CVC do cartão digitado incorretamente!")
        }

        return alert("Cadastro efetuado com sucesso!")
    }

    function handleBotaoClick(botaoClicado) {
        setBotao1Ativo(botaoClicado === 'botao1');
        setBotao2Ativo(botaoClicado === 'botao2');
        setBotao3Ativo(botaoClicado === 'botao3');
    }

    return (
        <div className="form-custom">
            <div className="container text-center">
                <div class="custom-title p-3 pb-md-4 mx-auto text-center">
                    <h1 class="display-4 fw-normal">Cadastro Assinante</h1>
                    <div class="row">
                        <div class="col-sm">
                            <div className="cardCad" >
                                <form onSubmit={handleSubmit}>
                                    <div class="form-group">
                                        <br></br>
                                        <h4> Dados Pessoais</h4>
                                        <label>
                                            Nome:
                                            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Insira o nome" value={nome} onChange={handleNomeChange} />
                                        </label>
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <label>
                                            Telefone:
                                            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Insira o telefone" value={telefone} onChange={handleTelefoneChange} />
                                        </label>
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <label>
                                            Endereço:
                                            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Insira o Endereço" value={endereco} onChange={handleEnderecoChange} />
                                        </label>
                                    </div>
                                </form>
                                <br></br>
                                <div className='row'>
                                    <h4> Plano Escolhido</h4>
                                    <br></br>
                                    <div class="col-sm"></div>
                                    <div class="col-sm">
                                        <div>
                                            <button className='btn btn-primary' id={botao1Ativo ? 'ativo' : 'botao-normal'}
                                                onClick={() => handleBotaoClick('botao1')} type="submit">Free</button>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div>
                                            <button className='btn btn-primary' id={botao2Ativo ? 'ativo' : 'botao-normal'}
                                                onClick={() => handleBotaoClick('botao2')} type="submit">Silver</button>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div>
                                            <button className='btn btn-primary' id={botao3Ativo ? 'ativo' : 'botao-normal'}
                                                onClick={() => handleBotaoClick('botao3')} type="submit">Gold</button>
                                        </div>
                                    </div>
                                    <div class="col-sm"></div>

                                </div>
                                <br></br>
                            </div>

                        </div>

                        <div class="col-sm">
                            <div className="cardCad" >
                                <form onSubmit={handleSubmit}>
                                    <div class="form-group">
                                        <br></br>
                                        <h4> Dados do Cartão</h4>
                                        <label>
                                            Nome do Cartão:
                                            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Insira o nome do cartão" value={nomeCartao} onChange={handleNomeCartaoChange} />
                                        </label>
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <label>
                                            Número do Cartão:
                                            <input type="text" data-ls-module="charCounter" maxlength="20" className="form-control" placeholder="Insira o número do cartão" value={numeroCartao} onChange={handleNumeroCartaoChange} />
                                        </label>
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <label>
                                            CVC:
                                            <input type="text" data-ls-module="charCounter" maxlength="3" className="form-control" aria-describedby="emailHelp" placeholder="Insira o CVC" value={cvcCartao} onChange={handleCvcChange} />
                                        </label>
                                    </div>
                                </form>
                                <br></br>

                            </div>
                        </div>
                    </div>
                    <br />
                    <br></br>
                    <button className='btn btn-primary' type="submit" onClick={handleSubmit}>Assinar</button>
                </div>
            </div>
        </div >
    );
}