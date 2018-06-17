import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";
import { withRouter } from "react-router";
import IconButton from "../shared/iconbutton";

const StyledAppBar = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    height: 100px;
    background-color: #1976d2;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CenteredDiv = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
`;

const AlignLeftDiv = styled.div`
    margin-right: auto;
`;

const AlignRightDiv = styled.div`
    margin-left: auto;
`;

const AppBar = props => {
    console.log(props.history);
    return (
        <StyledAppBar>
            {props.history.location.pathname !== "/" ? (
                <AlignLeftDiv>{<IconButton icon="arrow-left" onClick={() => props.history.goBack()} />}</AlignLeftDiv>
            ) : (
                <AlignLeftDiv>{<FontAwesome name="rocket" />}</AlignLeftDiv>
            )}

            <CenteredDiv>{props.title}</CenteredDiv>
            <AlignRightDiv>{props.rightIcon}</AlignRightDiv>
        </StyledAppBar>
    );
};

export default withRouter(AppBar);

AppBar.propTypes = {
    title: PropTypes.string,
    rightIcon: PropTypes.node,
    rightIconAction: PropTypes.func,
};
