import React from 'react';
import Head from '../src/components/head';

export default function Home() {
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
          <div id="content" className="col-xs-12 col-sm-8">

            <h1>Conjugação de verbos</h1>
            <p>O <strong>conjulgador.com.br</strong> é uma ferramenta online para pesquisa e conjulgação de verbos regulares e irregulares da língua portuguesa. Use o conjugador para encontrar as conjugações completas do verbo que procura. Temos a <strong>conjugação verbal</strong> de todos os verbos da língua portuguesa.</p>

            <h3>Verbos mais pesquisados</h3>
            <div className="wrapper">
              <ul><li><a href="/verbo-ir/" title="Verbo ir">ir</a></li><li><a href="/verbo-ser/" title="Verbo ser">ser</a></li><li><a href="/verbo-fazer/" title="Verbo fazer">fazer</a></li><li><a href="/verbo-ter/" title="Verbo ter">ter</a></li><li><a href="/verbo-ver/" title="Verbo ver">ver</a></li><li><a href="/verbo-vir/" title="Verbo vir">vir</a></li><li><a href="/verbo-estar/" title="Verbo estar">estar</a></li><li><a href="/verbo-amar/" title="Verbo amar">amar</a></li><li><a href="/verbo-poder/" title="Verbo poder">poder</a></li><li><a href="/verbo-dar/" title="Verbo dar">dar</a></li><li><a href="/verbo-haver/" title="Verbo haver">haver</a></li><li><a href="/verbo-por/" title="Verbo pôr">pôr</a></li><li><a href="/verbo-comer/" title="Verbo comer">comer</a></li><li><a href="/verbo-querer/" title="Verbo querer">querer</a></li><li><a href="/verbo-partir/" title="Verbo partir">partir</a></li><li><a href="/verbo-falar/" title="Verbo falar">falar</a></li><li><a href="/verbo-trazer/" title="Verbo trazer">trazer</a></li><li><a href="/verbo-estudar/" title="Verbo estudar">estudar</a></li><li><a href="/verbo-cantar/" title="Verbo cantar">cantar</a></li><li><a href="/verbo-dizer/" title="Verbo dizer">dizer</a></li><li><a href="/verbo-sair/" title="Verbo sair">sair</a></li><li><a href="/verbo-ler/" title="Verbo ler">ler</a></li><li><a href="/verbo-saber/" title="Verbo saber">saber</a></li><li><a href="/verbo-rir/" title="Verbo rir">rir</a></li></ul>
            </div>


            <h2>O que são os verbos?</h2>
            <p>Verbos são palavras que indicam acontecimentos representados no tempo, como uma ação, um estado, um processo ou um fenômeno. Flexionam-se em número, pessoa, modo, tempo, aspecto e voz. As orações e os períodos desenvolvem-se em torno de um verbo.</p>

            {/*}
            <h3>Saiba mais sobre os verbos</h3>
            <p>
              <a href="/verbos-no-infinitivo/">Verbos no infinitivo: exemplos, como identificar e conjugar</a><br />
              Os verbos no infinitivo terminam em -ar, -er, -ir. O infinitivo não está relacionado com nenhum modo ou tempo verbal. É...        </p>
            <p>
              <a href="/frases-verbais/">Frases verbais</a><br />
              Frases verbais são frases que têm verbos. Podem ser constituídas por um ou mais verbos, ou seja, por uma ou mais...        </p>
            <p>
              <a href="/lista-de-verbos-com-participio-regular-irregular/">Lista de verbos com particípio regular e irregular</a><br />
              Existem vários verbos que têm particípio duplo, com uma forma regular e uma forma irregular. São também chamados de...        </p>
            <p>
              <a href="/verbos-no-participio/">Verbos no particípio</a><br />
              O particípio indica uma ação que já se encontra finalizada. Transmite, assim, uma noção de conclusão da ação verbal.        </p>
            <p>
              <a href="/concordancia-do-verbo-ser/">Concordância do verbo ser</a><br />
              Chama-se concordância verbal à flexão do verbo em pessoa e número para concordar com o sujeito gramatical. A flexão em...        </p>
            <p>
              <a href="/verbo/">O que é um verbo?</a><br />
              Um verbo é uma&nbsp;palavra&nbsp;que indica&nbsp;acontecimentos representados no tempo, como uma ação, um estado, um processo ou um...        </p>
            <p>
              <a href="/formas-verbais/">Formas verbais</a><br />
              As formas verbais são as variações que os verbos apresentam quando conjugados, ou seja, quando relacionados com um...        </p>
            <p>
              <a href="/predicativo-do-objeto-o-que-e/">Predicativo do objeto: o que é?</a><br />
              O predicativo do objeto é o termo da oração que caracteriza os complementos verbais de uma oração, ou seja, que atribui...        </p>
            <p>
              <a href="/predicativo-do-sujeito-e-do-objeto-qual-a-diferenca/">Predicativo do sujeito e do objeto: qual a diferença?</a><br />
              O predicativo do sujeito e o predicativo do objeto são termos integrante da oração, atuando como um complemento. Ambos...        </p>
            <p>
              <a href="/verbos-transitivos-e-intransitivos/">Verbos transitivos e intransitivos</a><br />
              Verbos transitivos são verbos que precisam de complementos verbais para completar o seu sentido. Têm um significado...        </p>
            <a href="/artigos/">Tudo sobre os verbos &gt;</a>    <br />
            <h3>Conjugações verbais em destaque</h3>
            <div className="wrapper">
              <ul>
                <li><a href="/verbo-vender/" title="Verbo vender">vender</a></li><li><a href="/verbo-pedir/" title="Verbo pedir">pedir</a></li><li><a href="/verbo-ouvir/" title="Verbo ouvir">ouvir</a></li><li><a href="/verbo-ficar/" title="Verbo ficar">ficar</a></li><li><a href="/verbo-agir/" title="Verbo agir">agir</a></li><li><a href="/verbo-conseguir/" title="Verbo conseguir">conseguir</a></li><li><a href="/verbo-corrigir/" title="Verbo corrigir">corrigir</a></li><li><a href="/verbo-conhecer/" title="Verbo conhecer">conhecer</a></li><li><a href="/verbo-crer/" title="Verbo crer">crer</a></li><li><a href="/verbo-precisar/" title="Verbo precisar">precisar</a></li><li><a href="/verbo-deixar/" title="Verbo deixar">deixar</a></li><li><a href="/verbo-voltar/" title="Verbo voltar">voltar</a></li><li><a href="/verbo-fugir/" title="Verbo fugir">fugir</a></li><li><a href="/verbo-descer/" title="Verbo descer">descer</a></li><li><a href="/verbo-cumprir/" title="Verbo cumprir">cumprir</a></li><li><a href="/verbo-existir/" title="Verbo existir">existir</a></li><li><a href="/verbo-prover/" title="Verbo prover">prover</a></li><li><a href="/verbo-perdoar/" title="Verbo perdoar">perdoar</a></li><li><a href="/verbo-fechar/" title="Verbo fechar">fechar</a></li><li><a href="/verbo-encher/" title="Verbo encher">encher</a></li><li><a href="/verbo-rever/" title="Verbo rever">rever</a></li><li><a href="/verbo-curtir/" title="Verbo curtir">curtir</a></li><li><a href="/verbo-explicar/" title="Verbo explicar">explicar</a></li><li><a href="/verbo-magoar/" title="Verbo magoar">magoar</a></li><li><a href="/verbo-insistir/" title="Verbo insistir">insistir</a></li><li><a href="/verbo-expressar/" title="Verbo expressar">expressar</a></li><li><a href="/verbo-emprestar/" title="Verbo emprestar">emprestar</a></li><li><a href="/verbo-escanear/" title="Verbo escanear">escanear</a></li><li><a href="/verbo-puxar/" title="Verbo puxar">puxar</a></li><li><a href="/verbo-enjoar/" title="Verbo enjoar">enjoar</a></li><li><a href="/verbo-advir/" title="Verbo advir">advir</a></li><li><a href="/verbo-consertar/" title="Verbo consertar">consertar</a></li><li><a href="/verbo-estender/" title="Verbo estender">estender</a></li><li><a href="/verbo-cessar/" title="Verbo cessar">cessar</a></li><li><a href="/verbo-arrasar/" title="Verbo arrasar">arrasar</a></li><li><a href="/verbo-acrescentar/" title="Verbo acrescentar">acrescentar</a></li><li><a href="/verbo-providenciar/" title="Verbo providenciar">providenciar</a></li><li><a href="/verbo-ressarcir/" title="Verbo ressarcir">ressarcir</a></li><li><a href="/verbo-incentivar/" title="Verbo incentivar">incentivar</a></li><li><a href="/verbo-confessar/" title="Verbo confessar">confessar</a></li><li><a href="/verbo-pleitear/" title="Verbo pleitear">pleitear</a></li><li><a href="/verbo-decepcionar/" title="Verbo decepcionar">decepcionar</a></li><li><a href="/verbo-abaixar/" title="Verbo abaixar">abaixar</a></li><li><a href="/verbo-prosseguir/" title="Verbo prosseguir">prosseguir</a></li><li><a href="/verbo-xingar/" title="Verbo xingar">xingar</a></li><li><a href="/verbo-visualizar/" title="Verbo visualizar">visualizar</a></li><li><a href="/verbo-repassar/" title="Verbo repassar">repassar</a></li><li><a href="/verbo-clicar/" title="Verbo clicar">clicar</a></li><li><a href="/verbo-ajeitar/" title="Verbo ajeitar">ajeitar</a></li><li><a href="/verbo-assentir/" title="Verbo assentir">assentir</a></li><li><a href="/verbo-reiterar/" title="Verbo reiterar">reiterar</a></li><li><a href="/verbo-conciliar/" title="Verbo conciliar">conciliar</a></li><li><a href="/verbo-fiar/" title="Verbo fiar">fiar</a></li><li><a href="/verbo-ressaltar/" title="Verbo ressaltar">ressaltar</a></li><li><a href="/verbo-agilizar/" title="Verbo agilizar">agilizar</a></li><li><a href="/verbo-postergar/" title="Verbo postergar">postergar</a></li>        </ul>
            </div>
  {*/}

            <h3>O que são as conjugações dos verbos?</h3>
            <p>Conjugação verbal é a flexão de um verbo em todos os seus modos, tempos, pessoas, números e vozes. Aparece estruturada numa ordem convencionada. Existem três conjugações principais: a 1.ª conjugação para verbos terminados em -ar, a 2.ª conjugação para verbos terminados em -er e a 3.ª conjugação para verbos terminados em -ir.</p>

            <h3>Como conjugar verbos</h3>
            <p>Para conjugar um verbo, use a barra de conjugação verbal no topo da página. Digite o verbo no infinitivo e clique o botão "conjugar" para ver o seu verbo conjugado em todos os tempos verbais e todos os modos verbais. O Conjugação.com.br tem todos os verbos da Língua Portuguesa.</p>

            <h3>Tempos verbais</h3>
            <p>Os tempos verbais indicam o momento em que ocorre a ação transmitida pelo verbo. Indicam, principalmente, três momentos: o passado, o presente e o futuro. Os tempos verbais podem ser simples ou compostos.</p>

            <h2>Verbos regulares e verbos irregulares</h2>

            <div className="wrapper">
              <h3>Regulares</h3>
              <ul><li><a href="/verbo-correr/" title="Conjugação do verbo correr">correr</a></li><li><a href="/verbo-beber/" title="Conjugação do verbo beber">beber</a></li><li><a href="/verbo-escrever/" title="Conjugação do verbo escrever">escrever</a></li><li><a href="/verbo-chegar/" title="Conjugação do verbo chegar">chegar</a></li><li><a href="/verbo-gostar/" title="Conjugação do verbo gostar">gostar</a></li><li><a href="/verbo-brincar/" title="Conjugação do verbo brincar">brincar</a></li><li><a href="/verbo-abrir/" title="Conjugação do verbo abrir">abrir</a></li><li><a href="/verbo-viver/" title="Conjugação do verbo viver">viver</a></li><li><a href="/verbo-comprar/" title="Conjugação do verbo comprar">comprar</a></li><li><a href="/verbo-jogar/" title="Conjugação do verbo jogar">jogar</a></li><li><a href="/verbo-passar/" title="Conjugação do verbo passar">passar</a></li><li><a href="/verbo-receber/" title="Conjugação do verbo receber">receber</a></li></ul>
              <a href="/verbos-regulares/">Lista de verbos regulares &gt;</a>
            </div>

            <div className="wrapper">
              <h3>Irregulares</h3>
              <ul><li><a href="/verbo-dormir/" title="Verbo dormir">dormir</a></li><li><a href="/verbo-sorrir/" title="Verbo sorrir">sorrir</a></li><li><a href="/verbo-sentir/" title="Verbo sentir">sentir</a></li><li><a href="/verbo-caber/" title="Verbo caber">caber</a></li><li><a href="/verbo-cair/" title="Verbo cair">cair</a></li><li><a href="/verbo-perder/" title="Verbo perder">perder</a></li><li><a href="/verbo-manter/" title="Verbo manter">manter</a></li><li><a href="/verbo-intervir/" title="Verbo intervir">intervir</a></li><li><a href="/verbo-seguir/" title="Verbo seguir">seguir</a></li><li><a href="/verbo-subir/" title="Verbo subir">subir</a></li><li><a href="/verbo-expor/" title="Verbo expor">expor</a></li><li><a href="/verbo-compor/" title="Verbo compor">compor</a></li></ul>
              <a href="/verbos-irregulares-no-portugues/">Lista de verbos irregulares &gt;</a>
            </div>

          </div>
          <div id="sidebar" className="col-xs-12 col-sm-4"><div id="div-gpt-sg-97f47a35392595183c5c5ec0d3b958a2" className="ad-unit ad-unit--pt-br sidebar-sticky"><div id="google_ads_iframe_/1062898/conjugacao_home_sidebar_0__container__" className='border_none'></div></div></div>    <div className="clear_both"></div>
          <div className="w100">
            <div id="div-gpt-sg-04deeb8d03fa3ecdd6cb45adae939467" className="ad-unit ad-unit--pt-br"><div id="google_ads_iframe_/1062898/conjugacao_bottom_ros_0__container__" className='border_none'></div></div>    </div>
        </div>
      </div>
    </React.Fragment>

  )
}
