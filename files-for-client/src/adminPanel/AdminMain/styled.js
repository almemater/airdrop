import {styled, createGlobalStyle} from "styled-components"

export const PageGlobal = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
.custom-btn{
    padding: .69rem 1rem;
    font-family: 'Switzer-V-SemiBold';
    text-transform: capitalize;
}
p,.custom-btn{
    font-size: 1rem;
}
p{
    color: rgba(255, 254, 249, 0.50); 
}

footer{
    padding: 2.5rem 0;

    * {
        color: var(--theme-white-primary);
        font-size: 1rem; 
    }

    & ul {
        list-style: none;
        display: flex;
        justify-content: end;
        gap: 1rem;
        padding-left: 0;

        & li{
            margin-bottom: 0%!important;
        }
    }
    @media screen and (max-width: 768px){
        & ul {
            justify-content: center;
        }
    }
}

`;

export const Header= styled.header`
position: fixed;
left: 0;
top: 0;
width: 100%;
z-index: 9999;
padding:1.63rem 0;
transition: 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

&.header-active {
    background-image: linear-gradient(180deg, #72053d 2%, #0000 100%);
    /* box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.16); */
    padding: 0.5rem 0;

    * {
        color: var(--theme-white-primary);
    }
}   

@media screen and (max-width: 768px){

    padding: 1rem 0;

 & .custom-btn{
    width: auto;
 }    
}

`;

export const UserSettingBarWrap = styled.ul`
list-style: none;
padding-left: 0;
display: flex;
align-items: center;
justify-content: end;
gap: 1.5rem;

& li{
    margin-bottom: 0!important;
}

& button{
background-color: #fff0;
border:0;
display: block;

}

& .user-drop-down-btn{
    position: relative;
    display: flex;
    align-items: center;
    gap: .75rem;
    padding-right:1.45rem;
    &:after{
        content: "";
        position: absolute;
        width: 0.75rem;
        height: 0.75rem;
        background: url(${require("../../assets/images/arrow-bottom-white-icon.svg").default}) center/contain no-repeat;
        top: 50%;
        right: 0;
        transform: translate(0,-50%);
    }
}

`;


export const UserPointsSection=styled.section`
 background: url(${require("../../assets/images/noise-and-texture-bg.png")})
            center/cover no-repeat,
        url(${require("../../assets/images/vivid-blurred-colorful-bg.png")})
            center/cover no-repeat;
    background-blend-mode: multiply;
    position:relative;
    z-index:6;
    

&:after{
    content:'';
    width:100%;
    height: 38%;
    background-color: var(--theme-black-primary);
    position:absolute;
    bottom:0;
    left:0;
    z-index: -1;
}
`;
export const UserPointsWrap=styled.div`
    padding-top:8rem;
    `;
export const UserPointsCounterWrap=styled.div`
border-radius: 1.25rem;
border: 1.5px solid rgba(255, 255, 255, 0.04); 
background: rgba(11, 11, 11, 0.80) url(${require("../../assets/images/blur-purple-elem-image.png")}) calc(100% + 5rem) 40%/auto no-repeat; 
backdrop-filter: blur(40px);
--webkit-backdrop-filter: blur(40px);
padding:2rem;
position:relative;
z-index:6;
height: 100%;
display: flex;
align-items: center;

&:after, &:before{
    content:"";
    position:absolute;
    z-index: -1;
}
&:after{ 
    background: url(${require("../../assets/images/bg-glass-ring-elem.png")}) center/contain no-repeat;
    left: 50%;
    top: 2rem;
    width: 4rem;
    height: 4rem;
    rotate: 145deg;
    translate: -50%;

}

&:before{
    background: url(${require("../../assets/images/bg-glass-spring-elem.png")}) center/contain no-repeat;
    left: 60%;
    bottom: 1.5rem;
    width: 3rem;
    height: 3rem;
    rotate: 52deg;
    translate: -50%;
    filter: blur(2px);
}
 
@media screen and (max-width: 768px) {
&:after{
    left: 90%;
    top: 1rem;
}
}

`;
export const CounterCard=styled.div`
padding: 1.5rem 2.5rem;
display:flex;
flex-direction: column;
gap: 2rem;
border-radius: 0.625rem;
border: 1px solid rgba(255, 255, 255, 0.04); 
background: linear-gradient(90deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.12) 49.9%, rgba(255, 255, 255, 0.02) 100%); 
backdrop-filter: blur(2px);
max-width:17rem;
text-align: center;

