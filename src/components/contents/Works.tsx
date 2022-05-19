import sample2Img from '../../assets/images/sample2.jpg';
import styled from 'styled-components';



export const Works=()=>{

  return(
    <WorksAll id="works">

      <h2  className="category">WORKS</h2>

      <div className="work-card">
        <img src={sample2Img} alt=""/>
        <title>タイトル</title>
      </div>

    </WorksAll>

  );

}

const WorksAll = styled.div`
  max-width: 960px;
  margin: 0 auto;
  height: 50rem;
  
  .category{
    text-align: left;
    font-size: 2rem;
  }
  .work-card{
    background-color: white;
    width: 30rem;
    height: 30em;
    border-radius: 8px;
    img{
      width: 100%;
      height: 20em;
      border-radius: 8px;
    }
  }
`;
