import {Tabs,Tab} from "react-bootstrap";
import {Loanitem} from "./Loanitem"

export const Emicalci =()=>{
    return(
//         <Tabs
//         defaultActiveKey="profile"
//         id="uncontrolled-tab-example"
//         className="mb-3">
//             <Tab eventKey="homeloan" title="HOME LOAN">
//  <p>tab1</p>
//             </Tab>
//             <Tab eventKey="personalloan" title="PERSONAl LOAN">
// <p>tab2</p>
//             </Tab>
//             <Tab eventKey="carloan" title="CAR LOAN">
// <p>tab3</p>
//             </Tab>
//         </Tabs>
/* <Tabs
defaultActiveKey="profile"
id="uncontrolled-tab-example"
className="mb-3">
    <Tab eventKey="homeloan" title="HOME LOAN">
<Loanitem/>
    </Tab>
    <Tab eventKey="personalloan" title="PERSONAl LOAN">
    <Loanitem/>
    </Tab>
    <Tab eventKey="carloan" title="CAR LOAN">
    <Loanitem/>
    </Tab>
</Tabs> */
<Tabs
defaultActiveKey="profile"
id="uncontrolled-tab-example"
className="mb-3">
    <Tab eventKey="homeloan" title="HOME LOAN">
<Loanitem type="Home"/>
    </Tab>
    <Tab eventKey="personalloan" title="PERSONAl LOAN">
    <Loanitem type="Personal"/>
    </Tab>
    <Tab eventKey="carloan" title="CAR LOAN">
    <Loanitem type="CAR"/>
    </Tab>
</Tabs>
    )
}