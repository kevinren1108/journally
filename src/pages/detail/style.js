import styled from "styled-components";

export const DetailWrapper  = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0  auto;
  padding-bottom: 100px;
  background: white;
`;

export const DetailHeader = styled.div`
  margin: 50px 0 20px 0;
  line-height: 44px;
  font-size: 34px;
  color: #333;
  font-weight: bold;
`;

export const DetailContent = styled.div`
  color: #2f2f2f;
  img {
    width: 100%;
  }
  p {
    margin: 25px 0;
    color: #2f2f2f;
    font-size: 16px;
    line-height: 30px;
  }
`;
