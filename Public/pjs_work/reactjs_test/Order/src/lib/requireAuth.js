import React from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'react-flexbox-grid';

import LoadingIndicator from '../components/common/LoadingIndicator';
// import { loginPage } from '../actions/router.actions';

export default function (ComposedComponent) {
    class Authenticate extends React.Component {
        shouldComponentUpdate(nextProps) {
            if (!nextProps.currentUser.loading && !nextProps.currentUser.loggedIn) {
                // nextProps.dispatch(loginPage(this.props.route.path));
                return false;
            }
            return true;
        }

        render() {
            if (this.props.currentUser.loading) {
                return (
                    <Row center="xs" middle="xs">
                        <Col xs={12}><LoadingIndicator /></Col>
                    </Row>
                );
            } else {
                return (
                    <ComposedComponent {...this.props} />
                );
            }
        }
    }

    return connect((store) => {
        return {
            currentUser: store.currentUser
        };
    })(Authenticate);
}