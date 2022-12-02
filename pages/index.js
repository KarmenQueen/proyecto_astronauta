import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";

const Index = () => {
  return(
    <div className="App">
      <Layout></Layout>
      <header className="App-header">
        <Image
          src="/images/24OD.gif"
          height={294} // Desired size with correct aspect ratio
          width={294} // Desired size with correct aspect ratio
          alt="ojo"
        />

        <label className="custom-select" for="styledSelect1">
          <select id="styledSelect1" name="options">
              <option disabled selected="">SELECCIONE ASIGNATURA</option>
              <optgroup label="PRIMER SEMESTRE">
                  <option value="1">ÁLGEBRA PARA INGENIERÍA</option>
                  <option value="2">GEOMETRÍA PARA INGENIERÍA</option>
              </optgroup>
              
              <optgroup label="SEGUNDO SEMESTRE">
                  <option value="3">ÁLGEBRA LINEAL PARA INGENIERÍA</option>
                  <option value="4">CÁLCULO EN UNA VARIABLE</option>
              </optgroup>
              
              <optgroup label="TERCER SEMESTRE">
                  <option value="5">FÍSICA: MECÁNICA</option>
                  <option value="6"> 	ECUACIONES DIFERENCIALES PARA INGENIERÍA</option>
                  <option value="7">CÁLCULO EN VARIAS VARIABLES</option>
                  <option value="8">ESTRUCTURA DE DATOS Y ALGORITMOS</option>
              </optgroup>
              
              <optgroup label="CUARTO SEMESTRE">
                  <option value="9">FÍSICA: ONDAS Y ELECTROMAGNETISMO</option>
                  <option value="10">MÉTODOS NUMÉRICOS PARA INGENIERÍA</option>
                  <option value="11">CÁLCULO EN UNA VARIABLE</option>
                  <option value="12">FÍSICA: MECÁNICA</option>
                  <option value="13">ECUACIONES DIFERENCIALES PARA INGENIERÍA</option>
                  <option value="14">ESTRUCTURAS DISCRETAS</option>
              </optgroup>
              
              <optgroup label="QUINTO SEMESTRE">
                  <option value="9">ARQUITECTURA DE COMPUTADORES </option>
                  <option value="10">TEORÍA DE AUTÓMATAS</option>
                  <option value="11">DISEÑO Y ANÁLISIS DE ALGORITMOS</option>
              </optgroup>
              
              <optgroup label="SEXTO SEMESTRE">
                  <option value="9">PROGRAMACIÓN EN PARADIGMAS FUNCIONAL Y PARALELO</option>
              </optgroup>

              <optgroup label="SEPTIMO SEMESTRE">
                  <option value="9">COMUNICACIONES</option>
                  <option value="10">INTELIGENCIA ARTIFICIAL</option>
              </optgroup>

              <optgroup label="OCTAVO SEMESTRE">
                  <option value="9">REDES</option>
                  <option value="10">TALLER DE INGENIERÍA DE SOFTWARE</option>
              </optgroup>

              <optgroup label="NOVENO SEMESTRE">
                  <option value="9">SISTEMAS DISTRIBUIDOS</option>
              </optgroup>
          </select>
        </label>

        <a
          className="btn-neon"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>
          QUIENES SOMOS
        </a>
      </header>
    </div>

  );
};
export default Index;
/*
const Index = () => {
  return (
    //<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
        <title>ESTUDIO</title>
        <link rel="stylesheet" href="Estilo 1.css"></link>
    </head>
    <body>
        <div class ="Imagen">
            <img src=",/24OD.gif" alt="imagen"></img>
        </div>

        <a href="#" class="btn-neon">
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
            <span id="span4"></span>
            BUSCAR MATERIAL
        </a>
        <a href="#" class="btn-neon">
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
            <span id="span4"></span>
            QUIENES SOMOS
        </a>
    </body>
    </html>
  );
};
  
export default Index;*/
/*
const Index = () => {
  return (
    <div className="container" id="principal">
      <Head>
        <title>INFO104 Nextjs App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image
          src="/images/eye.png"
          height={294} // Desired size with correct aspect ratio
          width={470} // Desired size with correct aspect ratio
          alt="ojo"
        />

        <h1 className="title">¿Cómo ha sido tu semana?</h1>
        <div className="title">
          <a href="http://www.google.com" target="_blank">
            Ir a google
          </a>
        </div>
        <p className="description">
          Este código está en <code>pages/index.js</code>
        </p>

        <div className="grid">
          <Link
            href={{
              pathname: "/response",
              query: { opt: 0, msg: "este es el mensaje" },
            }}
          >
            <a className="card">Excelente!</a>
          </Link>
          <Link
            href={{
              pathname: "/response",
              query: { opt: 1 },
            }}
          >
            <a className="card">Más o menos no mas!</a>
          </Link>
          <Link
            href={{
              pathname: "/response",
              query: { opt: 2 },
            }}
          >
            <a className="card">Horrible! :(</a>
          </Link>
          <a className="card" href="/response?opt=0&msg=hola%20chao">
            click me!
          </a>
        </div>
      </main>

      <footer>
        <a href="https://github.com/PabloSzx/INFO104-2021-1" target="_blank">
          Repositorio y tutorial
        </a>
        &nbsp;-&nbsp;
        <Link href="/about">
          <a>Sobre esta página</a>
        </Link>
      </footer>
    </div>
  );
};

export default Index;*/