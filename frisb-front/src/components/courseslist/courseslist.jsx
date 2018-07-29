import React from "react";
import FlexContainer from "../shared/flexContainer";
import ContentContainer from "../shared/contentcontainer/contentContainer";
import AppBar from "../appbar/index";
import IconButton from "../shared/iconbutton";
import CourseService from "courseService";
import CoursePopup from "./coursepopup";
import CourseBox from "./coursebox";

export default class CoursesList extends React.Component {
    constructor() {
        super();

        this.state = {
            courses: [],
            popupOpen: false,
        };
    }

    componentDidMount() {
        const courses = CourseService.loadCourses();
        this.setState({ courses: courses });
    }

    togglePopup() {
        this.setState(old => ({ popupOpen: !old.popupOpen, popupData: {} }));
    }

    openPopup(courseData) {
        this.setState({ popupOpen: true, popupData: courseData });
    }

    closePopup() {
        this.setState({ popupOpen: false, popupData: {} });
    }

    handlePopupSubmit(data) {
        let courses;
        if (this.state.courses) {
            courses = [...this.state.courses];
        } else {
            courses = [];
        }

        let editingCourse = courses.find(x => x.courseid === data.courseid);

        data.holes = parseInt(data.holes);

        if (editingCourse) {
            const oldId = editingCourse.courseid;

            editingCourse = { ...data };
            editingCourse.courseid = oldId;
            courses[
                courses.findIndex(x => x.courseid === editingCourse.courseid)
            ] = editingCourse;
        } else {
            courses.push(data);
        }

        console.log(data, editingCourse, courses);

        this.setState({ courses: courses });
        console.log(courses, this.state.courses);
        CourseService.saveCourses(courses);
        this.closePopup();
    }

    handleCourseDelete(id) {
        console.log("DELETE " + id);

        const newCourses = this.state.courses.filter(
            item => item.courseid !== id
        );
        this.setState({ courses: newCourses });

        CourseService.saveCourses(newCourses);
    }

    render() {
        return (
            <React.Fragment>
                <AppBar
                    title="Courses"
                    rightIcon={
                        <IconButton
                            icon="plus"
                            onClick={() => this.openPopup()}
                        />
                    }
                />
                <FlexContainer>
                    <ContentContainer>
                        <p>Courses list works!</p>
                        {this.state.courses.map(c => (
                            <CourseBox
                                key={c.courseid}
                                courseData={c}
                                handleEdit={() => this.openPopup(c)}
                                handleDelete={() =>
                                    this.handleCourseDelete(c.courseid)
                                }
                            />
                        ))}
                    </ContentContainer>
                </FlexContainer>

                {this.state.popupOpen && (
                    <CoursePopup
                        courseData={this.state.popupData}
                        onCancel={() => this.closePopup()}
                        onSubmit={data => this.handlePopupSubmit(data)}
                    />
                )}
            </React.Fragment>
        );
    }
}
