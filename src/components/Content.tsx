
import styled from 'styled-components';
import { Header } from './contents/Header';
import React from 'react';
import { Top } from './contents/Top';
import { Works } from './contents/Works';


export const Content = (props: { backgroundColor: string }) => {
  return(
    <Container backgroundColor={props.backgroundColor}>
      <Header />
      <Top/>
      <Works/>
      <h2 className="sample">{props.backgroundColor}</h2>
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

