import React, { PropTypes } from 'react';

const Sub = ({text}) => (
    <div>
        <p>{text}</p>
    </div>
);

Sub.propTypes = {
    text: PropTypes.string
};

export default Sub;
