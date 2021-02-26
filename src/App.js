import {Fragment,useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

function App() {

  //creando state del formulario

  const [busquedad, guardarBusquedad] = useState({
    ciudad:'',
    pais: '',
  });

  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});

  const {ciudad, pais} = busquedad;

  useEffect(() => {
    const consultarAPI = async () =>{

      if(consultar){
      const appId = '6aab3d275cd2093538eedd66172b4db1';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${appId}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      
      guardarResultado(resultado);
      guardarConsultar(false);
      }
    }
    consultarAPI();
  }, [consultar])

  return (
    <Fragment>
        <Header
          titulo = 'Clima Ciudades - React con API'
        />
        <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col m6 s12">
                <Formulario
                  busquedad = {busquedad}
                  guardarBusquedad = {guardarBusquedad}
                  guardarConsultar = {guardarConsultar}
                />
              </div>
              <div className="col m6 s12">
                <Clima
                  resultado = {resultado}
                />
              </div>
            </div>
          </div>
        </div>
    </Fragment>
    
  );
}

export default App;
