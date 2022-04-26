
import styled from 'styled-components';



export const Works=()=>{

  return(
    <WorksAll id="works">
      <div className="work-card">

      </div>
      <h2  className="category">WORKS</h2>


    </WorksAll>

  );

}

const WorksAll = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: 50rem;
  .category{
    text-align: center;
    font-size: 2rem;
  }
`;
