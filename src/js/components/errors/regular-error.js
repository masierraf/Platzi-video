import React from 'react';

const RegularError = (props) => {
    console.log(props.message)
    return (
        <div style={{color:'white'}}>
            <h1>Hubo un problema con el render de un componente</h1>
        </div>
    );
};

export default RegularError;