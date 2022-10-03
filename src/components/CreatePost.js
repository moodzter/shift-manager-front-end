import { useState } from 'react'
import axios from 'axios'


const CreatePost = ({

}) => {
    const handleCreate = (addPost) => {
        axios
        .post('http://localhost:8000/api/posts', addPost)
        .then((response) => {
            console.log('successfully added')
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        handleCreate(post)
        console.log(post)
    }

    let emptyPost = {
        name: '',
        subject: '',
        message: '',
    }

    let [post, setEmptyPost] = useState(emptyPost)

    const handleChange = (event) => {
        setEmptyPost({ ...post, [event.target.name]: event.target.value})
        }

        return(
        <>
            <div>
                <h1 className="createForm">Create New Post</h1>
            </div>
            <div class="flex items-center justify-center p-12 bg-pink-300 m-auto mx-56 rounded-md">
                <div class="mx-auto w-full max-w-[550px]">
                    <form onSubmit={handleSubmit}>
                        <div class="mb-5">
                            <label class="mb-3 block text-base font-medium text-[#07074D]">Name</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                name="name"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5">
                            <label
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Subject
                            </label>
                            <input
                                onChange={handleChange}
                                type="text"
                                name="subject"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5">
                            <label
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Message
                            </label>
                            <input
                                onChange={handleChange}
                                type="text"
                                name="message"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div>
                            <button
                                class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default CreatePost