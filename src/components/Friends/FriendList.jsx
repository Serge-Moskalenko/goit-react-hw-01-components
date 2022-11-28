import PropTypes from 'prop-types'
import { Friend } from "./Friend"
import { FriendListStyled } from './FriendList.styled';

export const FriendList = ({ item }) => {
    return (<FriendListStyled>{item.map(i => (
        <Friend
            key={i.id}
            avatar={i.avatar}
            name={i.name}
            status={i.isOnline}
        />
    ))}</FriendListStyled>)
};

FriendList.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
}
