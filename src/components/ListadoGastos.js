import React,{Fragment} from "react"
import Gasto from  "./Gasto"

const ListadoGastos = ({gastos}) => {
    return (  
        <Fragment>
            <h3>Gastos diarios</h3>
            {
                gastos.map((gasto) => (
                    <Gasto key={gasto.id} gasto={gasto}/>
                ))

            }
        </Fragment>
    );
}
 
export default ListadoGastos;