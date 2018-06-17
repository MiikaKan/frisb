import React from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";

const IconButton = ({ icon, onClick }) => {
    return (
        <button onClick={() => onClick()}>
            <FontAwesome name={icon} />
        </button>
    );
};

IconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default IconButton;
