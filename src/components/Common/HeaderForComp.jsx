// export const HeaderForComp=()=>{
//     return
//         <div>Emi Calculator</div>;
    
// }
import "./HeaderForComp.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// this two import copy from fontawesome react website
export const HeaderForComp=({title})=>{
    return(

        <div className="headercomp">
            <FontAwesomeIcon icon={faCoffee} />
           <span className="spandata">{title}</span>
            </div>
    );
    
};