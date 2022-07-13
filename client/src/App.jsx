import { Container, Header } from 'semantic-ui-react'
import ModalForm from './components/ModalForm'

function App() {
  return (
    <Container style={{ marginTop: '25px' }}>
      <Header size='huge' textAlign='center'>Empresas</Header>
      <ModalForm />
    </Container>
  )
}

export default App
