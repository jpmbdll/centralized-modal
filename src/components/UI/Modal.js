import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { modalActions } from "../../store/modal-slice";

const PortalModal = () => {
  const dispatch = useDispatch();
  const {
    visible,
    bodyProps,
    actions: actionButtons,
    actionHandler,
  } = useSelector((state) => state.modal);

  const handleClose = () => {
    dispatch(modalActions.hideModal());
  };

  const actions = () => {
    if (!Boolean(actionButtons)) return null;
    return actionButtons.map((button, i) => (
      <Button
        key={i}
        colorScheme={button.colorScheme}
        onClick={() => actionHandler(button.label)}
      >
        {button.label}
      </Button>
    ));
  };

  return (
    <Modal isOpen={visible} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{bodyProps}</ModalBody>
        <ModalFooter>{actions()}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PortalModal;
