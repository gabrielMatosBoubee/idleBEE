import React from 'react';
import Header from './Header';

function Layout({children}: any) {
    return (
        <div style={{position: 'relative'}}>
        <Header />
            {children}
        </div>
    );
}

export default Layout;