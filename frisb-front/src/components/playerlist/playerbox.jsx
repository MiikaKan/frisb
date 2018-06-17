import React from "react";
import styled from "styled-components";
import ColorBlob from "./colorblob";
import IconButton from "../shared/iconbutton";

const StyledBox = styled.div`
    width: 100%;
`;

export default class PlayerBox extends React.Component {
    render() {
        return (
            <StyledBox>
                <ColorBlob color="red" />
                {this.props.name}
                <IconButton icon="edit" onClick={() => console.log("edit")} />
                <IconButton icon="times" onClick={() => console.log("delete")} />
            </StyledBox>
        );
    }
}
