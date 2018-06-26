import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

export default class PlayerPopup extends React.Component {
    constructor() {
        super();

        this.state = {
            id: null,
            name: "",
            color: null,
        };
    }

    componentDidMount() {
        this.setState({ ...this.props.playerData }, () => {
            if (this.state.id === null) {
                this.setState({ id: shortid.generate() });
            }
        });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmit && this.props.onSubmit({ ...this.state });
    }

    render() {
        const { color, onCancel } = this.props;

        return (
            <form onSubmit={evt => this.onFormSubmit(evt)}>
                <input
                    type="text"
                    name="text"
                    value={this.state.name}
                    onChange={evt => this.updateInputvalue(evt)}
                />
                <input
                    onClick={() => onCancel && onCancel()}
                    type="button"
                    value="CANCEL"
                />
                <input type="submit" value="SAVE" />
            </form>
        );
    }

    updateInputvalue(evt) {
        this.setState({
            name: evt.target.value,
        });
    }
}

PlayerPopup.propTypes = {
    playerData: PropTypes.shape({
        color: PropTypes.string,
        name: PropTypes.string,
    }),
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
};