& p{
    text-transform: uppercase; 
    color: var(--theme-white);
}
`;
export const Counter=styled.div`
  font-family: "Open Sans", sans-serif!important;
  font-weight:600;
`;
export const DiscountPill=styled.div`
border-radius: 6.25rem;
background: rgba(202, 244, 179, 0.08);
padding-right:.62rem;
display: flex;
align-items: center;
gap:.25rem;
width: max-content; 
color:${(props)=> props.discountup === "true" ? "#14CB00" : "var(--theme-white)"};

font-family:"Open Sans", sans-serif!important;
font-weight: ${(props)=> props.points === "true" ? 600: 400};

&:before{
    content:'';
    background: url(
        ${(props)=> 
        props.discountup === "true" 
        ? require("../../assets/images/green-fill-arrow-circle-icon.svg").default 
        : props.points === "true"
        ? require("../../assets/images/point-icon.svg").default 
        :"" 

         
        }
        ) center/auto no-repeat;
    width: 1.5rem;
height: 1.5rem;
display: inline-block;
position: relative;
}


`;

export const ReferAndEarnCard =styled.div`
text-align: center;
padding: 1.75rem 2.44rem;
border-radius: 1rem;
border: 1px solid #FFF;
background: conic-gradient(from 127deg at 50.42% 51.28%, #C0D7F3 39.906227588653564deg, #B6D0F7 73.67929995059967deg, #EEF4E1 118.94376039505005deg, #E2C1F9 155.6249964237213deg, #BFD1F9 209.30935621261597deg, #FAFCFE 252.6490044593811deg, #BAE4E2 316.5242886543274deg, #8C6BE3 358.05930376052856deg);
height: 100%;
 

& img{
    margin-bottom:1.19rem;
}
& p{
    margin-bottom: 1.25rem; 
}

`;

export const ActivitySection= styled.section``;
export const ActivityWrap= styled.div`
margin-top:1.5rem;
padding: 2.5rem;
border-radius: 1.25rem;
border: 1.5px solid rgba(255, 255, 255, 0.04); 
background: rgba(11, 11, 11, 0.80); 
backdrop-filter: blur(40px);


& h5{
    font-family: 'Dharma-GE-SemiBold';
}

`;
export const ActivityCard= styled.div`
padding: 1.5rem; 
border-radius: 1.25rem;
border: 2px solid   #6CA0E300;

background: var(--Linear, linear-gradient(180deg, #151515 0%, #0B0B0B 100%));
height: 100%;

display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    border: 2px solid   #6CA0E3;
}


& .info{
    margin-left: .38rem;
    cursor:pointer;
    position: relative;
    display: inline-block;
    line-height: 1.125rem;

    &:before{
        content: attr(data-info);
        position: absolute;
        bottom: 1.425rem;
        left:50%; 
        translate: -50%;
        font-size: 0.75rem;
        font-family:"Open Sans", sans-serif!important;
        padding: 0.375rem 0.75rem;
        border-radius: 0.375rem;
        background-color: var(--theme-white);
        color: var(--theme-black-primary);
        line-height:130%;
        width: max-content;
        text-align: center;
        max-width: 13rem;
        scale: 0;
        transform-origin: bottom center;
        pointer-events: none;
    }

    &:hover:before{
        scale:1;
    }
}

& .item-img{
    border-radius: 1.25rem;
border: 1px solid #ffffff14;
background: rgba(255, 255, 255, 0.04);
width: 3.75rem;
height: 3.75rem;
    margin-bottom: 1.5rem; 
    padding: .88rem;

    & img{
        object-fit: contain;
        height:100%;
        width:100%;
    }
}

& h6{
    font-size: 2.25rem;
text-transform: capitalize;
margin-bottom: 2.5rem;
font-family:"Dharma-GE-SemiBold";
}


@media screen and (max-width: 768px){
    text-align: center;

    & .item-img{
        margin: 0 auto 1.5rem auto;
    }
    & h6{
        font-size: 1.5rem;
    }
}



`;

export const CtaImageContentCard= styled.div`
padding: 1.5rem;
border-radius: 1.25rem;
border: 1.5px solid #6e6e6e;
background: var(--Linear, linear-gradient(180deg, #151515 0%, #0B0B0B 100%));

& .item-img  {
    width: 17rem;
height: 17rem;

& img{
height:100%;
width:100%;
object-fit:cover;
border-radius: 0.625rem;
}
}

& h5{
    text-transform: capitalize;
}

@media screen and (max-width: 768px){
    & .item-img  {
        width:100%;
    }
}

`;