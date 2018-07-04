import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import IconButton from "../shared/iconbutton";

const StyledBox = styled.div`
    width: 100%;
`;

export default class CourseBox extends React.Component {
    render() {
        const { courseData, handleEdit, handleDelete } = this.props;

        return (
            <StyledBox>
                {courseData.name} {courseData.holes}hole
                <IconButton
                    icon="edit"
                    onClick={() => handleEdit && handleEdit()}
                />
                <IconButton
                    icon="times"
                    onClick={() => handleDelete && handleDelete()}
                />
            </StyledBox>
        );
    }
}

CourseBox.propTypes = {
    playerData: PropTypes.shape({
        color: PropTypes.string,
        name: PropTypes.string,
    }),
    handleEdit: PropTypes.func,
    handleDelete: PropTypes.func,
};
