import styled from "@emotion/styled";

export const FriendStyled = styled.li`
display:flex;
margin-top:${p => p.theme.space[4]}px;
background-color:${p => p.theme.colors.grey};
align-items:center;
height: 50px;
width: 200px;
`

export const FriendSpan = styled.span`
margin:${p => p.theme.space[3]}px;
height: 20px;
width: 20px;
background-color:${({ props }) => props === true ? 'green' :'red'};
border-radius: ${p=>p.theme.radii.round};
`

export const FriendP = styled.p`
margin:${p => p.theme.space[3]}px;
color:${p => p.theme.colors.white};
`