import PropTypes from 'prop-types'
import { Friend } from "./Friend"

export const FriendList = ({ item }) => {
    return (<ul>{item.map(i => (
        <Friend
            key={i.id}
            avatar={i.avatar}
            name={i.name}
            status={i.isOnlane}
        />
    ))}</ul>)
};

FriendList.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
}
