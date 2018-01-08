import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import './Layout.css';

class Layout extends Component {
    render() {
        // static vars to illustrate what will need to be dynamic
        const clientSettings = {
            logoSrc: '/images/taco-cabana-logo.png',
            altTxt: 'Taco Cabana Print Order Management System'
        };

        return (
            <main role="main">
                <Grid fluid className="grid">
                    <Header clientSettings={clientSettings} />
                    <section className="main-content">
                        <Row center="xs">
                            <Col xs={12}>
                                {this.props.children}
                            </Col>
                        </Row>
                    </section>
                    <section className="footer">
                        <Row center="xs">
                            <Col xs={12}>
                                <Footer />
                            </Col>
                        </Row>
                    </section>
                </Grid>
            </main>
        );
    }
}

injectTapEventPlugin();
export default Layout;
