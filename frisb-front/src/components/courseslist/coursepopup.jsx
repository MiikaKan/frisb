import React from "react";
import PropTypes from "prop-types";
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
        if (this.props.courseData) {
            this.setState({ ...this.props.courseData });
        } else {
            const courseData = CourseService.getCourseData(null);
            this.setState({ ...courseData });
            CourseService.saveCourses();
        }
    }

    updateCourseName(evt) {
        this.setState({
            name: evt.target.value,
        });
    }

    updateCourseHoles(howMany) {
        // Dont parse int to allow emptying box
        const newHoles = howMany;
        //let newHoles = parseInt(evt.target.value, 10);

        //if (isNaN(newHoles)) newHoles = 0;

        const newCourseData = { ...this.state };

        if (newHoles >= this.state.holes) {
            newCourseData.pars = [
                ...newCourseData.pars,
                ...Array(newHoles - newCourseData.pars.length).fill(3),
            ];
        } else {
            newCourseData.pars = newCourseData.pars.slice(0, newHoles);
        }
        newCourseData.holes = newHoles;
        this.setState(newCourseData);
    }

    updateHolePar(evt, index) {
        const newPars = this.state.pars;
        const newPar = parseInt(evt.target.value, 10);

        if (isNaN(newPar)) return;

        newPars[index] = newPar;

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
                    onChange={evt => this.updateCourseHoles(evt.target.value)}
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
