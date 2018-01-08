import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';

// css styles
const liStyles = {
    paddingLeft: 25
};
const iconStyles = {
    color: 'white',
    fontSize: 38
};

// create nav list
class UserNav extends Component {
    logout() {
        // this.props.dispatch(logout());
    }

    render() {
        return (
            <nav>
                <ul>
                    <li style={liStyles}><Link to="/myAccount"><FontIcon className="material-icons" style={iconStyles}>person</FontIcon></Link></li>
                    <li style={liStyles}><Link to="/cart"><FontIcon className="material-icons" style={iconStyles}>shopping_cart</FontIcon></Link></li>
                    <li style={liStyles}><Link to="/orders"><FontIcon className="material-icons" style={iconStyles}>work</FontIcon></Link></li>
                    <li style={liStyles}><Link to="/groupOrder"><FontIcon className="material-icons" style={iconStyles}>group_work</FontIcon></Link></li>
                    <li style={liStyles}><Link to="/reports"><FontIcon className="material-icons" style={iconStyles}>poll</FontIcon></Link></li>
                    <li style={liStyles}><Link to="/"><FontIcon onClick={this.logout.bind(this)} className="material-icons" style={iconStyles}>power_settings_new</FontIcon></Link></li>
                </ul>
            </nav>
        );
    }
};
export default connect((store) => {
    return {};
})(UserNav);