import React from 'react'

const Back = () => {
  const tecnologias = [
    {
      nombre: "Node.Js",
      img:"https://www.svgrepo.com/show/376337/node-js.svg",
      año:2009,
      funcion:"Es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript."



    },
    {
      nombre:"PHP",
      img:"data:image/png;base64,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",
      año : 1995,
      funcion:"PHP es el lenguaje de programación para el desarrollo del backend más popular. Puedes usarlo para crear sitios web dinámicos, aplicaciones web, blogs, foros, sistemas de gestión de contenidos,PHP se integra bien con bases de datos "
    },
    {
      nombre:"SQL",
      img:"https://previews.123rf.com/images/asnia/asnia1707/asnia170700318/83206225-icono-de-la-base-de-datos-sql-dise%C3%B1o-de-logotipo-ui-o-ux-app-inscripci%C3%B3n-naranja-con-sombra.jpg",
      año:1974,
      funcion:" es un lenguaje específico de dominio, diseñado para administrar, y recuperar información de sistemas de gestión de bases de datos relacionales."
    }
  ]
  const recorrido = tecnologias.map(tecnologia =>
    <div key={tecnologia.nombre} className="back">
       <div className="img-back">
              <img src={tecnologia.img}  />
          </div>
          <div className="back-info">
              <h1>{tecnologia.nombre}</h1>
  
          </div>
          <ul className="back-list">
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

export default Back