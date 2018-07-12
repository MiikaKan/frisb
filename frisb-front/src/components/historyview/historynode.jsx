import React from "react";

export default class HistoryNode extends React.Component {
    render() {
        const { game } = this.props;

        return (
            <div>
                <p>{game.courseid}</p>
                <p>{game.createdAt}</p>
                <p>{game.players[0].name}</p>
                <p>{game.rounds}</p>
                <p>{game.scores[0]}</p>
            </div>
        );
    }
}
