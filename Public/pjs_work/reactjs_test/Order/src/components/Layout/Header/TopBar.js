import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router';

import './TopBar.css';
import ProductSearch from './TopBar/ProductSearch';
import UserNav from './TopBar/UserNav';

export default function TopBar(props) {

    const barStyle = {
        background: '#ee80b2'
    };

    if (props.loggedIn) {
        return (
            <Row between="xs" className="top-bar" style={barStyle}>
                <Col xs={2}>
                    <Link to="/"><header role="banner"><img src={props.logoSrc} alt={props.altTxt} /></header></Link>
                </Col>
                <Col xs={5}>
                    <ProductSearch />
                </Col>
                <Col xs={5}>
                    <UserNav />
                </Col>
            </Row>
        );
    } else {
        return (
            <Row between="xs" className="top-bar" style={barStyle}>
                <Col xs>
                    <Link to="/"><header role="banner"><img src={props.logoSrc} alt={props.altTxt} /></header></Link>
                </Col>
            </Row>
        );
    }
}