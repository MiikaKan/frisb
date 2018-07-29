import React from "react";
import AppBar from "../appbar";
import IconButton from "../shared/iconbutton";
import GameService from "gameService";
import FlexContainer from "../shared/flexContainer";
import ContentContainer from "../shared/contentcontainer";
import ScoreTable from "./scoretable";
import CourseService from "courseService";

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
    }

    finishGame() {
        GameService.finishGame(this.state.gameData.gameid);
        this.props.history.push("/");
    }

    render() {
        if (
            !CourseService.courses.some(
                c => c.courseid === this.state.gameData.courseid
            )
        )
            return <p>Loading...</p>;

        const courseData = CourseService.getCourseData(
            this.state.gameData.courseid
        );
        const courseName = courseData.name;

        return (
            <div>
                <AppBar
                    title={courseName}
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
