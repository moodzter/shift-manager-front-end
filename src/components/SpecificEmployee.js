import axios from 'axios'
import { useState } from 'react'
import Employees from './Employees'

const SpecificEmployee = ({
    employee,
    setShowEmployees,
    setSpecific
}) => {

    let [showCard, setShowCard] = useState(true)
    let [showEdit, setShowEdit] = useState(false)
    let [updateEmployee, setUpdateEmployee] = useState({...employee})

    const handleChange = (event) => {
        setUpdateEmployee({...updateEmployee, [event.target.name]: event.target.value})
    }

    const handleDelete= (deletedId) => {
        axios
            .delete('http://localhost:8000/api/employees/' + deletedId)
            .then((response) => {
                console.log('successfully deleted')
            })
    }

    const handleUpdate=(editedEmployee)=>{
        axios.put('http://localhost:8000/api/employees/' + editedEmployee.id, editedEmployee)
        .then((response) => {
            console.log('success!')
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleUpdate(updateEmployee)
        setShowEmployees(true)
        setSpecific(false)
    }

    return (
        <>{showCard ?
            <div class="flex items-center h-screen w-full justify-center">

                <div class="max-w-xs">
                    <div class="bg-white shadow-xl rounded-lg py-3 p-10">
                        <div class="photo-wrapper p-2">
                            <img class="w-32 h-32 rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="John Doe" />
                        </div>
                        <div class="p-2">
                            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{employee.firstName} {employee.lastName}</h3>
                            <div class="text-center text-gray-400 text-xs font-semibold">
                                <p>{employee.title}</p>
                            </div>
                            <table class="text-xs my-3">
                                <tbody><tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Age</td>
                                    <td class="px-2 py-2">{employee.age}</td>
                                </tr>
                                    <tr>
                                        <td class="px-2 py-2 text-gray-500 font-semibold">Salary/Hourly Pay</td>
                                        <td class="px-2 py-2">${employee.pay}</td>
                                    </tr>
                                    <tr>
                                        <td class="px-2 py-2 text-gray-500 font-semibold">Title</td>
                                        <td class="px-2 py-2">{employee.title}</td>
                                    </tr>
                                </tbody></table>

                            <div class="text-center block my-3 ">
                                <button onClick={()=>{setShowEdit(true)
                                                        setShowCard(false)}}class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 mr-1 rounded mb-0.5">
                                    Edit
                                </button>
                                <button onClick={()=>{handleDelete(employee.id)}} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Delete
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            : null}
            {showEdit ? 
                    <div class="flex items-center h-screen w-full justify-center">

                    <div class="max-w-xs">
                        <div class="bg-white shadow-xl rounded-lg py-3 p-10">
                            <div class="photo-wrapper p-2">
                                <img class="w-32 h-32 rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="John Doe" />
                            </div>
                            <div class="p-2">
                                <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{employee.firstName} {employee.lastName}</h3>
                                <div class="text-center text-gray-400 text-xs font-semibold">
                                    <p>{employee.title}</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <label class="mr-2">Age</label>
                                    <input name="age" type='text' placeholder={employee.age} onChange={handleChange}></input><br/>
                                    <label class="mr-2">Pay</label>
                                    <input name="pay" titletype='text' placeholder={employee.pay} onChange={handleChange}></input><br/>
                                    <label class="mr-2">Title</label>
                                    <input name="title"type='text' placeholder={employee.title} onChange={handleChange}></input><br/>
                                
    
                                <div class="text-center block my-3 ">
                                    <input type='submit'/>
                                </div>
                                </form>
    
                            </div>
                        </div>
                    </div>
    
                </div>
                : null}
        </>
    )
}

export default SpecificEmployee