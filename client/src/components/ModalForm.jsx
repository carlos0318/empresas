import { useState } from "react";
import { Button, Modal } from "semantic-ui-react";

const ModalForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button primary>Nueva empresa</Button>}
    >
      <Modal.Header>Añadir una nueva empresa</Modal.Header>
      <Modal.Content>
        
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancelar
        </Button>
        <Button
          content="Guardar"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ModalForm;
