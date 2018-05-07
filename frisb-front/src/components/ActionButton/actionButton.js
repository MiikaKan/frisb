import React from "react";
import PropTypes from "prop-types";
import Button from "material-ui/Button";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "material-ui";

const styles = theme => {
    console.log(theme);
    return {
        fab: {
            position: "absolute",
            bottom: theme.spacing.unit * 2,
            right: theme.spacing.unit * 2
        }
    };
};

class ActionButton extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Button
                variant="fab"
                color="primary"
                aria-label="add"
                className={classes.fab}
                onClick={() => console.log("add scorepost")}
            >
                <AddIcon />
            </Button>
        );
    }
}

ActionButton.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ActionButton);
