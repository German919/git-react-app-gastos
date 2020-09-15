import React,{Fragment} from "react"
import {ListGroup} from "react-bootstrap"

const Gasto = ({gasto}) => {
    return ( 
        <Fragment>
            <ListGroup>
                <ListGroup.Item>{gasto.nombre}</ListGroup.Item>
                <ListGroup.Item>{gasto.monto}</ListGroup.Item>
            </ListGroup>

        </Fragment>
     );
}
 
export default Gasto;