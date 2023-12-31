import React from 'react'
import up from './assets/Up.png'
import down from './assets/Down.png'
import qstatus from './assets/qstatus.png'

const InstructionsCS = () => {
  return (
    <>
        <div className='instruction-label'>Other Important Instructions</div>

        <div className='instruction-text'>
            <b><div className='instruction-head text-center pb-0'>CS Paper specific instructions for online exam</div></b>
            <u><b><div className='instruction-head text-center p-0 m-0'>Please Read the Instructions Carefully (for Candidates)</div></b></u>

            <ol className='inlist1'>
            
                <li>This question paper has 65 questions totaling 100 marks. It consists of 2 sections, General Aptitude (GA) section for 15 marks and the subject specific section (CS) for 85 marks. Both the sections are compulsory.</li>
                <li>The GA section consists of 10 questions carrying 15 marks, out of which 5 questions carry 1 mark each, while the remaining 5 questions carry 2 marks each.</li>
                <li>The subject specific CS section consists of 55 questions, out of which 25 questions carry 1 mark each, while the remaining 30 questions carry 2 marks each.</li>
                <li>The candidates should use the USEFUL DATA given in the question for answering the question.</li>
                <li>The question paper consists of some Multiple Choice Questions (MCQ). The remaining questions are Multiple Select Questions (MSQ) and/or Numerical Answer Type (NAT) questions.</li>
            
                
                <ol className='inlist2'>
                    <li>MCQs have four choices out of which ONLY ONE is the correct answer. The candidate has to choose the correct answer by clicking with the help of a mouse on the radio button (o) placed before the choice.</li>
                    <li>MSQs have four choices out of which ONE or MORE than ONE choice(s) is/are correct. The candidate is required to consider all of the choices and determine the correct answer(s). Then select ONLY the CORRECT choices by clicking with the help of a mouse on the respective button(s) (□) placed before the choice(s).</li>
                    <li>For NAT questions, a numerical answer should be entered with the help of the mouse using the numeric key pad that appears on the monitor/screen. Do NOT use physical keyboard.</li>
                    <li>ALL questions appear in a random manner. Candidate can find the type of the question and the corresponding marks displayed above the individual question.</li>
                </ol>

                <li>All questions that are not attempted will result in ZERO marks.</li>
            
                
                <ol className="inlist2">
                    <li>However, wrong answers for multiple choice type questions (MCQ) will result in NEGATIVE marks. For MCQ, a wrong answer will result in deduction of ⅓ marks for a 1-mark question and ⅔ marks for a 2-mark question.</li>
                    <li>There is NO negative marking for multiple select questions (MSQ) and numerical answer type (NAT) questions.</li>
                    <li>There is NO partial marking for MSQ and NAT.</li>
                    <li>For MSQ, to get full credit, the candidate needs to select ALL the correct choice(s) ONLY and NO wrong choice(s).</li>
                </ol>
                
                <li>Your answers will be updated and saved on the server periodically and also at the end of the examination. The examination will stop automatically at the end of 180 minutes. A candidate is NOT allowed to leave the examination hall till the completion of the examination.</li>
                
                <li>Charts, graph sheets, books, papers, loose sheets, any type of watch, box/pouch, calculators, electronic gadgets and mathematical tables are NOT allowed in the examination hall.</li>
               
                <li>Candidates may use the scribble pad provided to them in the examination hall for all rough work. Write name and registration number on the scribble pad before using it. The candidate can possess ONLY one scribble pad at any point of time. If the candidate requires a second scribble pad, the first scribble pad MUST be returned to the invigilator. Any scribble pad in the possession of the candidate MUST be returned to the invigilators after the end of the examination.</li>
           
            </ol>
        </div>
    </>
  )
}

export default InstructionsCS