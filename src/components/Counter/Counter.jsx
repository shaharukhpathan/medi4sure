// import Button from "@restart/ui/esm/Button";
import React,{useState} from "react";
import { Row,Col,Button } from "react-bootstrap";

export const Counter=()=>{

const [count,setCount]=useState (0);
const handleIncrases=()=>{
    setCount(count + 1);
};
const handleDecraese=()=>{
    setCount(count - 1);
};
return(
    <div>
        <Row>
            <Col md={4}>
                <Button onClick={handleIncrases}>+</Button>
            </Col>
            <Col md={4}>
                <p>{count}</p>
            </Col>
            <Col md={4}>
                <Button onClick={handleDecraese}>-</Button>
            </Col>
        </Row>
    </div>
)

}