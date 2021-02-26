import {Fragment,useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  //creando state del formulario

  const [busquedad, guardarBusquedad] = useState({
    ciudad:'',
    pais: '',
  });

  const [consultar, guardarConsultar] = useState(false);

  const {ciudad, pais} = busquedad;

  useEffect(() => {
    const consultarAPI = async () =>{
      // http: https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=61e1c23a6e0c82bb06807b64e6a88405
      console.log(Funciona)
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
                2
              </div>
            </div>
          </div>
        </div>
    </Fragment>
    
  );
}

export default App;
