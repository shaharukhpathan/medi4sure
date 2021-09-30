import { Row, Col, Form,Button } from "react-bootstrap";
import "./Feedback.css";

export const Feedback = () => {
  return (
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

    <Form>
    <Form.Control placeholder="Enter Title Here" className="fbrow"></Form.Control>
    <Form.Control as="textarea" placeholder="Describe your feedback here" className="fbrow"></Form.Control>
<Row>
  <Col lg={8}></Col>
  <Col lg={1}><Button>Submit</Button></Col>
  <Col lg={1}><Button>Cancel</Button></Col>
</Row>
<Col></Col>
 </Form>
      
    

  );
};
