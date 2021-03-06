
import styled from 'styled-components';
import { Header } from './contents/Header';
import React from 'react';
import { Top } from './contents/Top';
import { Works } from './contents/Works';
import { Skills } from './contents/Skills';
import { Profile } from './contents/Profile';
import { Footer } from './contents/Footer';


export const Content = (props: { backgroundColor: string }) => {
  return(
    <Container backgroundColor={props.backgroundColor}>
      <Header />
      <Top/>
      <Works/>
      <Skills/>
      <Profile/>
      <Footer />
    </Container>
  );
}


const Container = styled.div<{ backgroundColor: string }>`
  transition: 2s;
  height: 5000px;
  background: ${({backgroundColor}) => backgroundColor};

  .sample {
    //position: fixed;
    top: 0;
    padding: 10px;
  }
  
`;

