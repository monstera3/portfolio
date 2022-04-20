import sampleImg from "../assets/images/sample1.png";
import styled from 'styled-components';



export const Header=()=>{

  return(
    <HeaderTop>
      <img src={sampleImg} alt=""/>
      <ul>
        <li>WORKS</li>
        <li>SKILLS</li>
        <li>PROFILE</li>
      </ul>
    </HeaderTop>

  );

}

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  img{
    width: 5%;
  }
  ul{
    display: flex;
  }
  
`;
