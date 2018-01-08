import React from 'react';

import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
    container: {
        position: 'relative',
    },
    refresh: {
        display: 'inline-block',
        position: 'relative',
    },
};

const LoadingIndicator = (props) => (
    <div style={style.container}>
        <RefreshIndicator
            {...props}
            size={30}
            left={0}
            top={0}
            status={props.hidden ? 'hide' : 'loading'}
            style={style.refresh}
        />
    </div>
);

export default LoadingIndicator;