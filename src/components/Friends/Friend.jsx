import PropTypes from 'prop-types'
export const Friend = ({ avatar, name, status }) => {
    return (
        <li className="item">
            <span className="status">{status}</span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>)
}; 

Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool
}