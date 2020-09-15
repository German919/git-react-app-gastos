import React,{Fragment} from "react"
import {Card} from "react-bootstrap"

const Control = ({dinero, resto}) => {
    return ( 
        <Fragment>
            <Card>
                <Card.Body>
                    <Card.Title>Presupuesto Actual</Card.Title>
                    <Card.Text>
                        Presupuesto: ${dinero}
                    </Card.Text>
                    <Card.Text>
                        Restante: ${resto}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Fragment>
     );
}
 
export default Control;