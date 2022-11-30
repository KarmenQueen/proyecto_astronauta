import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Index = () => {
  return(
    <div id="principal">
      <Head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
        <title>ESTUDIO</title>
        
      </Head>

      <main>
        <div className ="Imagen">
        <Image
          src={"/assets/24OD.gif"}
          height={294} // Desired size with correct aspect ratio
          width={294} // Desired size with correct aspect ratio
          alt="imagen"
        />
        </div>
        <a href="#" className="btn-neon">
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>
          BUSCAR MATERIAL
        </a>
        <a href="#" className="btn-neon">
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>
          QUIENES SOMOS
        </a>
      </main>

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