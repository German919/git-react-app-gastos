import React from "react"

import {Alert} from "react-bootstrap"

const Error = ({alertError}) =>(
    
    <Alert variant = "danger">{alertError}</Alert>
)

export default Error
