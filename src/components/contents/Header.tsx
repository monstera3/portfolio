import sampleImg from '../../assets/images/sample1.png';
import styled from 'styled-components';
import AnchorLink from "react-anchor-link-smooth-scroll";


export const Header=()=>{

  return(
    <HeaderAll>
      <img src={sampleImg} alt=""/>
      <ul>
        <li><AnchorLink href="#dog">WORKS</AnchorLink></li>
        <li>SKILLS</li>
        <li>PROFILE</li>
        <li></li>
        <li><AnchorLink href="#cat">B</AnchorLink></li>
      </ul>






    </HeaderAll>

  );

}

const HeaderAll = styled.div`
  display: flex;
  justify-content: space-between;
  padding:2% 3%;
  img{
    width: 50px;
  }
  ul{
    display: flex;
    ;
    li{
      padding-right: 5%;
     
    }
  }
  #dog {
    margin: 30px;
  }
  #cat {
    margin: 30px;
  }
`;
