import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledAppBar = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    height: 100px;
    background-color: #1976d2;
`;

export default class AppBar extends Component {
    render() {
        return <StyledAppBar>{this.props.title}</StyledAppBar>;
    }
}

AppBar.propTypes = {
    title: PropTypes.string,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    leftIconAction: PropTypes.func,
    rightIconAction: PropTypes.func,
};
