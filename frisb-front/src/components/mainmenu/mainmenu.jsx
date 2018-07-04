import React, { Fragment } from "react";
import styled from "styled-components";
import MenuButton from "./menubutton";
import FlexContainer from "components/shared/flexContainer";
import AppBar from "components/appbar";
import GameService from "gameService";

const MainMenuFlexContainer = FlexContainer.extend`
    flex-flow: row wrap;
    height: 100vh;
`;

const MainMenuFlexSubContainer = styled.div`
    min-width: 60%;
`;

class MainMenu extends React.Component {
    constructor() {
        super();

        this.state = {
            pathToGame: undefined,
        };
    }

    componentDidMount() {
        GameService.loadGames();
        const unFinishedGame = GameService.getLastUnfinished();
        const pathToGame = unFinishedGame
            ? "/game/" + unFinishedGame.gameid
            : undefined;

        this.setState({ pathToGame: pathToGame });
    }

    render() {
        return (
            <Fragment>
                <AppBar title="Main menu" />
                <MainMenuFlexContainer>
                    <MainMenuFlexSubContainer>
                        {this.state.pathToGame && (
                            <MenuButton to={this.state.pathToGame}>
                                Continue
                            </MenuButton>
                        )}
                        <MenuButton to="/newgame">New game</MenuButton>
                        <MenuButton to="/games">Games</MenuButton>
                        <MenuButton to="/courses">Courses</MenuButton>
                        <MenuButton to="/players">Players</MenuButton>
                    </MainMenuFlexSubContainer>
                </MainMenuFlexContainer>
            </Fragment>
        );
    }
}

export default MainMenu;
