import React, { Component } from "react";
import AppBar from "components/appbar";
import ContentContainer from "components/shared/contentcontainer";
import FlexContainer from "components/shared/flexContainer";
import PlayerBox from "./playerbox";
import IconButton from "../shared/iconbutton";
import PlayerPopup from "./playerpopup";
import PlayerService from "playerService";

export default class PlayerList extends Component {
    constructor() {
        super();

        PlayerService.loadPlayers();
        this.state = {
            popupOpen: false,
            popupData: {},
            players: PlayerService.players,
        };
    }

    togglePopup() {
        this.setState(state => ({ popupOpen: !state.popupOpen }));
    }

    openPopup(playerdata) {
        this.setState({ popupOpen: true, popupData: playerdata });
    }

    closePopup() {
        this.setState({ popupOpen: false, popupData: {} });
    }

    handlePopupSubmit(data) {
        let players;
        if (this.state.players) {
            players = [...this.state.players];
        } else {
            players = [];
        }

        let editingPlayer = players.find(x => x.id === data.id);

        if (editingPlayer) {
            editingPlayer.name = data.name;
            editingPlayer.color = data.color;
        } else {
            players.push(data);
        }

        this.setState(state => ({ players: players }));
        PlayerService.savePlayers(players);
        this.closePopup();
    }

    handlePlayerDelete(index) {
        const newPlayers = this.state.players.filter(
            (item, idx) => idx !== index
        );
        this.setState({ players: newPlayers });

        PlayerService.savePlayers(newPlayers);
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Players"
                    rightIcon={
                        <IconButton
                            icon="plus"
                            onClick={() => this.togglePopup()}
                        />
                    }
                />
                <FlexContainer>
                    <ContentContainer>
                        {this.state.players &&
                            this.state.players.map((p, i) => (
                                <PlayerBox
                                    handleEdit={() => this.openPopup(p)}
                                    handleDelete={() =>
                                        this.handlePlayerDelete(i)
                                    }
                                    playerData={p}
                                    key={i}
                                />
                            ))}
                    </ContentContainer>
                </FlexContainer>
                {this.state.popupOpen && (
                    <PlayerPopup
                        playerData={this.state.popupData}
                        onCancel={() => this.closePopup()}
                        onSubmit={data => this.handlePopupSubmit(data)}
                    />
                )}
            </div>
        );
    }
}
