import styled from "@emotion/styled";

export const StyledDescription = styled.div`
padding:${p => p.theme.space[0]};
background-color:${p => p.theme.colors.white};
display:flex;
width:19%;
height:19%;
margin: auto;
flex-direction:column;
align-items:center;
`

export const StyledImg = styled.img`
display: block;
  height: 90%;
  width: 90%;
object-fit: cover;
` 

export const StaledIcon = styled.div`
width: 150px;
height: 150px;
background-color:#5B8FCD;
border-radius: ${p=>p.theme.radii.round};
display:flex;
justify-content:center;
`
export const NameP = styled.p`
font-size:${p => p.theme.fontSizis.big};
font-weight:${p => p.theme.fontWeights.larg};
`;

export const Tag = styled.p`
margin:${p => p.theme.space[0]};
padding:${p => p.theme.space[0]};
color:${p => p.theme.colors.grey};
font-size:${p => p.theme.fontSizis.normal};
`
export const Location = styled.p`
color:${p => p.theme.colors.grey};
font-size:${p => p.theme.fontSizis.normal};
`

