import sampleImg from '../../assets/images/sample1.png';
import styled from 'styled-components';



export const Header=()=>{

  return(
    <HeadderAll>
      <img src={sampleImg} alt=""/>
      <ul>
        <li>WORKS</li>
        <li>SKILLS</li>
        <li>PROFILE</li>
      </ul>
    </HeadderAll>

  );

}

const HeadderAll = styled.div`
  display: flex;
  justify-content: space-between;
  img{
    width: 5%;
  }
  ul{
    display: flex;
  }
  
`;
