import React,{Fragment, useState} from "react"

import {Form, Button} from "react-bootstrap"

import Error from "../components/Error"

const Saldo = ({setDinero, setResto}) => {

    //STATE DEL ERROR
    const [error, setError] = useState(false)

    //STATE DEL PRESUPUESTO
    const [presupuesto, setPresupuesto] = useState(0)

    const cargarPresupuesto = e =>{
        setPresupuesto(parseInt(e.target.value))
    }
    
    const submitPresupuesto = (e) =>{

        e.preventDefault()
        
        if(presupuesto < 1 || isNaN(presupuesto)){
            setError(true)
            return
        }else{
            setError(false)
        }

        setDinero(presupuesto)
        setResto(presupuesto)
    }

    return ( 
        <Fragment>
            <Form onSubmit = {submitPresupuesto}>
                <Form.Group>
                    <Form.Label>Ingresa tu presupuesto</Form.Label>
                    <Form.Control type="number" placeholder="Ingresa tu presupuesto" onChange={cargarPresupuesto} />
                    <Form.Text className="text-muted">Acá tu dinero rinde más</Form.Text>
                </Form.Group>
                {
                  error ? <Error alertError = "Coloca un importe mayor a 0"/> : null
                }
                <Button block={true} variant="primary" type="submit">Ingresar Dinero</Button>

            </Form>
        </Fragment>
     );
}
 
export default Saldo;