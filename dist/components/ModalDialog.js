import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { FormWrapper, FormControl, FormLabel, FormElement } from "./FormData";
import { Button, ButtonGroup } from "./Button";
export const BackgroundLayer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalDialogWrapper = styled.div`
  background-color: rgb(0, 127, 224);
  padding: 1px;
`;
const ModalHeaderWrapper = styled.div`
  color: white;
  padding: 14px;
`;
export const ModalHeader = ({
  children
}) => {
  return React.createElement(ModalHeaderWrapper, null, children);
};
export const ModalContent = styled.div`
  background-color: white;
  padding: 14px;
  padding-bottom: 44px;
`;
export const ModalDialog = ({
  onBackgroundClick,
  children
}) => {
  return React.createElement(BackgroundLayer, {
    onClick: onBackgroundClick
  }, React.createElement(ModalDialogWrapper, null, children));
};
/*
interface IHocModalProps extends React.AllHTMLAttributes<Component> {}

export const withConfirmModal = (component: Component) => (
  props: IHocModalProps
) => {
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [cachedEvent, setCachedEvent] = useState<MouseEvent | null>(null);

  const handleComponentClick = useCallback(
    ev => {
      if (!confirmVisible) {
        ev.persist();
        setCachedEvent(ev);

        setConfirmVisible(true);
      } else {
        // do nothing? assume button is inactive until dialog cleared?
      }
    },
    [confirmVisible]
  );

  const handleDialogOnOk = useCallback(() => {
    if (props && props.onClick && cachedEvent) {
      (props as any).onClick(cachedEvent);
    }
  }, [props]);

  const handleDialogOnCancel = useCallback(() => {}, [props]);

  return (
    <>
      <ModalDialog>
        <ModalHeader>Confirm</ModalHeader>
        <p>Confirm?</p>

        <FormWrapper overlay emphasis>
          <FormControl>
            <FormLabel />
            <FormElement>
              <ButtonGroup>
                <Button onClick={handleDialogOnOk}>OK</Button>
                <Button onClick={handleDialogOnCancel}>Cancel</Button>
              </ButtonGroup>
            </FormElement>
          </FormControl>
        </FormWrapper>
      </ModalDialog>
      <Component {...props} onClick={handleComponentClick} />
    </>
  );
};
*/

export const ConfirmModal = ({
  onConfirmed,
  title,
  message,
  children
}) => {
  const [confirmVisible, setConfirmVisible] = useState(false);
  const handleOnShowModal = useCallback(() => {
    if (!confirmVisible) {
      setConfirmVisible(true);
    } else {// do nothing? assume button is inactive until dialog cleared?
    }
  }, [confirmVisible]);
  const handleDialogOnOk = useCallback(() => {
    onConfirmed();
    setConfirmVisible(false);
  }, [onConfirmed, confirmVisible]);
  const handleDialogOnCancel = useCallback(() => {
    setConfirmVisible(false);
  }, [confirmVisible]);
  return React.createElement(React.Fragment, null, confirmVisible && React.createElement(ModalDialog, null, React.createElement(ModalHeader, null, title), React.createElement(ModalContent, null, message), React.createElement(FormWrapper, {
    overlay: true,
    emphasis: true
  }, React.createElement(FormControl, {
    noOffsetBottom: true
  }, React.createElement(FormLabel, null), React.createElement(FormElement, null, React.createElement(ButtonGroup, null, React.createElement(Button, {
    onClick: handleDialogOnOk
  }, "OK"), React.createElement(Button, {
    onClick: handleDialogOnCancel
  }, "Cancel")))))), children && children(handleOnShowModal));
};