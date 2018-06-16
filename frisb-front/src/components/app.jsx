import React, { Component } from "react";
import MainMenu from "components/mainmenu";
import { Route, Switch } from "react-router";
import PlayerList from "./playerlist/playerlist";

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={MainMenu} />
                    <Route path="/" component={PlayerList} />
                </Switch>
            </div>
        );
    }
}

export default App;
