import React, { useRef, useEffect } from "react";

const ControlledAnimation = ({
  style,
  children,
  onAnimated,
  triggerWhen,
  animationEventType
}) => {
  const domControlRef = useRef(null);
  useEffect(() => {
    //console.log("domControlRef.current", domControlRef.current);
    const triggerStyles = Object.keys(triggerWhen);

    const domAnimationEndHandler = ev => // TS bug AnimationEvent/TransitionEvent don't seem to be correct
    {
      //console.log("domAnimationEndHandler", triggerStyles, ev, ev.target.style);
      const triggerPropCandidate = triggerStyles.find(style => style === ev.propertyName);

      if (triggerPropCandidate && ev.target.style[ev.propertyName] === triggerWhen[triggerPropCandidate]) {
        //console.log("transitionend", ev.target.style.transform);
        onAnimated();
      }
    }; // TODO: attach based on browser
    // https://www.w3schools.com/jsref/event_animationend.asp
    // Standard syntax


    domControlRef.current && domControlRef.current.addEventListener(animationEventType, domAnimationEndHandler);
  }, [animationEventType, onAnimated, triggerWhen]);
  return React.createElement("div", {
    ref: domControlRef,
    style: style
  }, children);
};

export const ControlledTransitionAnimation = props => {
  return ControlledAnimation({ ...props,
    animationEventType: "transitionend"
  });
};
export const ControlledKeyframeAnimation = props => {
  return ControlledAnimation({ ...props,
    animationEventType: "animationend"
  });
};