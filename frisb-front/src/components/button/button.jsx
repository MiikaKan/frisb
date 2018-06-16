import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
    display: block;
    margin: auto;
    width: 100%;
    height: 100px;
`;

export default class Button extends React.Component {
    render() {
        return <StyledButton>{this.props.children}</StyledButton>;
    }
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
};
