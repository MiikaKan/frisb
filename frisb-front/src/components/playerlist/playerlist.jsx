import React, { Component } from "react";
import AppBar from "components/appbar";
import ContentContainer from "components/shared/contentcontainer";
import FlexContainer from "components/shared/flexContainer";
import PlayerBox from "./playerbox";
import IconButton from "../shared/iconbutton";

export default class PlayerList extends Component {
    constructor() {
        super();
        this.players = ["Jokke", "Oski", "Riku"];
    }

    render() {
        return (
            <div>
                <AppBar title="Players" rightIcon={<IconButton icon="plus" onClick={() => console.log("add")} />} />
                <FlexContainer>
                    <ContentContainer>{this.players.map((p, i) => <PlayerBox name={p} key={i} />)}</ContentContainer>
                </FlexContainer>
            </div>
        );
    }
}
