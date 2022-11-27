import { StatList, Item } from "components/profale/Stats/Stats.styled";
import PropTypes from 'prop-types'

export const Stats = ({ item :{stats:{followers,views,likes}}}) => {
    return (
        <StatList>
            <Item>
                <span className="label">Followers</span>
                <span className="quantity">{followers}</span>
            </Item>
            <Item>
                <span className="label">Views</span>
                <span className="quantity">{views}</span>
            </Item>
            <Item>
                <span className="label">Likes</span>
                <span className="quantity">{likes}</span>
            </Item>
        </StatList>
    );
}

Stats.propTypes = {
    item: PropTypes.shape({
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired
        }).isRequired
    }).isRequired
}