import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (



        <div class="containere">
            <nav>
                <ul>
                    <Link to="/"><li>Calcilatrice</li></Link>
                    <Link to="/todo"><li>Todo List</li></Link>
                    <Link to="/slider"><li>Slider</li></Link>
                    <Link to="/pagination"><li>Pagination</li></Link>
                    <Link to="*"><li>Autres</li></Link>
                </ul>
            </nav>
        
        
            
        </div>
    )
}
