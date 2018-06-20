import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ColorBlob from "./colorblob";
import IconButton from "../shared/iconbutton";

const StyledBox = styled.div`
    width: 100%;
`;

export default class PlayerBox extends React.Component {
    render() {
        const { handleEdit, handleDelete } = this.props;

        return (
            <StyledBox>
                <ColorBlob color="red" />
                {this.props.playerData.name}
                <IconButton icon="edit" onClick={() => handleEdit && handleEdit()} />
                <IconButton icon="times" onClick={() => handleDelete && handleDelete()} />
            </StyledBox>
        );
    }
}

PlayerBox.propTypes = {
    playerData: PropTypes.shape({
        color: PropTypes.string,
        name: PropTypes.string,
    }),
    handleEdit: PropTypes.func,
    handleDelete: PropTypes.func,
};
