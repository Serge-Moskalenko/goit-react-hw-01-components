import PropTypes from 'prop-types'
import { Stat } from "./Stat"
import { StatListStyled } from "./StatList.styled"

export const StatList = ({ item }) => {
    
  return (<StatListStyled  >
    {item.map(i  => (
      
      <Stat
        key={i.id}
        label={i.label}
        percentage={i.percentage}
        style={BackgroundColor}
      />
      
    ))}</StatListStyled>)
}

const BackgroundColor = null;



StatList.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
  ).isRequired 
}

