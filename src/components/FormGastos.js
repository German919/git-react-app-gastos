import React, { useState, Fragment } from "react"

import {Form, Button} from "react-bootstrap"

import shortid from "shortid"

import Error from "./Error"

//Paso dos props a la funcion
const FormGastos = ({nuevoGasto, setCrearGasto}) => {

    //STATE PARA EL NOMBRE DEL GASTO
    const [nombre, setNombre] = useState("")

    //STATE PARA EL MONTO DE LOS GASTOS
    const [monto, setMonto] = useState(0)

    //STATE DE ERROR
    const [error, setError] = useState(false)

    const agregarGasto = (e) =>{ 

        e.preventDefault()

        if(monto < 1 || isNaN(monto) || nombre.trim() === ""){
            setError(true)
            return
        }else{
            setError(false)
        }
        
        const gasto = {
            nombre,
            monto,
            id: shortid.generate()
        }

        nuevoGasto(gasto)

        setCrearGasto(true)
        setNombre("")
        setMonto(0)
        console.log(gasto)
 
    }

    return ( 
        <Fragment>
            <Form onSubmit={agregarGasto}>
                <Form.Label><h3>Agregar gasto nuevo</h3></Form.Label>
                <Form.Group>
                    <Form.Control type="text" placeholder="En que gastate" 
                        value={nombre} onChange={e=>setNombre(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="number" placeholder="" 
                        value={monto} onChange={e=>setMonto(parseInt(e.target.value))}></Form.Control>
                </Form.Group>
                {
                    error ? <Error alertError="Todos los campos son obligatorios"/> : null
                }
                <Button block={true} variant="primary" type="submit">Agregar Gasto</Button>
            </Form>
        </Fragment>
     );
}
 
export default FormGastos;