const courseList = require("../Models/courses.json");



exports.getAllCourses = (req, res) => {
    res.status(200).json(courseList);
}

exports.getCourseById = (req, res) => {
    const courseId = req.params.id;
    const course = courseList.find(value =>  value.id == courseId);

    if (course) {
        res.status(200).json({ course: course });
    } else {
        res.status(404).json({
            message: "Please provide valid course ID"
        });
    }
}

exports.getCoursesBySub = (req, res) => {
    const sub = req.params.sub;

    // const filteredCourses = courseList.filter(rest => rest.sub == sub);
    const filteredCourses = courseList.filter(rest => rest.sub.toLowerCase() === sub.toLowerCase());


    if (filteredCourses.length > 0) {
        res.status(200).json({ courseList: filteredCourses });
    } else {
        res.status(404).json({
            message: "Please provide valid sub Name"
        });
    } 
}

