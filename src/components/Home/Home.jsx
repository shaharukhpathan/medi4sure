import { MediUpdates } from "./MediUpdates";
import { Emicalci } from "../Emi calculator/EmIcalci";
import { Feedback } from "../Feedback/Feedback";
import { HeaderForComp } from "../Common/HeaderForComp";
import {Counter} from "../Counter/Counter"

export const Home = () => {
  return (
    //  <div>
    //   <Emicalci/>
    //   <Feedback />
    //   <MediUpdates />
    // </div>
    <div>
    <HeaderForComp title="Emi Calculator"/>
    <Emicalci/>
    <HeaderForComp title="Feedback"/>
    <Feedback />
    <HeaderForComp title="MediUpdates"/>
    <MediUpdates />
    <Counter />
  </div>
  );
};
