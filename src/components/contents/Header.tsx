import sampleImg from '../../assets/images/sample1.png';
import styled from 'styled-components';



export const Header=()=>{

  return(
    <HeaderAll>
      <img src={sampleImg} alt=""/>
      <ul>
        <li>WORKS</li>
        <li>SKILLS</li>
        <li>PROFILE</li>
      </ul>
    </HeaderAll>

  );

}

const HeaderAll = styled.div`
  display: flex;
  justify-content: space-between;
  padding:2%;
  img{
    width: 5%;
  }
  ul{
    display: flex;
  }
  
`;
