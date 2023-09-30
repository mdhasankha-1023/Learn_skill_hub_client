import { useContext } from "react";
import { AuthContext } from "../../../Authprovider/Authprovider";

const AddCourse = () => {
    const {successMsg} = useContext(AuthContext)

    const handleUploadBtn = (event) => {
        event.preventDefault();
        const form = event.target;
        const Course_name = form.Course_name.value;
        const Course_pic = form.Course_pic.value;
        const Instructor_name = form.Instructor_name.value;
        const Instructor_pic = form.Instructor_pic.value;
        const Category = form.Category.value;
        const price = form.price.value;
        const title = form.lesson_name.value;
        const video_link = form.video_link.value;
        const Course_syllabus = [
            { title: title, video_link: video_link }
        ]
        const courseInfo = { Course_name, Course_pic, Instructor_name, Instructor_pic, Category, price, Course_syllabus }
        console.log(courseInfo)

        fetch('http://localhost:5000/courses', {
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
                    successMsg('successfully Uploaded')
                }
            })
    }



    return (
        <div className="hero mt-8">
            <div className="hero-content w-[80%]">
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <h1 className="text-center text-3xl font-bold underline my-8">Upload Course</h1>
                    <div className="card-body">
                        <form onSubmit={handleUploadBtn}>
                            <div className="flex gap-4">
                                {/* course name */}
                                <div className="form-control w-[32%]">
                                    <label className="label">
                                        <span className="label-text">Course Name</span>
                                    </label>
                                    <input type="text" name="Course_name" placeholder="Course Name" className="input input-bordered" required />
                                </div>
                                {/* course pic */}
                                <div className="form-control w-[32%]">
                                    <label className="label">
                                        <span className="label-text">Thumbnail</span>
                                    </label>
                                    <input type="text" placeholder="Thumbnail link" name="Course_pic" className="input input-bordered" required />
                                </div>
                                {/* instructor name */}
                                <div className="form-control w-[32%]">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name="Instructor_name" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                {/* instructor pic */}
                                <div className="form-control w-[32%]">
                                    <label className="label">
                                        <span className="label-text">Profile pic</span>
                                    </label>
                                    <input type="text" placeholder="Profile pic" name="Instructor_pic" className="input input-bordered" />
                                </div>
                                {/* category */}
                                <div className="form-control w-[32%]">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input type="text" placeholder="Category" name="Category" className="input input-bordered" />
                                </div>
                                {/* category */}
                                <div className="form-control w-[32%]">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" placeholder="price" name="price"
                                        defaultValue={0} className="input input-bordered" />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                {/* Lesson name */}
                                <div className="form-control w-[50%]">
                                    <label className="label">
                                        <span className="label-text">Lesson Name</span>
                                    </label>
                                    <input type="text" placeholder="Lesson name" name="lesson_name" className="input input-bordered" required />
                                </div>
                                {/* video link */}
                                <div className="form-control w-[50%]">
                                    <label className="label">
                                        <span className="label-text">Video link</span>
                                    </label>
                                    <input type="text" placeholder="video link" name="video_link" className="input input-bordered" required />
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Upload</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;