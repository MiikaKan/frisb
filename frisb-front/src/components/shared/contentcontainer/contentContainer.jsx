import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    margin-top: 100px;
`;

const ContentContainer = props => {
    return <StyledDiv>{props.children}</StyledDiv>;
};

export default ContentContainer;
