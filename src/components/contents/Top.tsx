import styled from 'styled-components';


export const Top=()=>{

  return(
    <TopAll>
      <div className="title">
        <h1 className="text-pop-up-top">
          <span >sugimura natsumi</span>
          <br/>
          <span >portfolio</span>
        </h1>

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
    font-size: 2rem;
    line-height: 1.3;
    h1{
      animation: text-pop-up-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    p{
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
  @keyframes text-pop-up-top {
    0% {
      transform: translateY(0);
      transform-origin: 50% 50%;
      text-shadow: none;
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(-50px);
      transform-origin: 50% 50%;
    }
  }
  
`;


