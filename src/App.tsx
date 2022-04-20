import React, { useEffect, useState } from 'react';
import {createGlobalStyle} from "styled-components";
import { Content } from './components/Content';

export const App = () => {

  const [color,setColor] = useState('#FF4081')
  const changeColor = () => {
    const y = window.scrollY;
    if (y < 500) {
      setColor('#FF4081');
    } else if (500 <= y && y < 1000) {
      setColor('red');
    } else {
      setColor('green');
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
    
    margin: 0;
    padding: 0;
    transition: 3s;
  }
  #root li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: #666;
  }
  img{
    width: 100%;
  }

`;

