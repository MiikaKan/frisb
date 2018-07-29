import React from "react";
import { Link } from "react-router-dom";
import AppBar from "../appbar";
import IconButton from "../shared/iconbutton";
import ContentContainer from "../shared/contentcontainer";
import GameService from "gameService";
import CourseService from "courseService";

export default class CreateGame extends React.Component {
    constructor() {
        super();

        this.state = {
            courseid: undefined,
        };
    }

    handleCourseChanged(event) {
        console.log(event.target.value);

        const newValue = event.target.value;

        if (newValue === "none") return;

        this.setState({ courseid: event.target.value });
    }

    render() {
        console.log(CourseService.courses);

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
                    {CourseService.courses.length > 0 ? (
                        <React.Fragment>
                            <label htmlFor="course">Course</label>
                            <select
                                name="course"
                                onChange={event =>
                                    this.handleCourseChanged(event)
                                }
                            >
                                <option key="none" value="none">
                                    Select course
                                </option>
                                {CourseService.courses.map(c => {
                                    return (
                                        <option
                                            key={c.courseid}
                                            value={c.courseid}
                                        >
                                            {c.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </React.Fragment>
                    ) : (
                        <Link to="/courses">Create course</Link>
                    )}
                </ContentContainer>
            </div>
        );
    }

    createGame() {
        const gameData = GameService.getGameData();
        gameData.courseid = this.state.courseid;
        GameService.saveGames();
        this.props.history.push("/selectplayers/" + gameData.gameid);
    }
}
