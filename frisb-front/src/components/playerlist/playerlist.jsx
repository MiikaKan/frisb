import React, { Component } from "react";
import AppBar from "components/appbar";
import ContentContainer from "components/shared/contentcontainer";
import FlexContainer from "components/shared/flexContainer";
import PlayerBox from "./playerbox";
import IconButton from "../shared/iconbutton";
import PlayerPopup from "./playerpopup";

export default class PlayerList extends Component {
    constructor() {
        super();

        this.state = {
            popupOpen: false,
            popupData: {},
            players: [
                {
                    id: 0,
                    name: "Jokke",
                    color: "#ff0000",
                },
                {
                    id: 1,
                    name: "Oski",
                    color: "#ff0000",
                },
                {
                    id: 2,
                    name: "Riku",
                    color: "#ff0000",
                },
            ],
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
        const players = [...this.state.players];
        let editingPlayer = players.find(x => x.id === data.id);

        if (editingPlayer) {
            editingPlayer.name = data.name;
            editingPlayer.color = data.color;
        } else {
            players.push(data);
        }

        console.log(data, editingPlayer, players);

        this.setState(state => ({ players: players }));
        this.closePopup();
    }

    handlePlayerDelete(index) {
        console.log("DELETE " + index);

        this.setState(state => ({ players: state.players.filter((item, idx) => idx !== index) }));
    }

    render() {
        return (
            <div>
                <AppBar title="Players" rightIcon={<IconButton icon="plus" onClick={() => this.togglePopup()} />} />
                <FlexContainer>
                    <ContentContainer>
                        {this.state.players.map((p, i) => (
                            <PlayerBox
                                handleEdit={() => this.openPopup(p)}
                                handleDelete={() => this.handlePlayerDelete(i)}
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
