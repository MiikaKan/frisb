import React from "react";
import AppBar from "../appbar";
import IconButton from "../shared/iconbutton";

export default class CreateGame extends React.Component {
    render() {
        return (
            <AppBar title="Create game" rightIcon={<IconButton icon="check" onClick={() => this.togglePopup()} />} />
        );
    }
}
