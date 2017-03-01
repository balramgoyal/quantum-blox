import React from 'react';

import DefaultLayout from '../../layouts/default';

export default function() {
    return (
        <DefaultLayout
            globalCounter={this.props.globalCounter}
        >
            <h1>Hi there</h1>
        </DefaultLayout>
    );
}