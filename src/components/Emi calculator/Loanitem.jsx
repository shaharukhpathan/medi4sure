import {Row,Col,FormControl,InputGroup} from "react-bootstrap";
export const Loanitem=(props)=>{
    return(
        <div>

   <Row>
   <Col lg={3}>
     {props.type}  Home Loan Amount
   </Col>
   <Col lg={9}>
   <InputGroup className="mb-3">
    <InputGroup.Text>₹</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Text>.00</InputGroup.Text>
  </InputGroup>
   </Col>
   </Row>

   <Row>
   <Col lg={3}>
   {props.type}  Interest Loan
   </Col>
   <Col lg={9}>
   <InputGroup className="mb-3">
    
    <FormControl aria-label="Interest Loan" />
    <InputGroup.Text>%</InputGroup.Text>
  </InputGroup>
   </Col>
   </Row>

   <Row>
   <Col lg={3}>
   {props.type}  Loan Tenure
   </Col>
   <Col lg={9}>
   <InputGroup className="mb-3">
    
    <FormControl aria-label=" Loan Tenure" />
    <InputGroup.Text>yrs</InputGroup.Text>
  </InputGroup>
   </Col>
   </Row>
        </div>
    );
}