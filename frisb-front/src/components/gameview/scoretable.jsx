import React from "react";

export default class ScoreTable extends React.Component {
    render() {
        const { players, rounds, handleScoreChanged } = this.props;

        const rows = [];
        for (let i = 0; i < rounds; i++) {
            const row = (
                <tr key={i}>
                    <td>{i + 1}</td>
                    {players.map(p => (
                        <td key={p.id}>
                            <input
                                onBlur={e =>
                                    handleScoreChanged(i, p, e.target.value)
                                }
                            />
                        </td>
                    ))}
                </tr>
            );
            rows.push(row);
        }

        return (
            <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <th />
                            {players.map(p => <th key={p.id}>{p.name}</th>)}
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </React.Fragment>
        );
    }
}
