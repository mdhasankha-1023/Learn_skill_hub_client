import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Authprovider/Authprovider";
import Iframe from "react-iframe";

const Details = () => {
    const { successMsg } = useContext(AuthContext)
    const courseDetails = useLoaderData()
    console.log(courseDetails)
    const { Course_pic, Course_name, Instructor_pic, Instructor_name, Course_details, rating, Course_syllabus, default_video_link } = courseDetails;
    const [currentVideo, setCurrentVideo] = useState(default_video_link)

    const fullSymbol = <>
        <FontAwesomeIcon className="text-[#F79028]" icon={faStar}></FontAwesomeIcon>
    </>
    const halfSymbol = <>
        <FontAwesomeIcon className="text-[#F79028]" icon={faStarHalfAlt}></FontAwesomeIcon>
    </>

    const handleEnrollBtn = () => {

        const courseInfo = {
            Course_pic, Course_name, Instructor_pic, Instructor_name, rating, status: 'enroled'
        }

        fetch('http://localhost:5000/enrolled-courses', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(courseInfo)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    successMsg('successfully enrolled')
                }
            })
    }

    const playVideo = (videoLink) => {
        setCurrentVideo(videoLink)
    }


    return (
        <div className="mt-8">
            <div className="flex">
                <figure className="lg:w-[70%] w-full h-[400px] mx-auto" >
                    <Iframe url={currentVideo}
                        width="100%"
                        height="100%" />
                </figure>
                <div className="lg:w-[30%] w-full flex flex-col items-center">
                    <h1 className="text-center font-bold text-2xl my-4 underline">Syllabus</h1>
                    {
                        Course_syllabus.map((lesson, index) => <div className="text-start"
                        key={index}
                        >
                            <h2 onClick={() => playVideo(lesson.video_link)}>{lesson.title}</h2>
                        </div>)
                    }

                </div>
            </div>
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
                        <button onClick={handleEnrollBtn} className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;