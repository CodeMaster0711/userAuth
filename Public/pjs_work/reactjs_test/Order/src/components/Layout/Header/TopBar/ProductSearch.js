import React from 'react';
import TextField from 'material-ui/TextField';
import './ProductSearch.css';

export default function ProductSearch() {

    const formStyle = {
        marginTop: 12,
        marginRight: 20,
        marginLeft: 20
    };
    const inputStyle = {
        paddingTop: 5,
        paddingLeft: 10,

        height: 45,
        width: 400,

        border: 'none',
        backgroundColor: 'white'
    };

    return (
        <form className="product-search-form" style={formStyle}>
            <TextField
                hintText="Search Products..."
                style={inputStyle}
            />
        </form>
    )
}