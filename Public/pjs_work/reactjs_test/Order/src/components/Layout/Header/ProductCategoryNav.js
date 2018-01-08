import React from 'react';
import { Link } from 'react-router';

import './ProductCategoryNav.css';

export default function ProductNav() {

    const rowStyle = {
        backgroundColor: '#c96d99'
    };
    const linkStyle = {
        color: 'white',
        fontWeight: 'bold',
        textDecoration: 'none'
    };

    // product categories
    const categories = [
        { text: 'Category 01', href: '/category01' },
        { text: 'Category 02', href: '/category02' },
        { text: 'Category 03', href: '/category03' },
        { text: 'Category 04', href: '/category04' },
        { text: 'Category 05', href: '/category05' }
    ];

    const categoryNav = categories.map((category, index) =>
        <li key={index}>
            <Link to={category.href} style={linkStyle}>{category.text}</Link>
        </li>
    );

    return (
        <nav style={rowStyle}>
            <ul className="product-category-nav">
                {categoryNav}
            </ul>
        </nav>
    );
}