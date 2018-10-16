
import styled from 'styled-components';


const StyResImg = styled.img`
width: 500px;
height: 350px;
`;

const StyLeftDiv = styled.div`
padding-top: 10px;
float: left;
width: 50%
padding-left: 36px;
color: rgb(60, 142, 155);
`;

const StyRightDiv = styled.div`
margin-left: 50%;
`;

const StyResNameDiv = styled.div`
font-size: 42px;
`;

const StyRateDiv = styled.div`
margin-top: 15px;
`;

const StyStarsSpan = styled.span`
display: inline-block;
background-image : ${props => `url(${props.img[props.stars]})`};
background-repeat: no-repeat;
background-position: center;
height: 30px;
width: 110px;
right: 4px;
position: relative;
`;

const StyNumRatSpan = styled.span`
position: relative;
bottom: 10px;
margin-left: 5px;
color: rgb(169, 171, 173);
`;

const StyStdDiv = styled.div`
font-size: 18px;
margin-top: 5px;
`;

const StyMapDiv = styled.div`
position: relative;
bottom: 2px;
bottom: 95px;
z-index: 402px;
`;

export default {
  StyResImg,
  StyLeftDiv,
  StyRightDiv,
  StyResNameDiv,
  StyRateDiv,
  StyStarsSpan,
  StyNumRatSpan,
  StyStdDiv,
  StyMapDiv,
};