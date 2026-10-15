import { Container, NameText, Progress, UserPicture } from './styles';

type UserInfoProps = {
  nome: string;
  image: string;
  percentual: number;
};

const UserInfo = ({ nome, image, percentual }: UserInfoProps) => {
  return (
    <Container>
      <UserPicture src={image} alt={`Foto de ${nome}`} />
      <div>
        <NameText>{nome}</NameText>
        <Progress
          $percentual={percentual}
          role="progressbar"
          aria-label={`Progresso de ${nome}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percentual}
        />
      </div>
    </Container>
  );
};

export { UserInfo };