import React, { Component } from "react";
import MainMenu from "components/mainmenu";
import { Route, Switch } from "react-router";
import PlayerList from "./playerlist/playerlist";
import GameView from "./gameview/gameview";
import CreateGame from "./creategame";

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={MainMenu} />
                    <Route path="/newgame" component={CreateGame} />
                    <Route path="/game/:gameid" component={GameView} />
                    <Route path="/players" component={PlayerList} />
                </Switch>
            </div>
        );
    }
}

export default App;
