import React from "react";
import { Button, Modal } from "semantic-ui-react";
import axios from 'axios';

const Confirm = ({ open, setOpen, id, handleGetCompanies }) => {
  const deleteCompany = async() => {
    await axios.delete(`http://localhost:5000/empresas/${id}`);
    handleGetCompanies();
    setOpen(false)
  }

  return (
    <Modal size="mini" open={open}>
      <Modal.Header>
        ¿Estás seguro de que deseas eliminar esta empresa?
      </Modal.Header>
      <Modal.Actions>
        <Button negative onClick={() => setOpen(false)}>
          No
        </Button>
        <Button positive onClick={deleteCompany}>
          Si
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default Confirm;
