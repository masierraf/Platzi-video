import React from 'react';
import Logo from '../../../../images/logo.png'
import '../../../css/components/base/related.css'

const Related = (props) => {
    return (
        <div className="Related">
        <img src={Logo} alt="Platzi-video" width={250} />
        </div>
    );
};

export default Related;