import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Main from './common/Main';

const TheLayout = () => {
    return (
        <div>
            {/* ------ */}
            <div>
                <Header />
            </div>
            {/* ------ */}
            <main>
                <Main />
            </main>
            {/* ------ */}
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default TheLayout;