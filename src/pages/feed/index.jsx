import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighLight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true} />
        <Container>
            <Column $flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column $flex={1}>
                <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                <UserInfo percentual={80} nome='Will Vernen' image='https://avatars.githubusercontent.com/u/49912459?v=4' />
                <UserInfo percentual={27} nome='Will Vernen' image='https://avatars.githubusercontent.com/u/49912459?v=4' />
                <UserInfo percentual={89} nome='Will Vernen' image='https://avatars.githubusercontent.com/u/49912459?v=4' />
                <UserInfo percentual={57} nome='Will Vernen' image='https://avatars.githubusercontent.com/u/49912459?v=4' />
                <UserInfo percentual={12} nome='Will Vernen' image='https://avatars.githubusercontent.com/u/49912459?v=4' />
            </Column>
        </Container>
    </>)
}

export { Feed }