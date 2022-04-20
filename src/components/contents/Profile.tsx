import styled from 'styled-components';



export const Profile=()=>{

  return(
    <ProfileAll>
      <h2 className="category">PROFILE</h2>

    </ProfileAll>

  );

}

const ProfileAll = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: 50rem;
  .category{
    text-align: center;
    font-size: 2rem;
  }
`;
