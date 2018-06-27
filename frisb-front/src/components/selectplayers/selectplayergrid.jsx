import React from "react";
import styled from "styled-components";
import PlayerService from "playerService";
import GameService from "gameService";

const Grid = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 100%;
`;

const GridItem = styled.button`
    width: 33.33333%;
    height: 100px;
    background-color: ${props => props.color || "lightblue"};
    display: flex;
`;

const GridItemText = styled.p`
    margin: auto;
`;

export default class SelectPlayerGrid extends React.Component {
    render() {
        const { handlePlayerClick, gameId } = this.props;
        const gameData = GameService.getGameData(gameId);
        const players = PlayerService.players;

        return (
            <Grid>
                <GridItem color="darkgrey">
                    <GridItemText>New player</GridItemText>
                </GridItem>
                {players &&
                    players.map(
                        (el, i) =>
                            gameData.players.every(p => {
                                return p.id !== el.id;
                            }) && (
                                <GridItem key={i} color={el.color || "lightblue"} onClick={() => handlePlayerClick(el)}>
                                    <GridItemText>{el.name}</GridItemText>
                                </GridItem>
                            )
                    )}
            </Grid>
        );
    }
}
