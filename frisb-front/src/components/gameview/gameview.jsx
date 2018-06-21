import React from "react";
import AppBar from "../appbar";
import IconButton from "../shared/iconbutton";

export default class GameView extends React.Component {
    constructor(props) {
        super(props);

        const { course } = this.props;

        this.state = {
            course: course,
        };
    }

    render() {
        return (
            <div>
                <AppBar title="Tali" rightIcon={<IconButton icon="plus" onClick={() => this.togglePopup()} />} />
                <div>Game view</div>
            </div>
        );
    }
}
