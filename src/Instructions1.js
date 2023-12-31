import {React,useState, useRef } from 'react'
import PropTypes from 'prop-types'
import GateBanner from './GateBanner.js'
import InstructionsFirst from './InstructionsFirst.js'
import InstructionsCS from './InstructionsCS.js'
import placeholder from './assets/placeholder.jpg'



const Instructions1 = props => {

    const [page,setPage]=useState(1);
    const insfirstRef = useRef(null);
    const insCSRef = useRef(null);
function toggle(){
if(page == 1)
{
    setPage(2)
    insfirstRef.current.style.display='none';
    insCSRef.current.style.display='block';
}
else{
    setPage(1)
    insfirstRef.current.style.display='block';
    insCSRef.current.style.display='none';   
}
}
  return (
    <div className='instruction-page p-0 m-0'>
        <GateBanner />
        <div className='row'>
            <div className='col-9 m-0 instruction-body p-0'>
                <span ref={insfirstRef}><InstructionsFirst /></span>
                <span ref={insCSRef}><InstructionsCS /></span>
                <div className='instruction-footer text-end'>
                    <div ref={insCSRef} style={{display:'none'}} className='declaration px-4'>
                        <input type='checkbox'/>    "I have read and understood all the instructions. The computer allotted to me is in working condition. I declare that I am not in possession of /not wearing / not carrying any prohibited gadget such as mobile phone, bluetooth devices, any type of watch etc. / any prohibited material in the examination hall. I shall fully abide by the "Code of Conduct for GATE 2021 examination" as mentioned in the Information Brochure, failing which, I shall be liable to be debarred from this Test and/or to disciplinary action, which may include ban from future Tests/Examinations. Impersonation, falsification and any kind of misconduct, will lead to cancellation of my candidature for GATE 2021."
                    </div>
                    <button onClick={toggle}>Next &gt; </button>
                </div>
            </div>
            <div className='col-3 m-0 instruction-student text-center'>
                <img className='student-img' src={placeholder} alt = "Student Place Holder" />
                <div className='fs-5 student-name'>Student Name</div>
            </div>
        </div>
    </div>
  )
}

Instructions1.propTypes = {}

export default Instructions1