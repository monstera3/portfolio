
import styled from 'styled-components';



export const Works=()=>{

  return(
    <WorksAll>
      <div className="work-card">

      </div>
      <h2 id="dog" className="category">WORKS</h2>

      <section id="cat">
      <span role="img" aria-label="cat">
        🐱
      </span>
      </section>

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
