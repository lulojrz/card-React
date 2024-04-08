import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
       
        <div className="img-container">
            <img src={props.img} alt="" />
        </div>
        <div className="information">
            <h1>{props.nombre}</h1>

        </div>
        <ul className="list">
            <li><strong>Creacion: </strong>{props.año}</li>
        </ul>
        <div className="funcion">
            {props.funcion}
        </div>

    </div>
  )
}

export default Card