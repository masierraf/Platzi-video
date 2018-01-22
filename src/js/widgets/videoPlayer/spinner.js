import React from 'react';
import '../../../css/player/spinner.css'
import Loading from '../../../../images/spinner.gif'

const Spinner = (props) => {
if(!props.active) return null
    return (
        <div className="Spinner">
            <img src={Loading} />
        </div>
    );
};

export default Spinner;