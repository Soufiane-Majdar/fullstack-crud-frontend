import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>

        <nav className="navbar navbar-expand-lg bg-body-primary navbar-dark bg-primary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Full Stack CRUD</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
            </ul>
            <Link className="btn btn-outline-light" to="adduser">Add</Link>
           
        

            </div>
        </div>
        </nav>


    </div>
  )
}
