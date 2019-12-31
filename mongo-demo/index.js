const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then(() => console.log('Connected to MongoDB..'))
.catch(err => console.error('Could not connect', err));

const courseSchema = new mongoose.Schema({
    name: String, 
    author: String,
    tags: [ String ],
    data: { type: Date, default: Date.now },
    isPublished: Boolean
});

async function createCourse () {
const Course = mongoose.model('Course', courseSchema);
const course = new Course({ 
    name: 'Angular Course',
    author: 'Mosh',
    tags: ['angular', 'frontend'],
    isPublished: true
});

const result = await course.save();
console.log(result);
}

createCourse();

async function getCourses() {


    const courses = await Course
 .find({ author: 'Mosh', isPublished: true })
 .find()
     .or([ { author: 'Mosh'}, { isPublished: true } ])
     .and([ ])
.limit(10)
.sort({ name: 1 })
.select({ name: 1, tags: 1 });
console.log(courses);
}
getCourses();