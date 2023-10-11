import React from 'react'
import axios from 'axios'

export default function Home() {
    const [users, setUsers] = React.useState([])


    React.useEffect(() => {
        loadUsers();
    }
    , [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users")
        setUsers(result.data)
    }

  return (
    <div>
        <div className="container">
            <div className="py-4">
            <h1 className="text-center ">View Users</h1>
                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className="btn btn-outline-primary m-1">Edit</button>
                                        <button className="btn btn-outline-primary m-1">View</button>
                                        <button className="btn btn-danger m-1">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
            

                        
    </div>
  )
}
