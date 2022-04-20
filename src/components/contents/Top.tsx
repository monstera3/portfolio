import styled from 'styled-components';


export const Top=()=>{

  return(
    <TopAll>
      <div className="title">
        <h1>
          <span >sugimura natsumi</span>
          <br/>
          <span>portfolio</span>
        </h1>

        <p className="animate bounce infinite">qqqqqqqqqqqqqq</p>
      </div>
    </TopAll>

  );

}

const TopAll = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: 60rem;
  display: flex;
  align-items: center;
  .title{
    font-size: 2.4rem;
    line-height: 1.3;
    h1{
      animation: name 1s forwards linear ;
    }
  }
  @keyframes name {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
`;


