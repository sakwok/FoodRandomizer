import styled from 'styled-components';

const StyLeftDiv = styled.div`
padding-top: 10px;
float: left;
width: 40%
`;

const StyImgDiv = styled.div`
margin-top: 50px;
`;

const StyRightDiv = styled.div`
margin-left: 40%;
`;

const StyTitleDiv = styled.div`
position: absolute;
font-size: 56px;
color: rgb(60, 142, 155);
width: 1000px;
z-index: 402;
`;

const StyInfoDiv = styled.div`
position: relative;
top: 250px;
`;

const StyLocationBarDiv = styled.div`
font-size: 14px;
`;

const StyLocInput = styled.input`
position: absolute;
width: 400px;
box-sizing: border-box;
border: 2px solid rgb(60, 142, 155);
border-radius: 8px;
font-size: 16px;
background-color: white;
margin-top: 5px;
padding: 12px 20px 12px 10px;
z-index: 403;
&:focus {
  transition: width 0.4s ease-in-out;
  width: 540px;
}
`;

const StyCatDiv = styled.div`
position: relative;
top: 80px;
`;

const StyButtonDiv = styled.div`
position: relative;
top: 160px;
`;

const StyDonutDiv = styled.div`
position: absolute;
left: 420px;
border: 0px;
background-position: center;
`;

const StyDonutImg = styled.img`
position: relative;
bottom: 193px;
border: 1 px #FBCEDD;
background-image: url(https://puu.sh/BLyrl/5d5dfbbf18.png);
background-position: center;
background-size: cover;
width: 500px;
height: 375px;
`;

const StyHunBut = styled.input`
margin: 10px;
font-size: 20px;
font-family: "Arial Black", Gadget, sans-serif;
padding: 15px;
text-align: center;
text-transform: uppercase;
transition: 0.5s;
background-size: 200% auto;
color: #FFF;
box-shadow: 0 0 20px #eee;
border-radius: 10px;
width: 300px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
cursor: pointer;
display: inline-block;
border-radius: 25px;
background-image: linear-gradient(to right, #009999 0%, #ccffff 100%);
margin-left: 5%;
margin-top: 10px;
&:hover {
  background-position: right-center;
}
`;



export default {
  StyLeftDiv,
  StyImgDiv,
  StyRightDiv,
  StyTitleDiv,
  StyInfoDiv,
  StyLocationBarDiv,
  StyCatDiv,
  StyLocInput,
  StyButtonDiv,
  StyHunBut,
  StyDonutDiv,
  StyDonutImg,
};