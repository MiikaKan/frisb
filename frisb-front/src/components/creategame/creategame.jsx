import React from "react";
import AppBar from "../appbar";
import IconButton from "../shared/iconbutton";
import ContentContainer from "../shared/contentcontainer";
import FlexContainer from "../shared/flexContainer";
import GameService from "gameService";

export default class CreateGame extends React.Component {
    componentDidMount() {
        GameService.loadGames();
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Create game"
                    rightIcon={
                        <IconButton
                            icon="check"
                            onClick={() => this.createGame()}
                        />
                    }
                />

                <ContentContainer>
                    <label htmlFor="rounds">Rounds</label>
                    <input
                        name="rounds"
                        type="number"
                        value="18"
                        onChange={newVal => console.log(newVal)}
                    />
                </ContentContainer>
            </div>
        );
    }

    createGame() {
        const gameData = GameService.getGameData(null);
        this.props.history.push("/selectplayers/" + gameData.gameid);
    }
}
