import React from 'react'

const SignUp = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container d-flex flex-row justify-content-center" style={{ height: '800px', width: '800px' }}>
        <form style={{ width: '650px' }}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button type="submit" className="btn btn-primary">SIgn Up</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default SignUp; 