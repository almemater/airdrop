import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FrameComponent.css";

export type FrameComponentType = {
  prop?: string;
  championsOfCustome?: string;
  index?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth1?: CSSProperties["width"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  prop,
  championsOfCustome,
  index,
  propPadding,
  propWidth,
  propMinWidth,
  propWidth1,
}) => {
  const groupButtonStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const championsOfCustomeStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      width: propWidth1,
    };
  }, [propMinWidth, propWidth1]);

  return (
    <div className="frame-wrapper5">
      <div className="frame-parent5">
        <div className="frame-parent6">
          <button className="group-button" style={groupButtonStyle}>
            <div className="frame-child1" />
            <img className="icon1" alt="" src={prop} style={iconStyle} />
          </button>
          <div className="champions-of-custome-parent6">
            <h1
              className="champions-of-custome17"
              style={championsOfCustomeStyle}
            >
              {championsOfCustome}
            </h1>
            <div className="frame-wrapper6">
              <div className="group-div">
                <img className="vector-icon5" alt="" src="/vector.svg" />
                <div className="vector-parent2">
                  <img className="vector-icon6" alt="" src="/vector-1.svg" />
                  <img className="vector-icon7" alt="" src="/vector-2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent7">
          <div className="frame-wrapper7">
            <div className="x31-16-container">
              <img
                className="x31-16-icon2"
                loading="lazy"
                alt=""
                src="/-x31-16.svg"
              />
              <b className="champions-of-custome18">10</b>
            </div>
          </div>
          <button className="button5">
            <div className="index5">{index}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
