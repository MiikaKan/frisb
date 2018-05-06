import React, { Fragment } from "react";
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "material-ui/Table";
import Paper from "material-ui/Paper";

const data = [
    { id: 0, name: "Jokke", scores: [1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1] },
    { id: 1, name: "Oski", scores: [2, 1, 2, 1, 3, 1, 1, 1, 11, 1, 1, 1] },
    { id: 2, name: "Erika", scores: [1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1] },
    { id: 3, name: "Miika", scores: [1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1] },
    { id: 4, name: "Gema", scores: [1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1] }
];

function ScoreCard() {
    const scoresToRows = data => {
        const longestRow = data.reduce((prev, current) => {
            return prev.scores.length > current.scores.length ? prev : current;
        });

        const rows = [];
        for (let i = 0; i < longestRow.scores.length; i++) {
            const row = (
                <TableRow key={i}>
                    {data.map((n, key) => {
                        return <TableCell key={key}>{n.scores[i]}</TableCell>;
                    })}
                </TableRow>
            );
            rows.push(row);
        }

        return <Fragment>{rows}</Fragment>;
    };

    return (
        <Paper>
            <Table style={{ width: "auto", tableLayout: "auto" }}>
                <TableHead>
                    <TableRow>
                        {data.map((n, key) => {
                            return <TableCell key={key}>{n.name}</TableCell>;
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>{scoresToRows(data)}</TableBody>
            </Table>
        </Paper>
    );
}

export default ScoreCard;
