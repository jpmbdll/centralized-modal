import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modal-slice";
import { useEffect } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export const Content = () => {
  const dispatch = useDispatch();

  const handler = (action) => {
    console.log(action);
    if (action === "Save") {
      alert("CONTENT Save");
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
      <FormControl>
        <FormLabel>First name</FormLabel>
        <Input type="firstName" />
      </FormControl>

      <FormControl>
        <FormLabel>Last name</FormLabel>
        <Input type="lastName" />
      </FormControl>

      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>

      <FormControl>
        <FormLabel>Address</FormLabel>
        <Input type="address" />
      </FormControl>

      <FormControl>
        <FormLabel>Gender</FormLabel>
        <Input type="gender" />
      </FormControl>
    </>
  );
};
