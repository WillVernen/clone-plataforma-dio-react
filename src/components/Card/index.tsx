import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

import backgroundImage from '../../assets/background-dio.png';
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src={backgroundImage} alt='imagem secundaria' />
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/49912459?v=4' />
                <div>
                    <h4>Will Vernen</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card };