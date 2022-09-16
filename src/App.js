import { useDispatch } from "react-redux";
import { modalActions } from "./store/modal-slice";
import { Button, Center } from "@chakra-ui/react";
import { BUTTONS_TYPE } from "./components/UI/ModalSettings";
import { Content } from "./components/UI/Content";
import { Content2 } from "./components/UI/Content2";
import { Content3 } from "./components/UI/Content3";

function App() {
  const dispatch = useDispatch();

  const showModalOne = () => {
    dispatch(
      modalActions.showModal({
        bodyProps: <Content />,
        actions: [BUTTONS_TYPE.SAVE, BUTTONS_TYPE.CANCEL],
      })
    );
  };

  const showModalTwo = () => {
    dispatch(
      modalActions.showModal({
        //styles, modalProps...
        bodyProps: <Content2 />,
        actions: [
          BUTTONS_TYPE.CREATE,
          BUTTONS_TYPE.UPDATE,
          BUTTONS_TYPE.DELETE,
        ],
      })
    );
  };

  const showModalThree = () => {
    dispatch(
      modalActions.showModal({
        //styles, modalProps...
        bodyProps: <Content3 />,
        actions: [
          BUTTONS_TYPE.CREATE,
          BUTTONS_TYPE.UPDATE,
          BUTTONS_TYPE.DELETE,
          BUTTONS_TYPE.CANCEL,
        ],
      })
    );
  };

  return (
    <Center>
      <Button m={10} onClick={showModalOne} colorScheme="blue">
        Content
      </Button>
      <Button m={10} onClick={showModalTwo} colorScheme="red">
        Content 2
      </Button>
      <Button m={10} onClick={showModalThree} colorScheme="red">
        Content 3
      </Button>
    </Center>
  );
}

export default App;
