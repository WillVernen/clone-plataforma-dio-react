import { Link } from 'react-router-dom';
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    Logo,
    UserPicture
} from './styles';

const Header = ({ autenticado = false }) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <Link to="/" aria-label="Página inicial da DIO">
                    <Logo src={logo} alt='Logo da DIO' />
                </Link>
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu to="/feed">Live Code</Menu>
                        <Menu to="/feed">Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/49912459?v=4' alt="Perfil do usuário" />
                ) : (
                    <>
                        <MenuRight to="/">Home</MenuRight>
                        <Button title='Entrar' as={Link} to="/login" />
                        <Button title='Cadastrar' as={Link} to="/cadastro" />
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }