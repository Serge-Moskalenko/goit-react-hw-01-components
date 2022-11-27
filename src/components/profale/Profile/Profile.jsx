import { StaledProfile } from "./Profalie.staled";
import PropTypes from 'prop-types'

export const Profile = ({ children }) => {

    return (

    
        <StaledProfile>
            {children}
        </StaledProfile>)
};

Profile.propTypes = {
    children: PropTypes.node.isRequired
};