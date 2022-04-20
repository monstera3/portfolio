import React, { useEffect, useState } from 'react';
import {createGlobalStyle} from "styled-components";
import { Content } from './components/Content';

export const App = () => {

  const [color,setColor] = useState('#FEFEF2')
  const changeColor = () => {
    const y = window.scrollY;
    if (y < 700) {
      setColor('#FEFEF2');
    } else if (700 <= y && y < 1400) {
      setColor('#A8C6CA');
    } else if (1400 <= y && y < 2100){
      setColor('#F5ECE4');
    }else if (2100 <= y && y < 2800){
      setColor('#6495ed');
    }else{
      setColor('#FCE5CE');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeColor)
    return () => window.removeEventListener('scroll', changeColor)
  }, []);

  return(
    <>
      <GlobalStyle />
      <Content backgroundColor={color}/>
    </>
  );
};


const GlobalStyle = createGlobalStyle`
  #root {
    font-family: Vesterbro, Times, serif;
    margin: 0;
    padding: 0;
    color: #091B11;
  }
  #root li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: #091B11;
  }

`;

