import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import MockData from "../mockdata";
const data = MockData.data;
console.log(data);

const styles = theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        textAlign: "center"
    },
    text: {
        padding: 0,
        textAlign: "center"
    }
});

class ScoreListColumn extends React.Component {
    render() {
        const { classes, scores } = this.props;

        console.log(scores);

        return (
            <div className={classes.root}>
                <List component="nav">
                    {scores.map((s, i) => {
                        return (
                            <Fragment key={i}>
                                <ListItem button>
                                    <ListItemText
                                        primary={s.toString()}
                                        className={classes.text}
                                    />
                                </ListItem>
                                <Divider />
                            </Fragment>
                        );
                    })}
                </List>
            </div>
        );
    }
}

ScoreListColumn.propTypes = {
    classes: PropTypes.object.isRequired,
    scores: PropTypes.arrayOf(Number).isRequired
};

export default withStyles(styles)(ScoreListColumn);
