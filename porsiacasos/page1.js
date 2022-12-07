import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
export default function Page1() {
  return (
    <div className="container" id="principal">
      <Head>
        <title>INFO104 Nextjs App</title>
      </Head>

      <main>
        <h1 className="title">QUIENES SOMOS</h1>
        
        <p className="description">
        Somos un grupo de estudiantes de ingeniería civil informática de la Universidad Austral de Chile, nuestros nombres son Luciano Guzmán, Nicole Navarro, Luis Berrocal y Carmen Fuenzalida, todos ya llevamos más de tres años en nuestra carrera al momento que empezamos a trabajar en este proyecto, la idea nació en una asignatura llamada Taller de construcción de software, en la que debemos dar solución a una problemática a través de una página web que nosotros diseñaremos. Entonces pensamos en el problema que se nos presentó a todos en algún punto de nuestro transcurso en la universidad: no tener la mejor base para estudiar para cada asignatura, algunos ramos de bachillerato tienen guías sin pauta, o algunas (pequeños) casos sí lo tienen, pero luego el estudiante no tiene claro como llegar al resultado, algunos ramos de carrera de los primeros semestres no dejan tanto material para trabajar, es por esto que consideramos la posibilidad que entre los propios estudiantes nos ayudemos en este aspecto, que todos puedan compartir las páginas que consideraron útiles para estudiar, desarrollo de las guías, pruebas anteriores, clases grabadas, todo lo necesario para enfrentar cada ramo con una base sólida.
        </p>
        <Image
          src="/images/4400_16_06.jpg"
          height={470} // Desired size with correct aspect ratio
          width={470} // Desired size with correct aspect ratio
          alt="ojo"
        />
      
      </main>
      <div className="grid">
          <Link
            href={{
              pathname: "/response",
              query: { opt: 0, msg: "este es el mensaje" },
            }}
          >
            <a className="card">VOLVER A LA PAGINA INICIAL</a>
          </Link>
        </div>
      <footer>
        <a href="https://siveducmd.uach.cl/" target="_blank">
          Si deseas que la pagina te rediriga a la pagina oficial de SIVEDUCMD Haz click Aqui!
        </a>
      </footer>
    </div>
  );
};

