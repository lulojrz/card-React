import './App.css';
import Card from './card';
import Front from './front';
import Back from './back';
import { useState } from 'react';

function App() {
  const [click,Setclick] = useState(false)
  const [click2,Setclick2] = useState(false)

  function clicktrue(){
    Setclick(true) 
    Setclick2(false)

  }
  function clickverdad(){
    Setclick2(true)
    Setclick(false)
  }


  return (

    <div className="App">
      <div className="title">
        <div className="content">
        <h1>Lo basico</h1>

        </div>

      </div>

      <div className="card-container">
        <Card img="https://logowik.com/content/uploads/images/492_html5.jpg"
          nombre="HTML"
          año={1999}
          

          funcion="Sirve para etiquetar la pagina web, seria como los huesos de un cuerpo" />

        <Card img="https://logowik.com/content/uploads/images/123_css3.jpg"
          nombre="CSS"
          año={1999}
         

          funcion="Sirve para decorar y estilizar las etiquetas que hicimos con HTML" />

        <Card img="https://repository-images.githubusercontent.com/657736250/efe020c3-cfc2-41f9-be41-ad581ffc9969"
          nombre="JavaScript"
          año={1994}
        

          funcion="Sirve para darle funcionalidad a la pagina web, se pueden hacer variedad de cosas" />



      </div>
      <div className="button-container">
        <button onClick={clickverdad}>Front-end</button>
        <button onClick={clicktrue}>Back-end </button>


      </div>
      <div className="second-container">
        {
          click? <Back/>  : undefined
        }
        {
         click2? <Front/> : undefined
        }
        


      </div>
      




    </div>
  );
}

export default App;