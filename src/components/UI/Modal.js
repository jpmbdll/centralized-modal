import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";
import { modalActions } from "../../store/modal-slice";

const TestModal = () => {
  const dispatch = useDispatch();
  const { visible, bodyProps } = useSelector((state) => state.modal);

  const handleCancel = () => {
    dispatch(modalActions.hideModal());
  };

  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={handleCancel}
      onCancel={handleCancel}
    >
      {bodyProps}
      <p>Some conten ts...</p>
      <p>Some con tentsadas s...</p>
      <p>Some contendsdsts...</p>
    </Modal>
  );
};

export default TestModal;
