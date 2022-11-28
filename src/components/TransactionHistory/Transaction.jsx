import PropTypes from 'prop-types'
export const Transaction = ({ currency, amount, type }) => {
    return (
            <tr>
                <td>{type}</td>
                <td >{amount}</td>
                <td>{currency}</td>
        </tr>
    )
};

Transaction.propTypes = {
    currency: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};