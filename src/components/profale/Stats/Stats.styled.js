import styled from "@emotion/styled";

export const StatList = styled.ul`
margin:${p => p.theme.space[0]};
padding:${p => p.theme.space[0]};
background-color:${p => p.theme.colors.white};
width:19%;
height:19%;
margin: auto;
list-style: none;
display:flex;


`
export const Item = styled.li`
margin:${p => p.theme.space[0]};
padding:${p => p.theme.space[5]}px;
padding-left:30px;
color:${p => p.theme.colors.grey};
font-size:${p => p.theme.fontSizis.normal};
display:flex;
flex-direction:column;
border-bottom-radius:4px;
border: ${p => p.theme.space[1]}px solid #818892;
border-right:none;
&:last-child {
        border-right: ${p => p.theme.space[1]}px solid #818892;
    }
`