import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";
import { modalActions } from "../../store/modal-slice";

// TODO
// - Use Chakra UI modal
// - Implement dynamic button actions
// - investigate if using react portal to render modal is possible
// - allign design with partner console

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
      <p>Some conten ddts...</p>
      <p>Some con tent sdsd...</p>
      <p>Some cont ents.dasdassdsada ..</p>
      <p>Some contendsdsts...</p>
    </Modal>
  );
};

export default TestModal;
