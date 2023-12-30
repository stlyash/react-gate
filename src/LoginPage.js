import React from 'react'
import PropTypes from 'prop-types'
import placeholder from './assets/placeholder.jpg'
import kbrd from './assets/keyboard.png'
import lock from './assets/lock.png'
import user from './assets/user.png'

const LoginPage = props => {
  return (
    <div className='login-page'>
        <div className="m-0 p-0">
        <div className="sub-nav row m-0 p-0 align-middle">
            <div className="col-8 login-nav text-start">
                <div className='whit fs-5'>System Name:</div>
                <div className='yell fs-1'>C001</div>
                <div className='whit pb-4 fs-7'>Kindly contact the invigilator if there are any discrepancies in the Name and Photograph displayed on the screen or if the photograph is not yours</div>
            </div>
            <div className="col-2 text-end login-nav text-end">
                <div className='whit fs-5'>Candidate Name:</div>
                <div className='yell fs-1'>John Smith</div>
                <div className='whit fs-5'>Subject: <span className='yell'>CS</span></div>
            </div>
            <div className="col-2 text-center">
            <img className='placeholder-img' src={placeholder} alt = "Student Place Holder" />
            </div>
        </div>
        <div className="loginform m-3 text-start">
                <div className="card">
                    <div className='login-label fw-bold'>
                        Login
                    </div>
                    <div className="row m-3 align-items-center text-center row-grid">
                        <div className="col-2">
                        <img src={user} className='lock-img' alt='lock image'/>
                        </div>
                        <div className="col-8">
                            <input type="text" />
                        </div>
                        <div className="col-2">
                         <img src={kbrd} alt='keyboard image'/>
                        </div>
                    </div>
                    <div className="row m-3 align-items-center text-center row-grid">
                        <div className="col-2">
                        <img src={lock} className='lock-img' alt='lock image'/>
                        </div>
                        <div className="col-8">
                            <input type="password" />
                        </div>
                        <div className="col-2">
                        <img src={kbrd} alt='keyboard image'/>
                        </div>
                    </div>

                    <select class="form-select form-select-sm">
                        <option selected>-Subject-</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                    </select>

                    <select class="form-select form-select-sm">
                        <option selected>-Year-</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <button className='m-3 btn btn-primary'>Sign In</button>
                </div>
        </div>
        </div>
        </div>
  )
}

LoginPage.propTypes = {}

export default LoginPage