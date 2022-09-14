import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "./store/modal-slice";
import { Button } from "antd";
import openModal from "./components/UI/Modal";

const Content1 = () => {
  return <h1>Test modal 1</h1>;
};

const Content2 = () => {
  return <h1>Test modal 2</h1>;
};

function App() {
  const dispatch = useDispatch();

  const showModalOne = () => {
    dispatch(modalActions.showModal({ bodyProps: <Content1/> }));
  };

  const showModalTwo = () => {
    dispatch(modalActions.showModal({ bodyProps: <Content2/> }));
  };
  return (
    <Fragment>
      <Button onClick={showModalOne}>Modal 1</Button>
      <Button onClick={showModalTwo}>Modal 2</Button>
    </Fragment>
  );
}

export default App;
