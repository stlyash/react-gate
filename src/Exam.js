import React from 'react'
import PropTypes from 'prop-types'
import GateBanner from './GateBanner.js'
import placeholder from './assets/placeholder.jpg'
import question from './assets/questionPaper.png'
import infoIcon from './assets/infoButton.png'

const Exam = props => {
  return (
    <div className='p-0 m-0'>
        <GateBanner />
        <div className='row sub-banner'>
            <div className='col-6 subanner-heading'>CS 2 Computer Science Information Technology</div>
            <div className='col-6 text-end'>
                <div style={{display:'inline'}} className='subanner-question'>
                    <img src={question} alt='question paper' />
                    Question Paper</div>
                <div style={{display:'inline'}} className='subanner-instruction'>
                    <img src={infoIcon} alt='info icon' />
                    View Instructions</div>
            </div>
        </div>
        <div className='exam-body'>
          <div className='exam-main'>
            <div className='exam-calculator'>
            <div className='indiv'>Question</div><div className='indiv'>Calculator</div>
            </div>
            <div className='exam-time'>
              <div className='indiv'>Sections</div><div className='indiv'>Time Left</div>
            </div>
            <div className='exam-section'>
            <div className='indiv'>Section Button</div><div className='indiv'>Arrow</div>
            </div>
            <div className='exam-type'>
            <div className='indiv'>Question Type:</div><div className='indiv'>Negative Marks</div>
            </div>
            <div className='exam-question'>
              <div className='indiv'>Question No. 1</div>
            </div>
            <div className='textncontrol'>
            <div className='exam-text'>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
              <div>The Whole Question</div>
            </div>
            <div className='exam-control'>
              <button>Mark for Review & Next</button>
              <button>Clear Response</button>
              <button>Save & Next</button>
            </div>
            </div>
          </div>
          <div className='exam-right'>

          </div>
        </div>
    </div>
  )
}

Exam.propTypes = {}

export default Exam