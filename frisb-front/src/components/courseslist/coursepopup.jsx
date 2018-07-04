import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import CourseService from "courseService";

export default class CoursePopup extends React.Component {
    constructor() {
        super();

        this.state = {
            courseid: -1,
            name: "",
            holes: "18",
            pars: [],
            createdAt: "",
        };
    }

    componentDidMount() {
        console.log(this.props.courseData);
        if (this.props.courseData) {
            this.setState({ ...this.props.courseData });
        } else {
            const courseData = CourseService.getCourseData(null);
            console.log({ ...courseData });
            this.setState({ ...courseData });
            CourseService.saveCourses();
        }
    }

    updateCourseName(evt) {
        this.setState({
            name: evt.target.value,
        });
    }

    updateCourseHoles(evt) {
        // Dont parse int to allow emptying box
        const newHoles = evt.target.value;
        //let newHoles = parseInt(evt.target.value, 10);

        //if (isNaN(newHoles)) newHoles = 0;

        const newCourseData = { ...this.state };

        if (newHoles >= this.state.holes) {
            console.log("PREFILL", newCourseData.pars);

            newCourseData.pars = [
                ...newCourseData.pars,
                ...Array(newHoles - newCourseData.pars.length).fill(3),
            ];
            console.log("POSTFILL", newCourseData.pars);
        } else {
            newCourseData.pars = newCourseData.pars.slice(0, newHoles);
        }

        console.log(newHoles, newCourseData.holes, this.state.holes);
        newCourseData.holes = newHoles;

        this.setState(newCourseData);
    }

    updateHolePar(evt, index) {
        const newPars = this.state.pars;
        const newPar = parseInt(evt.target.value);

        if (isNaN(newPar)) return;

        newPars[index] = newPar;

        console.log(index);

        this.setState({
            pars: newPars,
        });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmit && this.props.onSubmit({ ...this.state });
    }

    render() {
        const { onCancel } = this.props;

        console.log(this.state.pars, this.state.holes);

        return (
            <form onSubmit={evt => this.onFormSubmit(evt)}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={evt => this.updateCourseName(evt)}
                />
                <label htmlFor="holes">Holes</label>
                <input
                    type="number"
                    name="holes"
                    value={this.state.holes}
                    onChange={evt => this.updateCourseHoles(evt)}
                />
                <br />
                {this.state.pars.map((p, i) => (
                    <input
                        key={i}
                        type="number"
                        name="par"
                        defaultValue={p}
                        onBlur={evt => this.updateHolePar(evt, i)}
                    />
                ))}

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

CoursePopup.propTypes = {
    playerData: PropTypes.shape({
        color: PropTypes.string,
        name: PropTypes.string,
    }),
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
};
