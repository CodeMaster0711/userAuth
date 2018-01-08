import React, { Component } from 'react';


class ErrorIndicator extends Component {
    render() {
        const styles = {
            errorText: {
                color: '#ff0000'
            }
        };
        if (this.props.error) {
            return (<span style={styles.errorText}>{this.props.error.toString()}</span>);
        } else {
            const errors = this.props.errors || [];
            if (errors.length > 0) {
                return (
                    <ul>
                        {errors.map((item, index) => {
                            return <li key={index} style={styles.errorText}>{item.toString()}</li>
                        })}
                    </ul>
                );
            } else {
                return (<span>&nbsp;</span>);
            }
        }
    }
}

export default ErrorIndicator;