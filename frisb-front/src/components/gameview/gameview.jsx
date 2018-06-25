import React from "react";
import AppBar from "../appbar";
import IconButton from "../shared/iconbutton";
import GameService from "gameService";

export default class GameView extends React.Component {
    constructor(props) {
        super(props);

        const { course, match } = this.props;

        console.log(this.props);
        const gameid = match.params.gameid;

        const gameData = GameService.getGameData(gameid);
        console.log(gameData);

        GameService.saveGames();
        console.log(GameService.games);

        this.state = {
            course: course,
        };
    }

    render() {
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
                <div>Game view</div>
            </div>
        );
    }
}
