import React, { Component } from "react";
import AppBar from "components/appbar";
import ContentContainer from "components/shared/contentcontainer";
import FlexContainer from "components/shared/flexContainer";

export default class PlayerList extends Component {
    render() {
        return (
            <div>
                <AppBar title="Players" />
                <FlexContainer>
                    <ContentContainer>Players</ContentContainer>
                </FlexContainer>
            </div>
        );
    }
}
