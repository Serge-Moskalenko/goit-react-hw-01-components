import PropTypes from 'prop-types';
import { StatisticsStyled } from './Ststistics.styled';

export const Statistics = ({ children }) => {
    return (<StatisticsStyled> { children} </StatisticsStyled>)
}

Statistics.propTypes = {
    children: PropTypes.node.isRequired
}