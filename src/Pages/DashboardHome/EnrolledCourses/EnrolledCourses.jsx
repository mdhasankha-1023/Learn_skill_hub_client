import { useLoaderData } from "react-router-dom";

const EnrolledCourses = () => {
    const enrolledCourses = useLoaderData();
    console.log(enrolledCourses)



    return (
        <div>
            <h1>All Enrolled Courses Here,</h1>
            <div className="grid lg:grid-cols-2 gap-8">
                {
                    enrolledCourses.map(course => <div
                        key={course._id}
                    >
                        <div className="card card-compact w-[90%] bg-base-100 shadow-xl">
                            <figure className="w-full h-[50%]"><img className="w-full h-full" src={course.Course_pic} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{course.Course_name}</h2>
                                <p>{course.Instructor_name}</p>
                                <div className="w-full">
                                    <button className="btn btn-primary w-full">Contunue Course</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default EnrolledCourses;