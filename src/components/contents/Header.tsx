import sampleImg from '../../assets/images/sample1.png';
import styled from 'styled-components';
import AnchorLink from "react-anchor-link-smooth-scroll";


export const Header=()=>{

  return(
    <HeaderAll>
      <img src={sampleImg} alt=""/>
      <ul>
        <li><AnchorLink href="#works">WORKS</AnchorLink></li>
        <li><AnchorLink href="#skills">SKILLS</AnchorLink></li>
        <li><AnchorLink href="#profile">PROFILE</AnchorLink></li>
      </ul>






    </HeaderAll>

  );

}

const HeaderAll = styled.div`
  display: flex;
  justify-content: space-between;
  padding:2% 0%;
  max-width: 960px;
  margin: 0 auto;
  img{
    width: 50px;
  }
  ul{
    display: flex;
    ;
    li{
      padding-left: 50px;
     
    }
  }
  #dog {
    //margin: 30px;
  }
  #cat {
    //margin: 30px;
  }
`;
