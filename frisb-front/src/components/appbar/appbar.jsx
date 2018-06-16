import React, { Component } from "react";
import styled from "styled-components";

const StyledAppBar = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    height: 35px;
    background-color: #1976d2;
`;

export default class AppBar extends Component {
    render() {
        return <StyledAppBar>App bar yo</StyledAppBar>;
    }
}
