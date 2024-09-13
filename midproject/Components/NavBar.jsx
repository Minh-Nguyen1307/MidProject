import React from 'react'
import './NavBar.css'
export default function NavBar() {
  return (
    <div className="navBar">
        <h2>Anonime</h2>
        <p>Home</p>
        <p>List anime</p>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search anime or movie" aria-label="Search" />
</form>

    </div>
  )
}
