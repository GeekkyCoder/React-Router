import React from 'react'
import { NavLink } from 'react-router-dom'

function SubHome() {
  return (
    <div className='homepage'>
      <NavLink to={"/home/sub1"}>Sub Home Page</NavLink>
      <p> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas dignissimos deserunt assumenda, eum tempora asperiores excepturi rerum dolorum dolore, inventore soluta! Hic sit, aut temporibus obcaecati nihil quo suscipit fugiat quaerat quisquam, repellat quidem vel est delectus reiciendis aliquam! Dignissimos ipsum sapiente cumque voluptate sunt. Asperiores quasi laudantium aliquid?
      </p>
      <NavLink to={"/"}>Back to home page</NavLink>
    </div>
  )
}

export default SubHome