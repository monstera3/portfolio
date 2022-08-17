import styled from 'styled-components';
import sample2Img from '../../assets/images/sample2.jpg';



export const Profile=()=>{

  return(
    <ProfileAll id="profile">
      <div className="container-box">
        {/*<img src={sample2Img} alt=""/>*/}
        <div className="right-box">
          <h2 className="category">PROFILE</h2>
        </div>

      </div>



    </ProfileAll>

  );

}

const ProfileAll = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .container-box{
    width: 100%;
    min-width: 750px;
    height: 80%;
    padding: 30px;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img{
      width: 300px;
    }
    .right-box{
      background-color: salmon;
      width: 50%;
      height: 400px;
    }
  }
  .category{
    text-align: center;
    font-size: 2rem;
  }
`;
