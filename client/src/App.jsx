import { useState, useEffect } from "react";
import { Container, Header, Input, Button } from "semantic-ui-react";
import ModalForm from "./components/ModalForm";
import axios from "axios";
import TableCompanies from "./components/TableCompanies";

function App() {
  const [companies, setCompanies] = useState([]);
  const [open, setOpen] = useState(false);

  const handleGetCompanies = async (name) => {
    const result = name
      ? await axios.get(`http://localhost:5000/empresas/${name}`)
      : await axios.get("http://localhost:5000/empresas/");

    setCompanies(result.data);
  };

  useEffect(() => {
    handleGetCompanies();
  }, []);

  return (
    <Container style={{ marginTop: "25px" }}>
      <Header size="huge" textAlign="center">
        Empresas
      </Header>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ width: '175px' }}></div>
        <Input
          placeholder="Buscar empresa por nombre..."
          size='large'
          style={{ width: '250px' }}
          onChange={(e) => handleGetCompanies(e.target.value)}
        />
        <Button primary onClick={() => setOpen(true)}>
          Agregar empresa
        </Button>
      </div>
      <ModalForm
        handleGetCompanies={handleGetCompanies}
        open={open}
        setOpen={setOpen}
        title="Añadir una nueva empresa"
      />
      {companies.length !== 0 ? (
        <TableCompanies companies={companies} handleGetCompanies={handleGetCompanies} />
      ) : (
        <Header as="h2" textAlign="center" disabled>
          Sin empresas…
        </Header>
      )}
    </Container>
  );
}

export default App;
