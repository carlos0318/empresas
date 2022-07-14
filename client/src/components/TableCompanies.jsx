import React, { useState } from "react";
import { Button, Table } from "semantic-ui-react";
import Confirm from "./Confirm";
import ModalForm from "./ModalForm";
import { dateFormat } from "../utils/dateFormat";

const TableCompanies = ({ companies, handleGetCompanies }) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [id, setId] = useState(null);

  const handleDeleteCompany = (id) => {
    setOpen2(true);
    setId(id);
  };

  const handleUpdateCompany = (id) => {
    setOpen(true);
    setId(id);
  };

  return (
    <>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Tipo de empresa</Table.HeaderCell>
            <Table.HeaderCell>Fecha de constitución</Table.HeaderCell>
            <Table.HeaderCell>Acciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {companies.map((company) => (
            <Table.Row key={company.id}>
              <Table.Cell>{company.nombre}</Table.Cell>
              <Table.Cell>{company.tipo}</Table.Cell>
              <Table.Cell>{dateFormat(company.fechaConstitucion)}</Table.Cell>
              <Table.Cell
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <Button icon color="green" onClick={() => handleUpdateCompany(company.id)}>
                  Editar
                </Button>
                <Button
                  icon
                  color="red"
                  onClick={() => handleDeleteCompany(company.id)}
                >
                  Eliminar
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <ModalForm
        open={open}
        setOpen={setOpen}
        handleGetCompanies={handleGetCompanies}
        title="Editar Empresa"
        id={id}
      />
      <Confirm
        open={open2}
        setOpen={setOpen2}
        id={id}
        handleGetCompanies={handleGetCompanies}
      />
    </>
  );
};

export default TableCompanies;
