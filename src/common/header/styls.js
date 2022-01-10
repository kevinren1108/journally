import styled from 'styled-components'
import logoPic from '../../statics/logo.jpg'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
position: absolute;
top: 7px;
left: 0;
display: block;
width: 104px;
height: 44px;
background: url(${logoPic});
background-size: contain;
`

export const Nav = styled.div`
  padding-left: 140px;
  width: 700px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
  float: left;
`

export const NavItem = styled.div`
  line-height: 58px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
    padding-right: 100px;
  }
  &.active{
    color: #ea6f5a;
  }
`
export const  NavSearch =  styled.input.attrs({
  placeholder: 'Search'
})`
  width: 160px;
  height: 38px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 10px;
  margin-left: 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 58px;

`

export const Button = styled.button`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border: 1px solid #ec6149;
  background-color: white;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 60px;
  width: 200px;
  margin-left: 20px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: white;
`

export const SearchInfoTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #787878
`

export const SearchInfoSwitch = styled.div`
 float: right;
 font-size: 13px;
 cursor: pointer;
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  font-size: 12px;
  padding: 0 5px;
  line-height: 20px;
  color: #969696;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-right: 5px;
  margin-bottom: 5px;
`

export const SearchInfoList = styled.div`
 overflow: hidden;
`

