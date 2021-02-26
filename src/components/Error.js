import React from 'react';
import PropTypes from 'prop-types';

const Error = ({mensaje}) => {
    return ( 
        <p className="red darken-4 error">{mensaje}</p>
     );
}
 
export default Error;

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}