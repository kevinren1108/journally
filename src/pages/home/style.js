import styled from "styled-components";

export const HomeWrapper  = styled.div`
  width: 960px;
  margin: 0  auto;
  overflow: hidden;
`;

export const HomeLeft  = styled.div`
  width: 625px;
  padding-top: 30px;
  margin-left: 15px;
  float: left;
`;

export const HomeRight  = styled.div`
  width: 240px;
  float:  right;
  padding-top: 30px;
  margin-left: 15px;
`;

export const  JournalListWrapper  =  styled.div`
  padding: 20px 0 10px  0;
  overflow: hidden;
`;

export const  JournalListItem  =  styled.div`
  padding: 20px 0 10px  0;
  line-height: 32px;
  font-size: 14px;
  margin-top: 10px;
  color: #000;
  border-bottom: 1px solid #dcdcdc;
  border-radius: 4px;
`;

export const JournalListItemTitle = styled.div`
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  cursor: pointer;
`;

export const JournalListItemAbstract = styled.div`
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
`;

export const  TypeWrapper  =  styled.div`
  padding: 20px 0 10px  0;
  overflow: hidden;
  box-sizing: border-box;
  display: block;
  font-size: 20px;
  color: #969696;
`;

export const  TypeItem  =  styled.div`
  padding: 3px 0;
  line-height: 20px;
  color: #000;
  border-bottom: 1px solid #dcdcdc;
`;

export const TypeItemTitle = styled.a`
  padding-top: 3px;
  font-size: 10px;
  display: block;
  color: #333333;
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  margin: 30px 0;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 50px;
  bottom: 20px;
  width: 70px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: px;
`;