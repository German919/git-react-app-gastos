import React,{Fragment, useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./styles/styles.css"
import Saldo from './components/Saldo';
import Control from './components/Control';
import FormGastos from "./components/FormGastos"
import ListadoGastos from './components/ListadoGastos';

function App() {

  //STATE DE ERROR
  const [error, setError] = useState(false)
  
  //STATE DEL DINERO
  const [dinero, setDinero] = useState(0)

  //STATE DEL RESTO DEL DINERO
  const [resto, setResto] = useState(0)

  //STATE GASTOS
  const [gastos, setGastos] = useState([])

  //STATE PARA CREAR LOS GASTOS
  const [crearGasto, setCrearGasto] = useState(false)

  //STATE GASTO
  const [gasto, setGasto] = useState({})

  useEffect(()=>{
    if(crearGasto){
      setGastos([  
        ...gastos,
        gasto
      ])

      const dineroRestante = resto - gasto.monto
      
      setResto(dineroRestante)
      setCrearGasto(false)
    }
  },[gasto])

  return (
    <Fragment>
      <section className="header">
          Mis gastos
      </section>
        <Container>
          <Row>
            <Col>
              <Saldo setDinero = {setDinero} setResto={setResto}/>
            </Col>
            <Col>
              <Control dinero={dinero} resto={resto} />
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGastos
                setCrearGasto = {setCrearGasto}
                nuevoGasto = {setGasto}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ListadoGastos gastos={gastos}/>
            </Col>
          </Row>
        </Container>
    </Fragment>
  );
}

export default App;
