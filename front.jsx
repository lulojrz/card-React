import React from 'react'

const Front = () => {
  const tecnologias = [
    {
      nombre: "Bootstrap",
      img: "https://img.freepik.com/premium-vector/bootstrap-flat-logo-vector-illustration_582637-461.jpg",
      año : 2011,
      funcion:"un marco de desarrollo front-end gratuito y de código abierto para la creación de sitios web y aplicaciones web, es un Framework de CSS"

    },
    {
      nombre:"Tailwind",
      img:"https://user-images.githubusercontent.com/98990/89711240-4172a200-d989-11ea-8d51-4aaf922fa407.png",
      año : 2017,
      funcion : "es una implementación de sistema de diseño en CSS puro. Les permite crear sitios web con una interfaz de usuario limpia y coherente desde el primer momento, es otro Framework de CSS",
    },
    {
      nombre: "React",
      img:"data:image/png;base64,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",
      año :2013,
      funcion : "es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. "
    },
    {
      nombre:"Vue",
      img:"https://pbs.twimg.com/media/CsggDViXEAAciLJ.jpg",
      año : 2014,
      funcion : "Es un framework de JavaScript de código abierto para la construcción de interfaces de usuario y aplicaciones de una sola página, es una alternativa a React"
    },
    {
      nombre: "Angular",
      img:"https://img.freepik.com/vector-premium/diseno-logotipo-plano-minimo-angular-js_582637-692.jpg",
      año : 2016,
      funcion: "Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página. Es  alternativa  a React"

    },
    {
      nombre: "GIT",
      img: "data:image/png;base64,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",
      año :2005,
      funcion:"Es un software de control de versiones pensado en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente."
    },
    {
      nombre:"GitHub",
      img:"https://banner2.cleanpng.com/20180716/puq/kisspng-github-computer-icons-repository-arch-linux-icon-5b4c339a252752.2582053515317206021522.jpg",
      año:2008,
      funcion : "es una forja para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador.",
    }
   
  ]
   
  const recorrido = tecnologias.map(tecnologia =>
  <div key={tecnologia.nombre} className="front">
     <div className="img-front">
            <img src={tecnologia.img}  />
        </div>
        <div className="front-info">
            <h1>{tecnologia.nombre}</h1>

        </div>
        <ul className="front-list">
            <li><strong>Creacion: </strong>{tecnologia.año}</li>
        </ul>
        <div className="funcion">
            {tecnologia.funcion}
        </div>


   </div>)
  return (
    <>
        {recorrido}
      
    </>
  )
}

export default Front