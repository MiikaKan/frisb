import React from "react";
import ScoreList from "./scoreList";

import mockData from "../mockdata";
const data = mockData.data;

export default class ScoreCard extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <ScoreList />;
    }
}
