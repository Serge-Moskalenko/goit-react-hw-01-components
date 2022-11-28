import styled from "@emotion/styled";

export const StatStyled = styled.li`
margin:${p => p.theme.space[0]};
padding:${p => p.theme.space[2]}px;
display:flex;
flex-direction:column;
align-items:center;
background-color:${({ props }) => props = `#${Math.floor(Math.random() * 16777215).toString(16)}`};

`

export const SpanLabel = styled.span`
margin:${p => p.theme.space[2]}px;
`
