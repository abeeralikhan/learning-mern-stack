const express = require('express');
const app = express();
const PORT = 3000;
const courses = [
    { id: 0, title: 'Operating Systems' },
    { id: 1, title: 'Object Oriented Software Engineering' }
]

app.get('/', (req, res) => {
    res.send('Use /courses to get all courses, or courses/courseId to get a specific course');
});

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.get('/courses/:courseId', (req, res) => {
    const courseId = Number(req.params.courseId);
    const course = courses[courseId];
    if (course) {
        res.json(course).status(200);
        // Handling error in case user has entered an index of range
        // We need to do it manually because express is not aware of the range of our courses
        // Here, we're explicitly sending error 404 because express treats this request as 200
        // This is an efficient way handling errors and avoiding any future bugs
    } else {
        res.status(404).json({
            error: "Course doesn't exist!"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}...`);
});