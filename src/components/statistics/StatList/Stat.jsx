import PropTypes from 'prop-types'
import { SpanLabel, StatStyled } from './Stat.styled';

export const Stat = ({ label, percentage, }) => {
    return (<StatStyled  >
        <SpanLabel >{label}</SpanLabel>
        <span>{percentage}%</span>
    </StatStyled>)
};

Stat.propTypes = {
       label: PropTypes.string.isRequired,
       percentage: PropTypes.number.isRequired
}

