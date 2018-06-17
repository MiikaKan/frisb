import React, { Fragment } from "react";
import styled from "styled-components";
import MenuButton from "./menubutton";
import FlexContainer from "components/shared/flexContainer";
import AppBar from "components/appbar";

const MainMenuFlexContainer = FlexContainer.extend`
    flex-flow: row wrap;
    height: 100vh;
`;

const MainMenuFlexSubContainer = styled.div`
    min-width: 60%;
`;

const MainMenu = () => {
    return (
        <Fragment>
            <AppBar title="Main menu" />
            <MainMenuFlexContainer>
                <MainMenuFlexSubContainer>
                    <MenuButton to="/courses">New game</MenuButton>
                    <MenuButton to="/games">Games</MenuButton>
                    <MenuButton to="/groups">Groups</MenuButton>
                    <MenuButton to="/courses">Courses</MenuButton>
                    <MenuButton to="/players">Players</MenuButton>
                </MainMenuFlexSubContainer>
            </MainMenuFlexContainer>
        </Fragment>
    );
};

export default MainMenu;
