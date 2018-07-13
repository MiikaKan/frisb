import React from "react";
import GameService from "gameService";

export default class HistoryNode extends React.Component {
    render() {
        const { game } = this.props;

        return (
            <div>
                <p>{game.courseid}</p>
                <p>{game.createdAt}</p>
                <p>{game.rounds} rounds</p>

                {game.players.map((p, i) => (
                    <p key={p.id}>
                        {p.name}: {GameService.getTotalScore(game, p.id)}
                    </p>
                ))}
            </div>
        );
    }
}
