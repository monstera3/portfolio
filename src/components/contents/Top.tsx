import styled from 'styled-components';


export const Top=()=>{

  return(
    <TopAll>
      <div className="title">
        <h1>sugimura natsumi <br/>
        portfolio</h1>

      </div>
    </TopAll>

  );

}

const TopAll = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: 50rem;
  display: flex;
  align-items: center;
  .title{
    font-size: 2.2rem;
    line-height: 1.3;
  }
 
  
`;
