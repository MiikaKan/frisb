import React from "react";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import MockData from "../mockdata";
import ScoreListColumn from "./scoreListColumn";
const data = MockData.data;
console.log(data);

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    column: {
        height: "100%"
    },
    control: {
        padding: theme.spacing.unit * 2
    }
});

class ScoreList extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                    <Grid
                        container
                        className={classes.demo}
                        justify="center"
                        spacing={8}
                    >
                        {data.map(d => (
                            <Grid key={d.id} item>
                                <ScoreListColumn scores={d.scores} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(ScoreList);
