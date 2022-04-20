import styled from 'styled-components';



export const Skills=()=>{

  return(
    <SkillsAll>

      <div className="skill-container">
        <h2 className="category">SKILLS</h2>
        <div className="skill-card">
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>
        </div>

      </div>
    </SkillsAll>

  );

}

const SkillsAll = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .skill-container{
    background-color: #F0EFE0;
    width: 80%;
    min-width: 750px;
    height: 80%;
    padding: 30px;
    border-radius: 10px;
    border: 1px solid #dfdfdf;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 9px 9px 19px -11px #777777;
    .category{
      text-align: center;
      font-size: 2rem;
    }
    .skill-card{
      //text-align: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 150px 150px 150px;
      gap: 20px;
      padding-top: 30px;
      height: 400px;
      .item{
        background-color: white;
        text-align: center;
        width: 150px;
        box-shadow: 5px 5px 10px -10px #777777;
      }
    }
  }
`;
