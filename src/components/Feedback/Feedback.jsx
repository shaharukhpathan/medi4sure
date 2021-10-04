import React,{useState} from "react";
import { Row, Col, Form,Button } from "react-bootstrap";
import "./Feedback.css";

export const Feedback = () => {
  const[val,setVal]=useState("Welcome to IT Sector");

  const handleSubmit=()=>{
    // const msg="Hello....";
    // document.getElementById("titletxt").value=msg;
    // document.getElementById("stext").value=msg;
    // document.getElementById("ptext").value=msg;
    // console.log("submit is clicked");
    setVal("Thanks for coming to us!!!");
    console.log("Thanks")
  };
  return (
    <Form>
    <p>
      <span>{val}</span>
   </p>
   
  <Form.Control placeholder="Enter Title Here" className="fbrow" value={val}></Form.Control>
  <Form.Control as="textarea" placeholder="Describe your feedback here" className="fbrow"></Form.Control>
<Row className="fbrow">
<Col lg={10}></Col>
<Col lg={1}><Button onClick={handleSubmit}>Submit</Button></Col>

<Col lg={1}><Button onClick={()=>setVal("sorry for cancellation")}>Cancel</Button></Col>
</Row>
<Col></Col>
</Form>
    
  

);
};

    // <Row>
    //     <Col lg={8}>Amar</Col>
    //     <Col lg={4}>Prem</Col>

    // </Row>



    // <div>

    // <Row>
    //   <Col>
    //   <Form>
    //     <Form.Control placeholder="Enter Title Here"></Form.Control>
    //   </Form>
    //   </Col>
    //    </Row>
    // <Row>
    //   <Col>
    //   <Form>
    //     <Form.Control as="textarea"></Form.Control>
    //   </Form>
    //   </Col>
    //    </Row>
    // </div>
    

    
    //   <Form>
    //     <Form.Control placeholder="Enter Title Here"></Form.Control>
    //     <Form.Control as="textarea" placeholder="Describe your feedback here"></Form.Control>
    // <Row>
    //   <Col lg={8}></Col>
    //   <Col lg={1}><Button>Submit</Button></Col>
    //   <Col lg={1}><Button>Cancel</Button></Col>
    // </Row>
    // <Col></Col>
    //  </Form>

//   
//   <Form>
//       
//         
//
//     <Form.Control placeholder="Enter Title Here" className="fbrow"></Form.Control>
//     <Form.Control as="textarea" placeholder="Describe your feedback here" className="fbrow"></Form.Control>
// <Row>
//   <Col lg={8}></Col>
//   <Col lg={1}><Button>Submit</Button></Col>
//   <Col lg={1}><Button>Cancel</Button></Col>
// </Row>
// <Col></Col>
//  </Form>
      
   