import React from "react";
import PropTypes from "prop-types";

export default class SelectPlayerBox extends React.Component {
    render() {
        const { player } = this.props;

        return <p>{player.name}</p>;
    }
}

SelectPlayerBox.propTypes = {
    player: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        color: PropTypes.string,
    }).isRequired,
};
