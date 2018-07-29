import React from "react";
import FlexContainer from "../shared/flexContainer";
import ContentContainer from "../shared/contentcontainer";
import IconButton from "../shared/iconbutton";
import AppBar from "../appbar";
import GameService from "gameService";
import HistoryNode from "./historynode";

export default class HistoryView extends React.Component {
    render() {
        const games = GameService.games;

        return (
            <React.Fragment>
                <AppBar
                    title="History"
                    rightIcon={
                        <IconButton
                            icon="plus"
                            onClick={() => this.togglePopup()}
                        />
                    }
                />
                <FlexContainer>
                    <ContentContainer>
                        {games.map(g => (
                            <HistoryNode key={g.gameid} game={g} />
                        ))}
                    </ContentContainer>
                </FlexContainer>
            </React.Fragment>
        );
    }
}
