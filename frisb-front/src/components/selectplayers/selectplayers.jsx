import React from "react";
import AppBar from "../appbar";
import IconButton from "../shared/iconbutton";
import ContentContainer from "../shared/contentcontainer";
import FlexContainer from "../shared/flexContainer";
import GameService from "gameService";
import SelectPlayerBox from "./selectplayerbox";
import SelectPlayerGrid from "./selectplayergrid";
import PlayerService from "playerService";

export default class SelectPlayers extends React.Component {
    constructor() {
        super();

        this.state = {
            gameData: undefined,
        };
    }
    componentDidMount() {
        const { match } = this.props;
        const gameid = match.params.gameid;
        const gameData = GameService.getGameData(gameid);

        this.setState({
            gameData: gameData,
        });
    }

    handlePlayerBoxClick(player) {
        const gameData = GameService.getGameData(this.state.gameData.gameid);
        gameData.players.push(player);

        this.setState({ gameData: gameData });

        GameService.saveGames();
    }

    render() {
        const { gameData } = this.state;

        return (
            <div>
                <AppBar
                    title="Select players"
                    rightIcon={
                        <IconButton
                            icon="check"
                            onClick={() => this.createGame()}
                        />
                    }
                />
                {gameData && (
                    <ContentContainer>
                        {gameData &&
                            gameData.players.map((el, i) => (
                                <SelectPlayerBox
                                    key={i}
                                    player={el}
                                    visible={true}
                                    onClick={() => this.addPlayer(el)}
                                />
                            ))}
                        <SelectPlayerGrid
                            gameId={this.state.gameData.gameid}
                            handlePlayerClick={p =>
                                this.handlePlayerBoxClick(p)
                            }
                        />
                    </ContentContainer>
                )}
            </div>
        );
    }

    createGame() {
        this.props.history.push("/game/" + this.state.gameData.gameid);
    }
}
