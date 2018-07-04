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
        const { match } = this.props;

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
        const newValueInt = parseInt(newValue, 10);

        if (isNaN(newValueInt)) return;

        const gameData = GameService.setScoreForPlayer(
            this.state.gameData.gameid,
            player.id,
            round,
            newValueInt
        );
        GameService.saveGames();

        this.setState({
            gameData: gameData,
        });

        console.log(this.state.gameData);
    }

    finishGame() {
        GameService.finishGame(this.state.gameData.gameid);
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Tali"
                    rightIcon={
                        <IconButton
                            icon="check"
                            onClick={() => this.finishGame()}
                        />
                    }
                />
                <FlexContainer>
                    <ContentContainer>
                        <ScoreTable
                            game={this.state.gameData}
                            handleScoreChanged={this.handleScoreChanged}
                        />
                    </ContentContainer>
                </FlexContainer>
            </div>
        );
    }
}
