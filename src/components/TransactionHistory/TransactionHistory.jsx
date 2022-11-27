import PropTypes from 'prop-types'
import { Transaction } from "./Transaction"

export const TransactionHistory = ({ item }) => {
    return (
        <table className="transaction-history" >
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            
                {item.map(i => (
                    <Transaction
                        key={i.id}
                        type={i.type}
                        currency={i.currency}
                        amount={i.amount}
                    />
                ))}
            </thead>
        </table>
    );
};

TransactionHistory.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};