
import styled from 'styled-components';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import React, { useState } from 'react';
import BP_ProdInfo from '../components/BP_ProdInfo';
import BP_ProdImage from '../components/BP_ProdImage';
import BP_Prod from '../components/BP_Prod';
import BP_SellerInfo from '../components/BP_SellerInfo';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { useEffect } from 'react';
//props : 
const UpdatePage = (props) => {
  //사진등록 추가해야함
  const [ProductTitle, SetProductTitle] = useState('');
  const [ProductPrice, SetProductPrice] = useState(0);
  const [ProductContent, SetProductContent] = useState('');
  const [ProductState, SetProductState] = useState(0);
  const [Temp, SetTemp] = useState('');
  const [img, setImage] = useState(null);
  const navigate = useNavigate();
  const formData = new FormData();

  const [PrivTitle, SetPrivTitle] = useState('이름');
  const [PrivPrice, SetPrivPrice] = useState(1000);
  const [PrivContent, SetPrivContent] = useState('판매중');

  var temp1 = PrivTitle;
  useEffect(() => {
    axios.get('/api/sellupdate').then((res) => {
      //여기에 필요한거 받아오기
    })
  })

  const onChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  }

  const onClick = async () => {

    const config = {
      header: { 'Content-Type': 'multipart/form-data' }
    };


    const fd = new FormData();
    console.log(img)
    fd.append('img', img);
    fd.append('img', img);
    // 서버의 upload API 호출
    console.log(fd);
    axios.post('http://localhost:3000/api/upload', fd, config).then((res) => {

      console.log(res);

      navigate('/', { replace: true });
    });

  };

  const onClickWrite = () => {
    const formData = new FormData();
    formData.append('img', img);
    formData.append('product_title', ProductTitle);
    formData.append('product_price', ProductPrice);
    formData.append('product_content', ProductContent);
    formData.append('product_state', ProductState);

    console.log("Write button clicked!");
    alert("상품이 수정되었습니 다!")
    //console.log(ProdId);
    //navigate('/', { replace: true });
    axios.post('http://localhost:3000/api/sellwrite', formData)
      .then(function (res) {
        console.log(res)
      })
    navigate('/', { replace: true })
  }

  return (
    <Container>
      <NavBar></NavBar>
      <MainContainer>
        <TitleBox>
          <Title>글 수정</Title>
        </TitleBox>
        <SignupTitleBox>
          <SignupTitle>상품 정보 입력</SignupTitle>
        </SignupTitleBox>
        <SignupBox>
          <table>
            <tbody>
              <tr>
                <th>상품이름</th>
                <td>
                  <input
                    type='text'
                    placeholder='상품이름'
                    onChange={(e) => {
                      SetProductTitle(e.target.value)
                      console.log(e.target.value)
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>가격</th>
                <td>
                  <input
                    type='number'
                    placeholder='가격'
                    onChange={(e) => {
                      SetProductPrice(e.target.value)
                      console.log(e.target.value)
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>사진</th>
                <td>
                  <input
                    type='file'
                    display='none'
                    name='file'
                    accept='image/*'
                    onChange={onChange}
                    multiple
                  />
                </td>
              </tr>
              <tr>
                <th>상품 설명</th>
                <td>
                  <input
                    type='text'
                    placeholder='ex) 이상품은 어쩌구'
                    height='100px'
                    onChange={(e) => {
                      SetProductContent(e.target.value)
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>거래상태</th>
                <td>
                  <input
                    type='text'
                    placeholder='ex) 판매중 or 거래완료'
                    height='100px'
                    onChange={(e) => {
                      SetTemp(e.target.value)
                      if (Temp == '거래완료')
                        SetProductState(2)
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </SignupBox>
        <div>
          <SignupBtn onClick={onClickWrite}>글 수정</SignupBtn>
        </div>
      </MainContainer>
    </Container>
  );
}

const Container = styled.div`
  margin: auto;
  min-width: 1000px;
  max-width: 1000px;
  position: relative;
`;

const Header = styled.div`
  height: 42px;
  line-height: 42px;
  background: #fff;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  color: #0d0d0d;
  border-bottom: 1px solid #ebebeb;
`;

const HeaderImg = styled.img`
  font-size: 18px;
  height: 16px;
`;
const MainContainer = styled.div`
  margin: auto 40px;
`;

const TitleBox = styled.div`
  margin-top: 55px;
`;
const Title = styled.div`
  font-size: 21px;
  font-weight: bold;
  text-align: center;
  color: #0d0d0d;
  margin-bottom: 5px;
`;
const SignupTitleBox = styled.div`
  margin-top: 30px;
`;
const SignupTitle = styled.div`
  color: #000;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #000;
`;

const SignupBox = styled.div`
  padding: 15px 20px 20px;
  & table {
    border-spacing: 0;
    border: 0;
    border-collapse: collapse;
    width: 100%;
    height: 100%;
    & tbody {
      margin: 0;
      padding: 0;
      & th {
        height: 15px;
        font-size: 13px;
        text-align: left;
        color: #2c2c2c;
        width: 20%;
        vertical-align: initial;
        line-height: 44px;
      }
      & td {
        padding-bottom: 5px;
        & input {
          width: 100%;
          height: 44px;
          font-size: 13px;
          color: #2c2c2c;
          margin-bottom: 10px;
          border-radius: 2px;
          border: 0.7px solid #dadada;
          padding: 14px;
          box-sizing: border-box;
        }
      }
    }
  }
`;

const SignupBtn = styled.button`
  margin-top: 10px;
  color: #fff;
  background-color: #ff6f61;
  width: 100%;
  height: 45px;
  border-radius: 2px;
  font-size: 14px;
  border: 1px solid #e7e7e7;
  cursor: pointer;
`;

export default UpdatePage;