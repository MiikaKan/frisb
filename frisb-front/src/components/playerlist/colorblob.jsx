import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Dot = styled.span`
    height: 25px;
    width: 25px;
    background-color: ${props => props.color || "black"};
    border-radius: 50%;
    display: inline-block;
`;

const ColorBlob = props => {
    return <Dot color={props.color} />;
};

ColorBlob.propTypes = {
    color: PropTypes.string,
};

export default ColorBlob;
