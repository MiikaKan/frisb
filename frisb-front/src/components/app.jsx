import React, { Component } from "react";
import MainMenu from "components/mainmenu";
import { Route, Switch } from "react-router";
import PlayerList from "./playerlist/playerlist";
import GameView from "./gameview/gameview";
import CreateGame from "./creategame";
import SelectPlayers from "./selectplayers/selectplayers";
import PlayerService from "playerService";
import GameService from "gameService";
import CoursesList from "./courseslist";
import CourseService from "courseService";

class App extends Component {
    componentDidMount() {
        const players = PlayerService.loadPlayers();
        const games = GameService.loadGames();
        const courses = CourseService.loadCourses();
        console.log(players, PlayerService.players);
        console.log(games, GameService.games);
        console.log(courses, CourseService.courses);
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
                    <Route path="/courses" component={CoursesList} />
                </Switch>
            </div>
        );
    }
}

export default App;
