import React from 'react'
import PropTypes from 'prop-types'
import GateBanner from './GateBanner.js'
import InputMethod from './InputMethod.js'
import placeholder from './assets/placeholder.jpg'
import question from './assets/questionPaper.png'
import infoIcon from './assets/infoButton.png'
import calc from './assets/calct7.png'
import { useEffect, useState } from 'react'
import qj from './assets/2022/cs/cs2022details.json'
import InstructionsFirst from './InstructionsFirst.js'
import st1 from './assets/status/st1.jpg'
import st2 from './assets/status/st2.jpg'
import st3 from './assets/status/st3.jpg'
import st4 from './assets/status/st4.jpg'
import st5 from './assets/status/st5.jpg'

const Exam = props => {
    const initialCountdown = 180 * 60; // 180 minutes converted to seconds
    const [countdown, setCountdown] = useState(initialCountdown);
    
    const [qdata] = useState(qj);
    const [qindex, setqindex] = useState(0);
    const [gacolor, setgacolor] = useState('#4E85C5');
    const [cscolor, setcscolor] = useState('white');

    const [qimage, setqimage] = useState(require('./assets/2022/cs/cs_question_2022--'+(qdata?.[qindex]?.ques || 'Unknown').toString()+'.png'));
  
    const [gaqstatus, setGaqstatus] = useState([1,2,3,4,5,1,1,1,1,1]);
    const [csqstatus, setCsqstatus] = useState([1,2,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
    
    useEffect(() => {
      // Exit the effect if countdown reaches zero
      if (countdown <= 0) {
        return;
      }
  
      // Update the countdown every second
      const intervalId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
  
      // Clean up the interval when the component unmounts or countdown reaches zero
      return () => clearInterval(intervalId);
    }, [countdown]);
  
    // Format the seconds into MM:SS
    const formatTime = (timeInSeconds) => {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(seconds).padStart(2, '0');
      return `${formattedMinutes}:${formattedSeconds}`;
    };

    useEffect(() => { 
      if(qindex < 9){
        setgacolor('#4E85C5');
        setcscolor('white')
      }
      else{
        setcscolor('#4E85C5');
        setgacolor('white')
      }
    }, [qindex]); 

    function next(){
      if(qindex < 64){
        setqimage(require('./assets/2022/cs/cs_question_2022--'+(qdata?.[qindex]?.ques + 1 || 'Unknown').toString()+'.png'))
        setqindex(qindex+1);
      }
    }

    
    function previous(){
      if(qindex >0){
        setqimage(require('./assets/2022/cs/cs_question_2022--'+(qdata?.[qindex]?.ques - 1 || 'Unknown').toString()+'.png'))
        setqindex(qindex-1);
    }
    }

    function goga(){
      if(qindex > 9){
        setqindex(0);
        setqimage(require('./assets/2022/cs/cs_question_2022--'+(qdata?.[0]?.ques || 'Unknown').toString()+'.png'))
      }
      }
    function gocs(){
      if(qindex <= 9){
        setqindex(10);
        setqimage(require('./assets/2022/cs/cs_question_2022--'+(qdata?.[10]?.ques || 'Unknown').toString()+'.png'))
    }
      }
      function gotoq(i){
        console.log("passed",i)
        setqimage(require('./assets/2022/cs/cs_question_2022--'+(qdata?.[i]?.ques || 'Unknown').toString()+'.png'))
        setqindex(i);
      }

      const gaQuestionStates = () => {
        return (
          <>
            {gaqstatus.map((i,ind) => (
              <div className="containertry listed" key={`status${ind}`}>
                <div className='imgstat' onClick={() => gotoq(ind)}>
              <img className='imgtry imgstat'  src={require(`./assets/status/st${i}.jpg`)} alt={`status${i}`}/>
              <div className="centeredtry censtat" style={i===1?{color:'black'}:{color:'white'}}>{ind+1}</div>
              </div></div>
            ))}
          </>
        );
      }

      const csQuestionStates = () => {
        return (
          <>
            {csqstatus.map((i,ind) => (
            <div className="containertry listed" key={`status${ind}`}>
              <div className='imgstat' onClick={() => gotoq(ind+10)}>
              <img className='imgtry imgstat'  src={require(`./assets/status/st${i}.jpg`)} alt={`status${i}`}/>
              <div className="centeredtry censtat" style={i===1?{color:'black'}:{color:'white'}}>{ind+11}</div>
            </div> </div>
            ))}
          </>
        );
      }

  return (
    <div className='p-0 m-0'>
        <GateBanner />
        <div className='row sub-banner'>
            <div className='col-6 subanner-heading'>CS 2 Computer Science Information Technology</div>
            <div className='col-6 text-end'>
                <div style={{display:'inline'}} className='subanner-question' data-bs-toggle="modal" data-bs-target="#staticBackdrop0">
                    <img src={question} alt='question paper' />
                    Question Paper</div>
                <div style={{display:'inline'}} className='subanner-instruction' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <img className='calc-info' src={infoIcon} alt='info icon' />
                    View Instructions</div>
            </div>
        </div>
        <div className="modal fade" id="staticBackdrop0" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2 className="modal-title fs-5" id="staticBackdropLabel">Question Paper</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  <iframe title="question Paper" src="https://drive.google.com/file/d/17nmrLNezouGzFGNr3ddjCmHU_1AgfXan/preview" width="100%" height="480rem" allow="autoplay"></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2 className="modal-title fs-5" id="staticBackdropLabel">Instructions</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  <InstructionsFirst pg = {1}/>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="calcmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog draggable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2 className="modal-title fs-5" id="staticBackdropLabel">Calculator</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  <iframe title="calculator" src="https://www.tcsion.com/OnlineAssessment/ScientificCalculator/Calculator.html" width="101%" height="350rem"></iframe>
                  </div>
                </div>
              </div>
            </div>
            
        <div className='exam-body row p-0 m-0'>
          <div className='exam-main col-9'>
            <div className='exam-calculator row'>
              <div className='col-6 p-0 m-0'>
                <div className='indiv calc-l-arrow'>&#x25C0;</div>
                <div className='indiv pt-1'>
                  <button className='firstib'>CS Computer Science... <img className='calc-info' src={infoIcon} alt='info icon' />
                  </button></div>
              </div>
              <div className='col-6 calcp text-end p-0 m-0'>
                <div className='indiv calc-r-arrow'>&#x25B6;</div>
                <div className='indiv'>
                  <button style={{border:'none'}} data-bs-toggle="modal" data-bs-target="#calcmodal"><img style={{height:'0.65cm'}} src={calc} alt='calculator' /></button>
                </div>
              </div>
            </div>
            <div className='exam-time row'>
              <div className='indiv secsec col-6'>Sections</div>
              <div className='indiv timl secsec col-6 text-end' style={{paddingRight:'0.65cm'}}>Time Left: {formatTime(countdown)}</div>
            </div>
            <div className='exam-section row p-0 m-0'>
              <div className='col-10'>
                <div className='indiv calc-l-arrow'>&#x25C0;</div>
                <button onClick={goga} style={{backgroundColor:gacolor,color:cscolor}} className='gogab'>General Aptitude <img className='calc-info' src={infoIcon} alt='info icon' /></button>
                <button onClick={gocs} style={{backgroundColor:cscolor,color:gacolor}} className='gocsb'>CS Computer Science... <img className='calc-info' src={infoIcon} alt='info icon' /></button>
              </div>
              <div className='col-2 text-end'>
                <div className='indiv calc-r-arrow2'>&#x25B6;</div>
              </div>
            </div>
            <div className='exam-type row pt-1'>
            <div className='col-6 qtype'>
              <div className='indiv'>Question Type: {(qdata?.[qindex]?.type || 'Unknown').toUpperCase()}</div>
            </div>
            <div className='col-6 text-end qmarks'>
              <div className='indiv'>Marks for Correct Answer: <span style={{color:'#10de43',fontSize:'0.9rem'}}>{(qdata?.[qindex]?.mar || 'Unknown')}</span> </div>
              <div className='indiv' style={{paddingRight:'0.4cm'}}>| Negative Marks: <span style={{color:'red',fontSize:'0.9rem'}}>{(qdata?.[qindex]?.type || 'Unknown')[1]==='c'?((qdata?.[qindex]?.mar || 0).toString()+"/3 "):0}</span></div>
            </div>
            
            
            </div>
            <div className='exam-question'>
              <div className='indiv quesno'>Question No. {(qdata?.[qindex]?.ques || 'Unknown')}</div>
            </div>


            <div className='textncontrol'>
            <div className='exam-text'>
              <img style={{width:'90%',maxWidth:'30cm'}} src={qimage} alt='question'/>
              <InputMethod typ={qdata?.[qindex].type} />
            </div>


            <div className='exam-control row'>
              <div className='col-6'>
                <button onClick={next} className='ctlbtn mfr'>Mark for Review & Next</button>
                <button className='ctlbtn cr'>Clear Response</button>
              </div>
              <div className='col-6 text-end'>
                <button  className='ctlbtn pr' onClick={previous} >Previous</button>
                <button  className='ctlbtn sv' onClick={next}>Save & Next</button>
              </div>
              
              
            </div>
            </div>
          </div>
          <div className='exam-right col-3 m-0 p-0'>
            <img className='exam-placeholder' src={placeholder} alt='student' />
            <div className='indiv exam-sname'>Student Name</div>
            <div className='status-panel'>
              <div className='stats'>
                <div className='container status-stat'>
                  <div className='row'>
                    <div className='grid-cent'>
                        <div className="containertry">
                          <img className='imgtry' src={st5} alt="Snow" style={{width:'100%'}} />
                          <div className="centeredtry" style={{color:'white'}}>35</div>
                        </div>  
                          <div className="statex" style={{color:'black'}}>Answered</div>

                    </div>
                    <div className='grid-cent'>
                    <div className="containertry">
                      <img className='imgtry' src={st2} alt="Snow" style={{width:'100%'}} />
                      <div className="centeredtry" style={{color:'white'}}>45</div>
                    </div>
                    <div className='status-text'>Not Answered</div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='grid-cent'>
                    <div className="containertry">
                      <img className='imgtry' src={st1} alt="Snow" style={{width:'100%'}} />
                      <div className="centeredtry" style={{color:'black'}}>36</div>
                    </div>                    
                    <div className='status-text'>Not Visited</div>
                    </div>
                    <div className='grid-cent'>
                    <div className="containertry">
                      <img className='imgtry' src={st3} alt="Snow" style={{width:'100%'}} />
                      <div className="centeredtry" style={{color:'white'}}>14</div>
                    </div>                    
                    <div className='status-text'>Marked for Review</div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12 grid-cent' style={{width:'96%'}}>
                      <div className="containertry">
                      <img className='imgtry' src={st4} alt="Snow" style={{width:'100%'}} />
                      <div className="centeredtry" style={{color:'white'}}>45</div>
                    </div>                      
                      <div className='status-text'>Answered & Marked for Review (will also be evaluated)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='status-section'>
                General Aptitude
              </div>
              <div className='row'>
              {gaQuestionStates()}</div>

              <div className='status-section'>
                Computer Science
              </div>

              <div className='row'>
              {csQuestionStates()}</div>

            </div>
            <div className='submit-button'></div>
          </div>
        </div>

    </div>
  )
}

Exam.propTypes = {}

export default Exam