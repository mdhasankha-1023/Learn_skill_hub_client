import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
    const courses = useLoaderData()
    // console.log(courses)



    return (
        <div className="my-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-20">
                { courses.map(course => <Course
                key={course.id}
                course={course}
                ></Course>)

                }
            </div>
        </div>
    );
};

export default Courses;