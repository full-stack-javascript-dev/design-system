import React, { Component, useState, useCallback, SyntheticEvent } from "react";
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

interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: any;
}

const ModalHeaderWrapper = styled.div`
  color: white;
  padding: 14px;
`;
export const ModalHeader: React.FC<ModalHeaderProps> = ({ children }) => {
  return <ModalHeaderWrapper>{children}</ModalHeaderWrapper>;
};

export const ModalContent = styled.div`
  background-color: white;
  padding: 14px;
  padding-bottom: 44px;
`;

interface ModalDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  onBackgroundClick?: () => void;
  children?: any;
}
export const ModalDialog: React.FC<ModalDialogProps> = ({
  onBackgroundClick,
  children
}) => {
  return (
    <BackgroundLayer onClick={onBackgroundClick}>
      <ModalDialogWrapper>{children}</ModalDialogWrapper>
    </BackgroundLayer>
  );
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

type Action = () => void;

interface IConfirmModal {
  //render: (handleOnChildClick: (callback: () => void) => void) => void;
  title: string;
  message: string;
  onConfirmed: Action;
  children?: (showModal: Action) => void;
}

export const ConfirmModal = ({
  onConfirmed,
  title,
  message,
  children
}: IConfirmModal) => {
  const [confirmVisible, setConfirmVisible] = useState(false);

  const handleOnShowModal = useCallback(() => {
    if (!confirmVisible) {
      setConfirmVisible(true);
    } else {
      // do nothing? assume button is inactive until dialog cleared?
    }
  }, [confirmVisible]);

  const handleDialogOnOk = useCallback(() => {
    onConfirmed();
    setConfirmVisible(false);
  }, [onConfirmed, confirmVisible]);

  const handleDialogOnCancel = useCallback(() => {
    setConfirmVisible(false);
  }, [confirmVisible]);

  return (
    <>
      {confirmVisible && (
        <ModalDialog>
          <ModalHeader>{title}</ModalHeader>
          <ModalContent>{message}</ModalContent>
          <FormWrapper overlay emphasis>
            <FormControl noOffsetBottom>
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
      )}
      {children && children(handleOnShowModal)}
    </>
  );
};
