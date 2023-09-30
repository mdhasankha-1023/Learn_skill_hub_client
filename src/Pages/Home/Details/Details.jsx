import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const Details = () => {
    const courseDetails = useLoaderData()
    console.log(courseDetails)
    const { Course_pic, Instructor_pic, Instructor_name, Course_details, rating, Course_syllabus } = courseDetails;

    const fullSymbol = <>
        <FontAwesomeIcon className="text-[#F79028]" icon={faStar}></FontAwesomeIcon>
    </>
    const halfSymbol = <>
        <FontAwesomeIcon className="text-[#F79028]" icon={faStarHalfAlt}></FontAwesomeIcon>
    </>

    return (
        <div className="">
            <figure className="lg:w-[90%] w-full h-[50%] mx-auto" ><img className="w-full h-full" src={Course_pic} alt="Shoes" /></figure>
            <div className="card lg:w-[90%] w-full bg-base-100 shadow-xl mx-auto lg:flex-row flex-col mt-8">
                <div className="card-body lg:w-[70%] w-full">
                    <div className="avatar items-center gap-4">
                        <div className="w-12 rounded-full">
                            <img src={Instructor_pic} />
                        </div>
                        <p className="font-bold">{Instructor_name}</p>
                        <Rating
                            placeholderRating={rating}
                            emptySymbol={halfSymbol}
                            placeholderSymbol={fullSymbol}
                            // fullSymbol={fullSymbol}
                            readonly
                        />
                    </div>
                    <h2 className="card-title">Instructors Infos :</h2>
                    <p>{Course_details}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
                <div className="lg:w-[30%] w-full flex flex-col items-center">
                    <h1 className="text-center font-bold text-2xl my-4 underline">Syllabus</h1>
                    <div className="text-start">
                        {
                            Course_syllabus.map((syllabus, index) => <li
                                key={index}
                            >
                                {syllabus}
                            </li>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;