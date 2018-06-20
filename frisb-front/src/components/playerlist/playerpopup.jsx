import React from "react";
import PropTypes from "prop-types";

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
        this.setState({ ...this.props.playerData });
    }

    render() {
        const { color, name, onSubmit, onCancel } = this.props;

        return (
            <div>
                <input value={this.state.name} onChange={evt => this.updateInputvalue(evt)} />
                <button onClick={() => onCancel && onCancel()}>CANCEL</button>
                <button onClick={() => onSubmit && onSubmit({ ...this.state })}>SAVE</button>
            </div>
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
