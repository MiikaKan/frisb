import React from "react";

export default class ScoreTable extends React.Component {
    render() {
        const { game, handleScoreChanged } = this.props;

        console.log(game);

        if (game.players.length === 0) return null;

        const rows = [];
        for (let i = 0; i < game.rounds; i++) {
            const row = (
                <tr key={i}>
                    <td>{i + 1}</td>
                    {game.players.map(p => (
                        <td key={p.id}>
                            <input
                                onBlur={e =>
                                    handleScoreChanged(i, p, e.target.value)
                                }
                                defaultValue={
                                    game.scores[p.id] && game.scores[p.id][i]
                                }
                            />
                        </td>
                    ))}
                </tr>
            );
            rows.push(row);
        }

        const totalsRow = (
            <tr key={"totals"}>
                <td>Total</td>
                {game.players.map(p => (
                    <td key={p.id}>
                        {game.scores[p.id] &&
                            game.scores[p.id].reduce((acc, curr) => acc + curr)}
                    </td>
                ))}
            </tr>
        );
        rows.push(totalsRow);

        return (
            <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <th />
                            {game.players.map(p => (
                                <th key={p.id}>{p.name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </React.Fragment>
        );
    }
}
