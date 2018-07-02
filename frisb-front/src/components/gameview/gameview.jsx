import React from "react";
import AppBar from "../appbar";
import IconButton from "../shared/iconbutton";
import GameService from "gameService";
import FlexContainer from "../shared/flexContainer";
import ContentContainer from "../shared/contentcontainer";

export default class GameView extends React.Component {
    constructor() {
        super();

        this.state = {
            gameData: {
                players: [],
            },
        };
    }
    componentDidMount() {
        const { course, match } = this.props;

        const gameid = match.params.gameid;

        GameService.loadGames();
        const gameData = GameService.getGameData(gameid);

        GameService.saveGames();

        this.setState({
            gameData: gameData,
        });
    }

    render() {
        const { players } = this.state.gameData;

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
                <FlexContainer>
                    <ContentContainer>
                        <div>Game view</div>
                        <table>
                            <thead>
                                <tr>
                                    {players.map(p => (
                                        <th key={p.id}>{p.name}</th>
                                    ))}
                                </tr>
                            </thead>
                        </table>
                    </ContentContainer>
                </FlexContainer>
            </div>
        );
    }
}
