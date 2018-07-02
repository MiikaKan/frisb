import React, { Component } from "react";
import MainMenu from "components/mainmenu";
import { Route, Switch } from "react-router";
import PlayerList from "./playerlist/playerlist";
import GameView from "./gameview/gameview";
import CreateGame from "./creategame";
import SelectPlayers from "./selectplayers/selectplayers";
import PlayerService from "playerService";
import GameService from "gameService";

class App extends Component {
    componentDidMount() {
        const players = PlayerService.loadPlayers();
        const games = GameService.loadGames();
        console.log(players, PlayerService.players);
        console.log(games, GameService.games);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={MainMenu} />
                    <Route path="/newgame" component={CreateGame} />
                    <Route
                        path="/selectplayers/:gameid"
                        component={SelectPlayers}
                    />
                    <Route path="/game/:gameid" component={GameView} />
                    <Route path="/players" component={PlayerList} />
                </Switch>
            </div>
        );
    }
}

export default App;
