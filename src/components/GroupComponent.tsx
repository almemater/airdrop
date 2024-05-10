import { FunctionComponent } from "react";
import "./GroupComponent.css";

const GroupComponent: FunctionComponent = () => {
  return (
    <div className="rectangle-container">
      <div className="rectangle-div" />
      <img className="group-icon1" loading="lazy" alt="" src="/group.svg" />
      <h1 className="champions-of-custome15">{`Refer & Earn`}</h1>
      <div className="champions-of-custome16">{`Invite friends, and as they engage both of you earn 20% points. `}</div>
      <button className="button4">
      	<div className="x-mark">
          <div className="index4">Copy Link</div>    
      	</div>
      </button>
    </div>
  );
};

export default GroupComponent;
