import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../button/button";

const MenuButton = props => {
    const to = props.to;

    return to !== undefined ? (
        <Link to={props.to}>
            <Button>{props.children}</Button>
        </Link>
    ) : (
        <Button>{props.children}</Button>
    );
};

MenuButton.propTypes = {
    to: PropTypes.string,
};

export default MenuButton;
