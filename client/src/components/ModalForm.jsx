import {  Modal } from "semantic-ui-react";
import Form from "./Form";

const ModalForm = ({ handleGetCompanies, open, setOpen, title, id }) => {
  return (
    <Modal
      open={open}
    >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>
        <Form setOpen={setOpen} handleGetCompanies={handleGetCompanies} id={id} />
      </Modal.Content>
    </Modal>
  );
};

export default ModalForm;
