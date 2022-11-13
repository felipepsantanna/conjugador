import React from 'react';
import Head from '/src/components/head';
import verbos from '/DB/verbos.json';


export default function Verbo({ conjugado }) {
    return (
        <React.Fragment>
            <Head title="conjugador" description="conjugador">

            </Head>
            <div id="wrapper" className="container">
                <div id="header" className="row">
                    <div className="col-xs-12 col-sm-6">
                        <div id="logo"><a href="/">conjulgador<span>.com.br</span></a></div>
                        <div id="slogan"><a href="/">Conjugação de Verbos em Português</a></div>
                    </div>

                    <div className="col-xs-12 col-sm-6" id="search">
                        <form id="searchForm">
                            <input id="q" name="q" type="text" defaultValue="conjugar" autoFocus=""></input>
                            <input type="submit" defaultValue="conjugar" id="botao"></input>
                        </form>

                    </div>

                </div>


                <div id="page" className="row flex-sticky-wrap">
                    <div id="content" className="col-xs-12 col-sm-12">
                        <h1 className="nmt">Verbo {conjugado.id}</h1>
                        <div className="row">
                            <div className="col-xs-12 col-sm-9 col-md-10">

                                <div className="intro-v"><p>{conjugado.descricao}</p>
                                </div>
                                <div className="info-v">


                                    <p>
                                        <strong>Gerúndio</strong>: <span><span className="f">{conjugado.qual_gerundio}</span></span><br />
                                        <strong>Infinitivo</strong>: {conjugado.qual_infinitivo}</p>


                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-3 col-md-2 palavra-sidebar">
                                <div className="ad ad-palavra-sidebar">
                                    <div id="div-gpt-sg-5c2b0f112805f430f41f0d68e53c154c" className="ad-unit ad-unit--pt-br"></div>            </div>
                            </div>
                        </div>



                        <div id="conjugacao" className="row">

                            <div className="col-xs-12 col-sm-9 col-md-10">
                                <div className="tempos">
                                    <h3 className="modoconjuga">Indicativo</h3>
                                    <div className="tempo-conjugacao">
                                        <h4 className="tempo-conjugacao-titulo">Presente</h4>
                                        <p><span><span><span>eu</span><span className="f irregular">{conjugado.indicativo.presente.eu}</span></span><br />
                                            <span><span>tu</span><span className="f">{conjugado.indicativo.presente.tu}</span></span><br />
                                            <span><span>ele</span><span className="f irregular">{conjugado.indicativo.presente.ele}</span></span><br />
                                            <span><span>nós</span><span className="f">{conjugado.indicativo.presente.nos}</span></span><br />
                                            <span><span>vós</span><span className="f">{conjugado.indicativo.presente.vos}</span></span><br />
                                            <span><span>eles</span><span className="f">{conjugado.indicativo.presente.eles}</span></span><br />
                                        </span></p></div><div className="tempo-conjugacao">
                                        <h4 className="tempo-conjugacao-titulo">Pretérito Imperfeito</h4>
                                        <p><span><span><span>eu</span><span className="f">{conjugado.indicativo.preterito_imperfeito.eu}</span></span><br />
                                            <span><span>tu</span><span className="f">{conjugado.indicativo.preterito_imperfeito.tu}</span></span><br />
                                            <span><span>ele</span><span className="f">{conjugado.indicativo.preterito_imperfeito.ele}</span></span><br />
                                            <span><span>nós</span><span className="f">{conjugado.indicativo.preterito_imperfeito.nos}</span></span><br />
                                            <span><span>vós</span><span className="f">{conjugado.indicativo.preterito_imperfeito.vos}</span></span><br />
                                            <span><span>eles</span><span className="f">{conjugado.indicativo.preterito_imperfeito.eles}</span></span><br />
                                        </span></p></div><div className="tempo-conjugacao">
                                        <h4 className="tempo-conjugacao-titulo">Pretérito Perfeito</h4>
                                        <p><span><span><span>eu</span><span className="f irregular">{conjugado.indicativo.preterito_perfeito.eu}</span></span><br />
                                            <span><span>tu</span><span className="f irregular">{conjugado.indicativo.preterito_perfeito.tu}</span></span><br />
                                            <span><span>ele</span><span className="f irregular">{conjugado.indicativo.preterito_perfeito.eles}</span></span><br />
                                            <span><span>nós</span><span className="f irregular">{conjugado.indicativo.preterito_perfeito.nos}</span></span><br />
                                            <span><span>vós</span><span className="f irregular">{conjugado.indicativo.preterito_perfeito.vos}</span></span><br />
                                            <span><span>eles</span><span className="f irregular">{conjugado.indicativo.preterito_perfeito.eles}</span></span><br />
                                        </span></p></div><div className="tempo-conjugacao">
                                        <h4 className="tempo-conjugacao-titulo">Pretérito Mais-que-perfeito</h4>
                                        <p><span><span><span>eu</span><span className="f irregular">{conjugado.indicativo.preterito_mais_que_perfeito.eu}</span></span><br />
                                            <span><span>tu</span><span className="f irregular">{conjugado.indicativo.preterito_mais_que_perfeito.tu}</span></span><br />
                                            <span><span>ele</span><span className="f irregular">{conjugado.indicativo.preterito_mais_que_perfeito.ele}</span></span><br />
                                            <span><span>nós</span><span className="f irregular">{conjugado.indicativo.preterito_mais_que_perfeito.nos}</span></span><br />
                                            <span><span>vós</span><span className="f irregular">{conjugado.indicativo.preterito_mais_que_perfeito.vos}</span></span><br />
                                            <span><span>eles</span><span className="f irregular">{conjugado.indicativo.preterito_mais_que_perfeito.eles}</span></span><br />
                                        </span></p></div><div className="tempo-conjugacao">
                                        <h4 className="tempo-conjugacao-titulo">Futuro do Presente</h4>
                                        <p><span><span><span>eu</span><span className="f irregular">{conjugado.indicativo.futuro_do_presente.eu}</span></span><br />
                                            <span><span>tu</span><span className="f irregular">{conjugado.indicativo.futuro_do_presente.tu}</span></span><br />
                                            <span><span>ele</span><span className="f irregular">{conjugado.indicativo.futuro_do_presente.ele}</span></span><br />
                                            <span><span>nós</span><span className="f irregular">{conjugado.indicativo.futuro_do_presente.nos}</span></span><br />
                                            <span><span>vós</span><span className="f irregular">{conjugado.indicativo.futuro_do_presente.vos}</span></span><br />
                                            <span><span>eles</span><span className="f irregular">{conjugado.indicativo.futuro_do_presente.eles}</span></span><br />
                                        </span></p></div><div className="tempo-conjugacao">
                                        <h4 className="tempo-conjugacao-titulo">Futuro do Pretérito</h4>
                                        <p><span><span><span>eu</span><span className="f irregular">{conjugado.indicativo.futuro_do_preterito.eu}</span></span><br />
                                            <span><span>tu</span><span className="f irregular">{conjugado.indicativo.futuro_do_preterito.tu}</span></span><br />
                                            <span><span>ele</span><span className="f irregular">{conjugado.indicativo.futuro_do_preterito.ele}</span></span><br />
                                            <span><span>nós</span><span className="f irregular">{conjugado.indicativo.futuro_do_preterito.nos}</span></span><br />
                                            <span><span>vós</span><span className="f irregular">{conjugado.indicativo.futuro_do_preterito.vos}</span></span><br />
                                            <span><span>eles</span><span className="f irregular">{conjugado.indicativo.futuro_do_preterito.eles}</span></span><br />
                                        </span></p></div>                </div>
                            </div>

                            <div className="col-xs-12 col-sm-9 col-md-10">
                                <div className="tempos">
                                    <h3 className="modoconjuga">Subjuntivo</h3>
                                    <div className="tempo-conjugacao"><h4 className="tempo-conjugacao-titulo">Presente</h4>
                                        <p><span><span><span>que eu</span> <span className="f irregular">{conjugado.subjuntivo.presente.eu}</span></span><br />
                                            <span><span>que tu</span> <span className="f irregular">{conjugado.subjuntivo.presente.tu}</span></span><br />
                                            <span><span>que ele</span> <span className="f irregular">{conjugado.subjuntivo.presente.ele}</span></span><br />
                                            <span><span>que nós</span> <span className="f irregular">{conjugado.subjuntivo.presente.nos}</span></span><br />
                                            <span><span>que vós</span> <span className="f irregular">{conjugado.subjuntivo.presente.vos}</span></span><br />
                                            <span><span>que eles</span> <span className="f irregular">{conjugado.subjuntivo.presente.eles}</span></span><br />
                                        </span></p></div><div className="tempo-conjugacao">
                                        <h4 className="tempo-conjugacao-titulo">Pretérito Imperfeito</h4>
                                        <p><span><span><span>se eu</span> <span className="f irregular">{conjugado.subjuntivo.preterito_imperfeito.eu}</span></span><br />
                                            <span><span>se tu</span> <span className="f irregular">{conjugado.subjuntivo.preterito_imperfeito.tu}</span></span><br />
                                            <span><span>se ele</span> <span className="f irregular">{conjugado.subjuntivo.preterito_imperfeito.ele}</span></span><br />
                                            <span><span>se nós</span> <span className="f irregular">{conjugado.subjuntivo.preterito_imperfeito.nos}</span></span><br />
                                            <span><span>se vós</span> <span className="f irregular">{conjugado.subjuntivo.preterito_imperfeito.vos}</span></span><br />
                                            <span><span>se eles</span> <span className="f irregular">{conjugado.subjuntivo.preterito_imperfeito.eles}</span></span><br />
                                        </span></p></div><div className="tempo-conjugacao">
                                        <h4 className="tempo-conjugacao-titulo">Futuro</h4>
                                        <p><span><span><span>quando eu</span> <span className="f irregular">{conjugado.subjuntivo.futuro.eu}</span></span><br />
                                            <span><span>quando tu</span> <span className="f irregular">{conjugado.subjuntivo.futuro.tu}</span></span><br />
                                            <span><span>quando ele</span> <span className="f irregular">{conjugado.subjuntivo.futuro.ele}</span></span><br />
                                            <span><span>quando nós</span> <span className="f irregular">{conjugado.subjuntivo.futuro.nos}</span></span><br />
                                            <span><span>quando vós</span> <span className="f irregular">{conjugado.subjuntivo.futuro.vos}</span></span><br />
                                            <span><span>quando eles</span> <span className="f irregular">{conjugado.subjuntivo.futuro.eles}</span></span><br />
                                        </span></p></div>                </div>

                            </div>
                        </div>



                        <div className="tempo2">Verbos relacionados com fazer</div><div className="wrapper"><ul><li><a href="/verbo-haver/">haver</a></li><li><a href="/verbo-estudar/">estudar</a></li><li><a href="/verbo-dizer/">dizer</a></li><li><a href="/verbo-chegar/">chegar</a></li><li><a href="/verbo-agir/">agir</a></li><li><a href="/verbo-conseguir/">conseguir</a></li><li><a href="/verbo-passar/">passar</a></li><li><a href="/verbo-levar/">levar</a></li><li><a href="/verbo-compor/">compor</a></li><li><a href="/verbo-ganhar/">ganhar</a></li><li><a href="/verbo-fingir/">fingir</a></li><li><a href="/verbo-contar/">contar</a></li></ul></div>



                    </div>
                    <div className='clear_both'></div>

                </div>

            </div>
        </React.Fragment>

    )
}

export async function getServerSideProps(context) {
    const conjugado = verbos.find(element => element.id == context.params.conjugar);
    console.log(conjugado)
    return {
        props: {
            conjugado
        }
    }
}