import React, { useEffect, useState } from 'react';
import {createGlobalStyle} from "styled-components";
import { Content } from './components/Content';

export const App = () => {

  const [color,setColor] = useState('#FEFEF2')
  const changeColor = () => {
    const y = window.scrollY;
    if (y < 900) {
      setColor('#FEFEF2');
    } else if (900 <= y && y < 1800) {
      setColor('#F5ECE4');
    } else if (1800 <= y && y < 2700){
      setColor('#E9F0E3');
    }else if (2700 <= y && y < 3600){
      setColor('#F7F1EC');
    }else{
      setColor('#F0EFE0');
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
    font-family: YakuHanJP_Narrow,"Yu Gothic Medium","Yu Gothic",YuGothic,serif;
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

