import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

/*
function ControlledAnimation({
  style,
  children,
  onAnimated,
  triggerWhen,
  animationEventType
}) {
*/

interface ControlledAnimationProps {
  style: any;
  children?: React.ReactNode;
  onAnimated: () => void;
  triggerWhen: any;
}

interface ControlledAnimationInternalProps extends ControlledAnimationProps {
  animationEventType: string;
}

const ControlledAnimation: React.FC<ControlledAnimationInternalProps> = ({
  style,
  children,
  onAnimated,
  triggerWhen,
  animationEventType
}) => {
  const domControlRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    //console.log("domControlRef.current", domControlRef.current);

    const triggerStyles = Object.keys(triggerWhen);

    const domAnimationEndHandler = (
      ev:
        | React.TransitionEvent<HTMLDivElement>
        | React.AnimationEvent<HTMLDivElement>
        | any // TS bug AnimationEvent/TransitionEvent don't seem to be correct
    ) => {
      //console.log("domAnimationEndHandler", triggerStyles, ev, ev.target.style);

      const triggerPropCandidate = triggerStyles.find(
        style => style === ev.propertyName
      );

      if (
        triggerPropCandidate &&
        ev.target.style[ev.propertyName] === triggerWhen[triggerPropCandidate]
      ) {
        //console.log("transitionend", ev.target.style.transform);
        onAnimated();
      }
    };

    // TODO: attach based on browser
    // https://www.w3schools.com/jsref/event_animationend.asp

    // Standard syntax
    domControlRef.current &&
      domControlRef.current.addEventListener(
        animationEventType,
        domAnimationEndHandler
      );
  }, [animationEventType, onAnimated, triggerWhen]);

  return (
    <div ref={domControlRef} style={style}>
      {children}
    </div>
  );
};

export const ControlledTransitionAnimation: React.FC<
  ControlledAnimationProps
> = props => {
  return ControlledAnimation({ ...props, animationEventType: "transitionend" });
};

export const ControlledKeyframeAnimation: React.FC<
  ControlledAnimationProps
> = props => {
  return ControlledAnimation({ ...props, animationEventType: "animationend" });
};
