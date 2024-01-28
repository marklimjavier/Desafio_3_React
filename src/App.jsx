import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from './components/Alert';
import Listado from './components/Listado';
import BaseColaboradores from './components/BaseColaboradores';
import Datos from './components/Formulario';
import Buscador from './components/Buscador';

function App() {
  const [error, setError] = useState({ error: false, msg: '', color: '' }); //encontre que la dificultad con el anterior
  //desafio era porque no era capaz de reconocer propiedades y por eso no reconocia color, ahora se soluciono al darle
  //valores iniciales, en mi codigo necesitaban mas indicaciones para reconocer que son parametros posiblemente se trate
  //de una extension que no relacione el codigo a la hora de escribirlo, por alguna razon este problema se soluciona a
  // veces al hacer el codigo de cero (van 2 y las 2 veces se han solucionado)

  const [data, setData] = useState(BaseColaboradores);
  const [ dataFilter ] = useState(data);
  const handleDataFilter = (filteredData) => {
    setData(filteredData); //me canse que dijera filterData is not define y la defini, estuve viendo y aunque coloque
    //el codigo como lo hace usted mi computadora no la reconoce de la misma forma, lo mismo me parecio mi anterior 
    //desafio como si mi pc fuera mas primitiva para reconocer el codigo, puede deberse a que me falta una extension
  };

  


  return (
    <section>
    <article>
      <Buscador data={data} dataFilter={handleDataFilter}/>
      <Listado data={data} setData={setData} />
      </article>
      <article>
      <Datos error={error} setError={setError} setData={setData} />
      <Alert error={error}/>
      </article>  
    </section>
         
  );
}

export default App;
