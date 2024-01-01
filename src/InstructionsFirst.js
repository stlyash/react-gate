import React from 'react'
import up from './assets/Up.png'
import down from './assets/Down.png'
import qstatus from './assets/qstatus.png'

const InstructionsFirst = (props) => {
  return (
    props.pg && <>
        <div className='instruction-label'>Instructions</div>
        <div className='instruction-text'  style={{height:"72vh"}}>
            <div className='instruction-head text-center'>Read the following instructions carefully</div>
            <ol className='inlist1'>
            <div className='instruction-subhead'>General Instructions:</div>
                <li>Total duration of the examination is 180 minutes. Calculator is available on top, right hand side of the screen.</li>
                <li>The clock will be set at the server. The countdown timer in the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.</li>
                <li>The Question Palette displayed on the right hand side of screen will show the status of each question using one of the following symbols:</li>
                <img src={qstatus} alt='question-status-instruction'/>
                <li>You can click on the "&gt;" arrow which appears to the left of question palette to collapse the question palette thereby maximizing the question window. To view the question palette again, you can click on "&lt;" which appears on the right side of question window.</li>
                <li>You can click on <img src={down} alt='down arrow'/> to navigate to the bottom and <img src={up} alt='up arrow'/> to navigate to the top of the question area, without scrolling.</li>
            <div className='instruction-subhead'>Navigating to a Question:</div>
                <li>To answer a question, do the following:</li>
                <ol className='inlist2'>
                    <li>Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly.</li>
                    <li>Note that using this option does NOT save your answer to the current question.</li>
                    <li>Click on Save & Next to save your answer for the current question and then go to the next question.</li>
                    <li>Click on Mark for Review & Next to save your answer for the current question, mark it for review, and then go to the next question.</li>
                </ol>

            <div className='instruction-subhead'>Answering a Question :</div>
                <li>Procedure for answering a multiple choice type question:</li>
                <ol className="inlist2">
                    <li>To select your answer, click on the button of one of the options</li>
                    <li>To deselect your chosen answer, click on the button of the chosen option again or click on the Clear Response button</li>
                    <li>To change your chosen answer, click on the button of another option</li>
                    <li>To save your answer, you MUST click on the Save & Next button</li>
                    <li>To mark the question for review, click on the Mark for Review & Next button.</li>
                </ol>

                
                <li>Procedure for answering a multiple select type question (MSQ):</li>
                <ol className="inlist2">
                    <li>Choose your answer by selecting one or more than one, out of 4 choices given below the question and click the checkbox placed before each of the selected choice(s).</li>
                    <li>To deselect one or more of your selected choice(s), either click on the checkbox of the choice(s) again or click on the Clear Response button.</li>
                    <li>To change a particular selected choice, deselect this choice that you want to change and click on the checkbox of another choice.</li>
                </ol>

                
                <li>Procedure for answering a numerical answer type (NAT) question:</li>
                <ol className="inlist2">
                    <li>To enter a numerical answer, use the virtual numeric keypad that appears below the question.</li>
                    <li>To clear your answer, click on the Clear Response button.</li>
                </ol>

                <li>To change your answer to a question that has already been answered, first select that question for answering and then follow the procedure for answering that type of question.</li>
            <div className='instruction-subhead'>Navigating through sections:</div>
                <li>Sections in this question paper are displayed on the top bar of the screen. Questions in a section can be viewed by clicking on the section name. The section you are currently viewing is highlighted.</li>
                <li>After clicking the Save & Next button on the last question for a section, you will automatically be taken to the first question of the next section.</li>
                <li>You can shuffle between sections and questions anytime during the examination as per your convenience only during the time stipulated.</li>
                <li>Candidate can view the corresponding section summary as part of the legend that appears in every section above the question palette.</li>
            </ol>
        </div>
    </>
  )
}

export default InstructionsFirst