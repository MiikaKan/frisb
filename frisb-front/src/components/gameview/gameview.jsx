import React from "react";
import AppBar from "../appbar";
import IconButton from "../shared/iconbutton";
import GameService from "gameService";
import FlexContainer from "../shared/flexContainer";
import ContentContainer from "../shared/contentcontainer";
import ScoreTable from "./scoretable";

export default class GameView extends React.Component {
    constructor() {
        super();

        this.state = {
            gameData: {
                players: [],
            },
        };

        this.handleScoreChanged = this.handleScoreChanged.bind(this);
    }
    componentDidMount() {
        const { course, match } = this.props;

        const gameid = match.params.gameid;

        GameService.loadGames();
        const gameData = GameService.getGameData(gameid);

        GameService.saveGames();

        this.setState({
            gameData: gameData,
        });
    }

    handleScoreChanged(round, player, newValue) {
        console.log("changed", round, player, newValue);
        GameService.setScoreForPlayer(
            this.state.gameData,
            player.id,
            round,
            parseInt(newValue)
        );
        GameService.saveGames();
        console.log(this.state.gameData);
    }

    render() {
        const { players, rounds } = this.state.gameData;

        return (
            <div>
                <AppBar
                    title="Tali"
                    rightIcon={
                        <IconButton
                            icon="plus"
                            onClick={() => this.togglePopup()}
                        />
                    }
                />
                <FlexContainer>
                    <ContentContainer>
                        <ScoreTable
                            players={players}
                            rounds={rounds}
                            handleScoreChanged={this.handleScoreChanged}
                        />
                    </ContentContainer>
                </FlexContainer>
            </div>
        );
    }
}
