import { StyledDescription, StyledImg, StaledIcon, NameP, Tag, Location } from "./Description.styled";
import PropTypes from 'prop-types'



export const Description = ({ item:{avatar,username,tag,location} }) => {
  return (<StyledDescription>
    <StaledIcon>
      <StyledImg
      src={avatar}
      alt={username}
      />
    </StaledIcon>
      <NameP>{username}</NameP>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
</StyledDescription>)
}
 
Description.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired
};