import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body{
    background: rgb(124, 213, 255);
    font-family: 'IBM Plex Sans', sans-serif;
  }
`;

const StyBackgroundDiv = styled.div`
margin: auto;
margin-top: 100px;
margin-bottom: 250px;
padding: 25px;
background: #FEF0F5;
height: 700px;
width: 75%;
min-width: 1500px;
z-index: 400px;
box-shadow: 5px 7px rgb(113, 197, 237);
`;

const StyHeaderDiv = styled.div`
padding-left: 36px;
padding-right: 36px;
top: 0px;
right: 0px;
left: 0px;
z-index: 401px;
display: block;
min-height: 60px;
margin-bottom: 10px;
`;

const StyRightImg = styled.div`
position: relative;
height: 400px;
width: 400px;
float: right;
left: 61px;
bottom: 25px;
background-image: url('https://puu.sh/BLyf6/a6ccb9ab2f.jpg');
background-repeat: no-repeat;
background-position: center top; 
background-size: 400px;
z-index: 500px;
`;

const StyNameSpan = styled.span`
font-size: 40px;
`;

const StyNameA = styled.a`
text-decoration: none;
color: rgb(60, 142, 155);
`;

export default {
  StyBackgroundDiv,
  StyHeaderDiv,
  StyRightImg,
  StyNameSpan,
  StyNameA,
};