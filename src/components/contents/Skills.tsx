import styled from 'styled-components';



export const Skills=()=>{

  return(
    <SkillsAll>
      <h2 className="category">SKILLS</h2>

    </SkillsAll>

  );

}

const SkillsAll = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: 50rem;
  .category{
    text-align: center;
    font-size: 2rem;
  }
`;
