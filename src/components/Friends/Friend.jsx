import PropTypes from 'prop-types'
import { FriendP, FriendSpan, FriendStyled } from './Friend.styled';

export const Friend = ({ avatar, name, status }) => {
    return (
        <FriendStyled >
            <FriendSpan props={status}/>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <FriendP>{name}</FriendP>
        </FriendStyled>)
}; 

Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool
}