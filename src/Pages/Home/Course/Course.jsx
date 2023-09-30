import { Link } from "react-router-dom";

const Course = ({ course }) => {
    const { id, Course_name, Course_pic, Instructor_name,
        Instructor_pic, Category, price, rating } = course;
    console.log(course)


    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="w-full h-[50%]"><img src={Course_pic} className="w-full h-full" alt="picture" /></figure>
            <div className="card-body">
                <div className="avatar items-center gap-4">
                    <div className="w-12 rounded-full">
                        <img src={Instructor_pic} />
                    </div>
                    <p>{Instructor_name}</p>
                </div>
                <h2 className="card-title">{Course_name}</h2>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Course;