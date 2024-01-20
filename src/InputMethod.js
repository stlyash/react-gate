import React from 'react'
import PropTypes from 'prop-types'

const InputMethod = props => {
    if (props.typ === "nat")
    {return (
        <div className='text-center' style={{backgroundColor:'#edebeb',width:'6cm',margin:'0.2cm',marginLeft:'3cm',padding:'0.25cm'}}>
            <input className='nattxtbox' type='text' />
            <button className='inputbut'>Backspace</button> <br />
            <button className='inputbut norinp'>7</button> <button className='inputbut norinp'>8</button> <button className='inputbut norinp'>9</button> <br />
            <button className='inputbut norinp'>4</button> <button className='inputbut norinp'>5</button> <button className='inputbut norinp'>6</button> <br />
            <button className='inputbut norinp'>1</button> <button className='inputbut norinp'>2</button> <button className='inputbut norinp'>3</button> <br />
            <button className='inputbut norinp'>0</button> <button className='inputbut norinp'>.</button> <button className='inputbut norinp'>-</button> <br />
            <button className='inputbut norinp'>&#x2190;</button> <button className='inputbut norinp'>&#x2192;</button> <br />
            <button className='inputbut'>Clear All</button> <br />
        </div>
    )}
    else if (props.typ === "mcq") {return (
        <div style={{backgroundColor:'#edebeb',width:'6cm',margin:'0.2cm',marginLeft:'3cm',padding:'0.25cm'}}>
            <form>
                <label className='option-text'>
                    <input type="radio" name="options" value="option1" /> A
                </label>

                <label className='option-text'>
                    <input type="radio" name="options" value="option2" /> B
                </label>

                <label className='option-text'>
                    <input type="radio" name="options" value="option3" /> C
                </label>

                <label className='option-text'>
                    <input type="radio" name="options" value="option4" /> D
                </label>
            </form>
        </div>
    )}
    else {return (
        <div style={{backgroundColor:'#edebeb',width:'6cm',margin:'0.2cm',marginLeft:'3cm',padding:'0.25cm'}}>
    <form>
        <label for="checkbox1" className='option-text'>
            <input type="checkbox" id="checkbox1" name="checkbox1" /> A
        </label>

        <label for="checkbox2" className='option-text'>
            <input type="checkbox" id="checkbox2" name="checkbox2" /> B
        </label>

        <label for="checkbox3" className='option-text'>
            <input type="checkbox" id="checkbox3" name="checkbox3" /> C
        </label>

        <label for="checkbox4" className='option-text'>
            <input type="checkbox" id="checkbox4" name="checkbox4" /> D
        </label>

    </form>
        </div>
    )
    }
}

InputMethod.propTypes = {String}

export default InputMethod