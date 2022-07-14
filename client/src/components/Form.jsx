import { useEffect, useState } from "react";
import { Form, Button, Modal } from "semantic-ui-react";
import axios from "axios";
import { dateFormat } from "../utils/dateFormat";

const Formulario = ({ setOpen, handleGetCompanies, id }) => {
  const [tipos, setTipos] = useState([]);
  const [open2, setOpen2] = useState(false);
  const [res, setResp] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [comments, setComments] = useState('');

  const handleGetCompany = async () => {
    const result = await axios.get(
      `http://localhost:5000/empresas/empresa/${id}`
    );
    const company = result.data[0];
    setName(company.nombre);
    setDate(company.fechaConstitucion);
    setType(company.id_tipoEmpresa);
    setComments(company.comentarios);
  };

  const handleNewCompany = async (event) => {
    event.preventDefault();
    const data = {
      nombre: name,
      fechaConstitucion: dateFormat(date),
      id_tipoEmpresa: type,
      comentarios: comments,
    };

    const result =
      id === undefined
        ? await axios.post("http://localhost:5000/empresas/", data)
        : await axios.put(`http://localhost:5000/empresas/${id}`, data);

    setOpen2(true);
    setResp(result.data);
  };

  const handleTypesCompany = async () => {
    const result = await axios.get("http://localhost:5000/empresas/tipos");
    setTipos(result.data);
  };

  const handleConfirm = async () => {
    handleGetCompanies();
    setOpen2(false);
    setOpen(false);
  };

  useEffect(() => {
    handleTypesCompany();
    id && handleGetCompany();
  }, []);

  return (
    <>
      <Form onSubmit={handleNewCompany}>
        <Form.Field>
          <label>Nombre*</label>
          <input
            placeholder="Nombre de la empresa"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Fecha de constitución*</label>
          <input
            type="date"
            placeholder="Fecha de constitución"
            required
            value={date && dateFormat(date)}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Field>
        <Form.Field
          label="Tipo de empresa*"
          control="select"
          onChange={(e) => setType(e.target.value)}
        >
          {tipos.map((tipo) => (
            <option key={tipo.id} value={tipo.id} defaultValue={type}>
              {tipo.tipo}
            </option>
          ))}
        </Form.Field>
        <Form.Field
          label="Comentarios"
          control="textarea"
          rows="3"
          onChange={(e) => setComments(e.target.value)}
          value={comments}
        />
        <Button color="black" onClick={() => setOpen(false)}>
          Cancelar
        </Button>
        <Button
          content="Guardar"
          labelPosition="right"
          icon="checkmark"
          type="submit"
          positive
        />
      </Form>
      <Modal
        size="mini"
        open={open2}
        onClose={() => dispatch({ type: "close" })}
      >
        <Modal.Header>{res}</Modal.Header>
        <Modal.Actions>
          <Button positive onClick={handleConfirm}>
            Si
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default Formulario;
