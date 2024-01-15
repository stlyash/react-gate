import {React,useState} from 'react'
import PropTypes from 'prop-types'
import GateBanner from './GateBanner.js'
import InstructionsFirst from './InstructionsFirst.js'
import InstructionsCS from './InstructionsCS.js'
import placeholder from './assets/placeholder.jpg'
import {Link} from "react-router-dom";



const Instructions1 = props => {

    const [pageFir,setFir]=useState(1);
    const [examLink,setExamLink]=useState("/instructions");
    const [pageSec,setSec]=useState(0);
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const handleCheckboxClick = () => {
        setCheckboxChecked(!checkboxChecked);
      };
    function toggle(){
        setFir(pageFir==1 ? 0 : 1);
        setSec(pageSec==1 ? 0 : 1);
    }
function readyclick(){
    if(checkboxChecked)
    console.log(1)
}
  return (
    <div className='instruction-page p-0 m-0'>
        <GateBanner />
        <div className='row'>
            <div className='col-9 m-0 instruction-body p-0'>
                <InstructionsFirst pg = {pageFir}/>
                <InstructionsCS pg = {pageSec}/>
                <div className='instruction-footer text-start' 
                style={pageFir==1?{height:"14vh",transform:"translateY(-3.6vh)"}:{height:"31vh",transform:"translateY(-3.6vh)"}}>
                    <div className='declaration px-4' style={pageFir==1?{display:"none"}:{display:"block"}}>
                        <input type='checkbox' onClick={handleCheckboxClick} />    "I have read and understood all the instructions. The computer allotted to me is in working condition. I declare that I am not in possession of /not wearing / not carrying any prohibited gadget such as mobile phone, bluetooth devices, any type of watch etc. / any prohibited material in the examination hall. I shall fully abide by the "Code of Conduct for GATE 2021 examination" as mentioned in the Information Brochure, failing which, I shall be liable to be debarred from this Test and/or to disciplinary action, which may include ban from future Tests/Examinations. Impersonation, falsification and any kind of misconduct, will lead to cancellation of my candidature for GATE 2021."
                    </div>
                    <button className='prevnex' onClick={toggle} style={pageSec==1?{}:{marginLeft:"85%"}}>{pageFir == 1 ? "Next >" : "< Prev"}</button>
                    <Link to={checkboxChecked?"/exam":"/instructions"}><button onClick={readyclick} style={checkboxChecked?{opacity:1,cursor:'pointer'}:{opacity:'0.6',cursor:'not-allowed'}} className='ready'>I am Ready to Begin</button></Link>
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