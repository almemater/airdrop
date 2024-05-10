import { FunctionComponent } from "react";
import "./GroupComponent.css";

const GroupComponent: FunctionComponent = () => {
  return (
    <div className="rectangle-container">
      <div className="rectangle-div" />
      <img className="group-icon1" loading="lazy" alt="" src="/group.svg" />
      <h1 className="champions-of-custome15">{`Refer & Earn`}</h1>
      <div className="champions-of-custome16">{`Invite friends: Both you and the person you refer receive 1500 bonus Alme Points. These are credited soon as the person you refer joins our Discord. `}</div>
      <button className="button4">
      	<div className="x-mark">
          <div className="index4">Copy Link</div>    
      	</div>
      </button>
    </div>
  );
};

export default GroupComponent;
