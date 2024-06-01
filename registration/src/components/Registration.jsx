import React from 'react'
import './Reg.css'

const Registration = () => {
  return (
    <div>
      <center>
      <div className="icon">
        
        <div className="head">
            <h2>STUDENT REGISTRATION FORM</h2>
        </div>
        <div className="inputs">
        <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="text" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>

        </div>
        <div className="gender">
        <select class="form-select" aria-label="Default select example">
  <option selected>Select your Gender</option>
  <option value="1">Male</option>
  <option value="2">Female</option>
  <option value="3">Other</option>
</select>
        </div>
        <div className="marks">
          <input type="text" placeholder='mark 1' />
          <input type="text" placeholder='mark 2' />
          <input type="text" placeholder='mark 3' />
        </div>
        <div className="age"></div>
        



      </div>
      </center>
    </div>
  )
}

export default Registration
