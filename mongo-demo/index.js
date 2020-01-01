const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then(() => console.log('Connected to MongoDB..'))
.catch(err => console.error('Could not connect', err));

const courseSchema = new mongoose.Schema({
    name: {
         type: String,
          required: true,
        minlength: 5,
    maxlength: 255,
 },
 category: {
     type: String,
     required: true,
     enum: ['web', 'mobile', 'network'],
     lowercase: true
 }, 
    author: String,
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function(v, callback)  {
                setTimeout(() => {
                    const result =  v && v.length > 0;
                    callback(result);
                }, 4000);
            
            },
            message: 'A course should have a tag'
        }
    },
    data: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function() { return this.isPublished; },
        min: 10,
        max: 200,
        get: v => Math.round(v),
        set: v => Math.round(v)
    }
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse () {
const course = new Course({ 
    name: 'Angular Course',
    category: 'Web',
    author: 'Mosh',
    tags: ['frontend'],
    isPublished: true,
    price: 15.8
});

try{
const result = await course.save();
console.log(result);
}
catch (ex) {
    for (field in ex.errors)
    console.log(ex.errors[field].message)
}
}

async function getCourses() {
    const pageNumber = 2;
    const pageSize = 10;

    const courses = await Course
 .find({ author: 'Mosh', isPublished: true })
.skip((pageNumber -1) * pageSize)
 .limit(pageSize)
.sort({ name: 1 })
.select({ name: 1, tags: 1 });
console.log(courses);
}


async function updateCourse(id) {
const result = await Course.update({ __id: id }, {
   $set: {
       author: 'Mosh',
       isPublished: false
   } 
});
console.log(result)
}
async function removeCourse(id) {
    const result = await Course.deleteOne({ _id: id});
    console.log(result);
}
createCourse();