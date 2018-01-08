import React from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'react-flexbox-grid';

import LoadingIndicator from '../components/LoadingIndicator';

export default function (ComposedComponent) {
    class PendingAuthentication extends React.Component {
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
    })(PendingAuthentication);
}