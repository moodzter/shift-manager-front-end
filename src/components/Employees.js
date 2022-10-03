import axios from 'axios'
import { useState, useEffect } from 'react'

const Employees = ({
    setShowEmployees,
    setShowCreateForm,
    showEmployees,
    showCreateForm,
    settingEmployee,
    setSpecific,
    setPostCreate,
    setShowLogin,
}) => {
    let [currentEmployees, setEmployees] = useState([])
    let [posts, setPosts] = useState([])

    const getPosts = () => {
        axios
            .get('http://localhost:8000/api/posts')
            .then((response)=> setPosts(response.data),
                    (err) => console.error(err))
            .catch((error) => console.error(error))
    }
    
    const getEmployees = () => {
        axios
            .get('http://localhost:8000/api/employees')
            .then(
                (response) => setEmployees(response.data),
                (err) => console.error(err)
            )
            .catch((error) => console.error(error))
    }

    const showMeDatEmployee = (employee) => {
        settingEmployee(employee)
        setSpecific(true)
        setShowEmployees(false)
    }

    useEffect(() => {
        getEmployees();
        getPosts();
    }, [])

    const showPostCreate = () => {
        setPostCreate(true)
        setShowEmployees(false)
    }

    return (
        <>
            <div class="flex h-screen bg-green-300">
                <div class="flex-1 flex  flex-col overflow-hidden">
                    <div id = "poopoo" class="flex h-full">
                        <nav class="flex w-72 h-full bg-mint-500">
                            <div class=" block mx-auto px-6 border-black-600 py-8">
                                    <h1 className="h1">Employees</h1>
                                    <div>
                                    <ul className="employeeList text-xl">
                                            {currentEmployees.map((employee) => {
                                                return(
                                                    <>
                                                        <li class="cursor-pointer" onClick={()=>{showMeDatEmployee(employee)}}>
                                                            {employee.firstName}
                                                        </li>
                                                    </>
                                                )
                                            })}
                                        </ul>
                                        <a onClick={()=>{setShowCreateForm(!showCreateForm)
                                                        setShowEmployees(false)}}
                                            href='#'><h2 class="">Add New Employee...</h2></a>
                                    </div>
                            </div>
                        </nav>
                        <main class="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
                            
                                <div class="flex flex-col w-full h-full text-gray-900 text-xl">
                                    
                                    {posts.map((post) => {
                                        return(
                                            <>
                                            <div class="block w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600 mb-2 p-2">
                                                <div>
                                                    <h1>Sent by:{post.name}</h1><br/>
                                                    <h2>Subject:{post.subject}</h2>
                                                    <p>{post.message}</p>
                                                </div>
                                            </div>
                                            </>
                                        )
                                    })}
                                    <h1 onClick={showPostCreate} class="items-center justify-center cursor-pointer mx-auto">Create a Post</h1>
                                </div>
                            
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Employees