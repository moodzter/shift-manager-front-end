import axios from 'axios'
import { useState } from 'react'

const CreateForm = ({
    setShowCreateForm,
    setShowEmployees
}) => {
//=======>Functions
    const handleCreate = (addEmployee) => {
        axios
        .post('http://localhost:8000/api/employees', addEmployee)
        .then((response) => {
            console.log('successfully added')
            setShowCreateForm(false)
            setShowEmployees(true)
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        handleCreate(employee)
        console.log(employee)
    }

    let emptyEmployee = {
        firstName: '',
        lastName: '',
        age: '',
        title: '',
        pay: ''
    }
    let [employee, setEmployee] = useState(emptyEmployee)

    const handleChange = (event) => {
        setEmployee({ ...employee, [event.target.name]: event.target.value})
        console.log(employee)
    }

    return (
        <>
            <div>
                <h1 className="createForm">Create Employee</h1>
            </div>
            <div class="flex items-center justify-center p-12 bg-pink-300 m-auto mx-56 rounded-md">
                <div class="mx-auto w-full max-w-[550px]">
                    <form onSubmit={handleSubmit}>
                        <div class="mb-5">
                            <label class="mb-3 block text-base font-medium text-[#07074D]">First Name</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                name="firstName"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5">
                            <label
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Last Name
                            </label>
                            <input
                                onChange={handleChange}
                                type="subject"
                                name="lastName"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5">
                            <label
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Age
                            </label>
                            <input
                                onChange={handleChange}
                                type="number"
                                name="age"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5">
                            <label
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Title
                            </label>
                            <input
                                onChange={handleChange}
                                name="title"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></input>
                        </div>
                        <div class="mb-5">
                            <label
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Pay
                            </label>
                            <input
                                onChange={handleChange}
                                type="number"
                                name="pay"
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

export default CreateForm