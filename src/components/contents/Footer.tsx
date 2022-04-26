import sampleImg from '../../assets/images/sample1.png';
import styled from 'styled-components';

export const Footer=()=>{

  return(
    <FooterAll>

        <div className="info">
          <a className="f-logo" href="https://www.google.com"><img src={sampleImg} alt="" /></a>
          <nav className="fnav">
            <ul className="fnav-ul">
              <li className="fnav-li"><a href="https://www.google.com">TOP</a></li>
              <li className="fnav-li"><a href="https://www.google.com">企業情報</a></li>
              <li className="fnav-li"><a href="https://www.google.com">事業内容</a></li>
            </ul>


          </nav>
        </div>
        <div className="copy">
          <p><small>&copy;2022 S Co.,Ltd. All Rights Reserved.</small></p>
        </div>






    </FooterAll>

  );

}

const FooterAll = styled.div`

  .info{
    display: flex;
    justify-content: space-around;
    max-width: 1000px;
    margin: 100px auto;
    .f-logo{
      width: 10%;
    }
  }
  .copy{
    text-align: center;
    margin-top: 15%;
  }
  
  
`;
