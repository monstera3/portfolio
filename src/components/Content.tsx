import React from 'react';
import styled from 'styled-components';


export const Content = (props: { backgroundColor: string }) => {
  return(
    <Container backgroundColor={props.backgroundColor}>
      <h2>{props.backgroundColor}</h2>
      <p>JavaScriptでスクロールに合わせて背景色のCSSを変更する方法</p>
    </Container>
  );
}


const Container = styled.div<{ backgroundColor: string }>`
  //height: 100%;
  height: 5000px;
  background: ${({backgroundColor}) => backgroundColor};

  h2 {
    position: fixed;
    top: 0;
    padding: 10px;
    color: black;
    font-size: 4rem;
  }
  
`;

