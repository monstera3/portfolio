import styled from 'styled-components';
import htmlImg from '../../assets/images/html-5.svg';
import cssImg from '../../assets/images/css-3.svg'



export const Skills=()=>{

  return(
    <SkillsAll id="skills">

      <div  className="skill-container">
        <h2  className="category">SKILLS</h2>
        <div className="skill-card">
          <div className="item"><img src={htmlImg} alt=""/>HTML5</div>
          <div className="item"><img src={cssImg} alt=""/>CSS3</div>
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
    background-color: #FFF;
    width: 80%;
    min-width: 750px;
    height: 80%;
    padding: 30px;
    border-radius: 8px;
    border: 1px solid #dfdfdf;
    display: flex;
    align-items: center;
    flex-direction: column;
    .category{
      text-align: center;
      font-size: 2rem;
    }
    .skill-card{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 150px 150px 150px;
      gap: 20px;
      padding-top: 30px;
      height: 400px;
      .item{
        background-color: white;
        border: #5c93bb2b 1px solid;
        border-radius: 8px;
        text-align: center;
        width: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        img{
          width: 50px;
        }
      }
    }
  }
`;
