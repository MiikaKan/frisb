import shortid from "shortid";

let savedCourses = [];

export default class CourseService {
    static loadCourses() {
        const coursesData = localStorage.getItem("courses");

        if (!coursesData || coursesData.length === 0) {
            savedCourses = [];
            return savedCourses;
        }

        savedCourses = JSON.parse(coursesData);

        return [...savedCourses];
    }

    static getCourseData(courseid) {
        let courseData = savedCourses.find(x => x.courseid === courseid);
        if (!courseData) {
            // courseData = {
            //     courseid: shortid.generate(),
            //     name: "",
            //     holes: 18,
            //     pars: Array(18).fill(3),
            //     createdAt: new Date(),
            // };
            // savedCourses.push(courseData);
            // this.saveCourses(savedCourses);
            console.error("No such course: ", courseid);
            return undefined;
        }
        return courseData;
    }

    static setCourseHoles(courseid, holes) {
        const courseData = this.getCourseData(courseid);
        courseData.holes = holes;

        courseData.holes.fill(3, courseData.length - 1, holes);
        console.log(courseData.holes);

        this.saveCourses();
    }

    static setParForHole(courseid, hole, par) {
        const courseData = this.getCourseData(courseid);
        courseData.pars[hole] = par;

        this.saveCourses();
    }

    static get courses() {
        return savedCourses;
    }

    static saveCourses(courses) {
        if (typeof courses === "undefined") courses = savedCourses;
        console.log("saving courses", courses);
        savedCourses = courses;
        console.trace();
        localStorage.setItem("courses", JSON.stringify(courses));
    }
}
