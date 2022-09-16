import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modal-slice";
import { useEffect } from "react";

export const Content3 = () => {
  const dispatch = useDispatch();

  const handler = (action) => {
    console.log(action);
    if (action === "Create") {
      alert("Content 3 CREATE");
    }
  };

  useEffect(() => {
    dispatch(
      modalActions.setActionHandler({
        actionHandler: handler,
      })
    );
  }, [dispatch]);

  return (
    <>
      <p>Some conten ts...</p>
      <p>Some con tentsadas s...</p>
      <p>Some conten ddts...</p>
      <p>Some con tent sdsd...</p>
      <p>Some cont ents.dasdassdsada ..</p>
      <p>Some contendsdsts...</p>
    </>
  );
};
