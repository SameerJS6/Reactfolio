import React, { useState } from 'react'
import Ripples from 'react-ripples'
import logo from './assets/card-logo.svg'
import bgDesktop from './assets/bg-main-desktop.png'
import bgMobile from './assets/bg-main-mobile.png'
import cardFront from './assets/bg-card-front.png'
import cardBack from './assets/bg-card-back.png'
import completeImg from './assets/icon-complete.svg'

export default function App() {
  const [complete, setComplete] = useState(false)
  const [name, setName] = useState('');
  const [cvc, setCvc] = useState('');
  const [month, setMonth] = useState('');
  const [ccnumber, setCcnumber] = useState('')
  const [year, setYear] = useState('')
  // All Errors 
  const [nameerror, setNameError] = useState(false);
  const [ccerror, setCcerror] = useState(false);
  const [cvcerror, setCvcError] = useState(false);
  const [montherror, setMontherror] = useState(false)
  const [yearerror, setYearerror] = useState(false);

  const regex = (input, e) => {
    const regexpression = /^[0-9]*$/;
    if(!regexpression.test(input)) {
      e.preventDefault()
    }
  }

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const handleChange = (e) => {
    setName(e.target.value);
    setNameError(false);
  }
  const handleCvc = (e) => {
    const input = e.target.value;
    regex(input);
    setCvc(input);
    setCvcError(false)
  }
  const handleMonth = (e) => {
    const input = e.target.value;
    regex(input);
    setMonth(input);
    setMontherror(false);
  }
  const handleYear = (e) => {
    const input = e.target.value;
    regex(input);
    setYear(input);
    setYearerror(false)
  }
  const handleCCNumber = (e) => {
    const input = e.target.value;

    let formattedCardNumber = input.replace(/\s/g, "");
    formattedCardNumber = formattedCardNumber.replace(/\D/g, '');
    formattedCardNumber = formattedCardNumber.replace(/(\d{4})/g, "$1 ");
    formattedCardNumber = formattedCardNumber.trim();

    setCcnumber(formattedCardNumber)
    setCcerror(false);
  }
  const CheckIn = (month, year, name, cvc) => {
    if (month === 0 || month > 12 || month < currentMonth || month === '' || year < currentYear || year === '' || name === '' || cvc === '' || ccnumber === '') {
      setComplete(false)
      alert("Required Information is Blank or Wrong")
    } else {
      setComplete(true)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!complete) {
      month === 0 ? alert("Month Doesn't exists in this Planet, You Idiot") : '';
      month > 12 ? alert(month + " Months Doesn't exists in this Planet, You Idiot") : '';
      month < currentMonth ? alert("Expiration Month Should be higher that Current Month i.e. " + month): '';
      year < currentYear ? alert("Expiration Year Should not be greater than or equal to Current Year i.e. " + currentYear) : '';

      name === '' ? setNameError(true) : setNameError(false);
      cvc === '' ? setCvcError(true) : setCvcError(false);
      month === '' ? setMontherror(true) : setMontherror(false);
      year === '' ? setYearerror(true) : setYearerror(false);
      ccnumber === '' ? setCcerror(true) : setCcerror(false);

      CheckIn(month, year, name, cvc);
    } else {
      setComplete(!complete);
    }
    
  }
  return (
   <main className='grid grid-rows-2 gap-0 md:gap-8 xl:gap-16 lg:grid-cols-2 lg:grid-rows-none lg:items-center min-h-screen lg:px-8 xl:px-16'>
    <div className="absolute lg:fixed -z-10 left-0 h-screen">
      <picture>
        <source media="(min-width: 960px)" srcSet={bgDesktop} />
        <img className="w-screen lg:w-auto" src={bgMobile} alt="Background Image for Mobile" />
      </picture>
    </div> 
    <div className="card-preview | relative bg-slate-900 p-2 md:p-4 lg:p-4">
    
      <div className="card-front | absolute z-10 lg:inset-0 lg:relative text-white bg-lime-600 rounded-2xl max-w-md 2xl:mx-auto shadow-lg ">
        <img className="shadow-lg" src={cardFront} alt="Front Side of Credit Card" />
        <img className='logo | absolute top-4 left-6 lg:top-8 lg:left-8'src={logo} alt="Card Logo" />
        <span className='absolute left-6 top-1/2 text-2xl lg:left-8 lg:top-2/4 tracking-widest'>{ccnumber === '' ? '0000 0000 0009 8888' : ccnumber}</span>
        <span className='absolute left-6 bottom-6 md:text-base lg:left-8 text-sm lg:bottom-8 tracking-widest uppercase'>{name !== ''? name :"Jane Appleseed"}</span>
        <span className='absolute right-6 bottom-6 text-sm md:text-base lg:right-8 lg:bottom-8 tracking-widest'>{month >= 10 ? month : "0"+month} / {year === '' ? (currentYear + 2).toLocaleString().slice(3,5) : year.slice(2,4)}</span>
      </div>
      <div className="card-back | absolute lg:inset-0 lg:relative text-white lg:mt-8 ml-auto bg-lime-600 rounded-2xl max-w-md">
        <img src={cardBack} alt="Back Side of Credit Card" />
        <span className='cvc | absolute right-12 text-sm md:text-lg lg:right-16 tracking-widest'>{cvc !== '' ? cvc : '123'}</span>
      </div>
    </div>

    <div className='form-container | bg-cyan-500 p-4 lg:p-8 rounded-2xl shadow-2xl md:mx-auto lg:mx-0 overflow-hidden'>

      <form className='flex flex-col border-2 gap-4 border-red-600 max-w-lg'>
        <div className={`flex flex-col gap-2 bg-yellow-500 p-1 md:p-2 ${complete ? 'hidden ' : ""}`}>
          <label htmlFor="card-name">Cardholder Name</label>
          <input className={`text-lg rounded-md p-2 md:px-4 transition-all duration-300 outline-none outline-offset-0 outline-transparent ${nameerror ? 'outline-red-500 error' : ''}`} type="text" id="card-name" value={name} 
          onChange={ handleChange } maxLength={28} required placeholder='Jane Appleseed'/>
          <span className={`text-red-700 text-xs opacity-0 translate-y-2 transition-transfrom duration-300 font-medium ${nameerror ? 'show translate-y-0' : ''}`}>Can't be blank</span>
        </div>

        <fieldset className={`bg-lime-500 border-none p-1 md:p-2 grid gap-2 ${complete ? 'hidden' : ""}`}>
          <legend className='invisible absolute -top-full -z-10'>Card Number</legend>
          <label htmlFor="cc-1">Card Number</label>
              <input className={`rounded-md outline-none outline-offset-0 outline-transparent p-2 md:px-4 text-lg transition-all duration-300 ${ccerror ? "outline-red-500 error" : ''}`} value={ ccnumber } onChange={ handleCCNumber } type="tel" id="cc" maxLength={19} required pattern='[0-9]{19}' aria-label="Credit Card Number" placeholder='e.g. 1234 5678 9123 0000' />
            <span className={`text-red-600 opacity-0 translate-y-2 transition-transform duration-300 text-xs font-medium ${ccerror ? "show translate-y-0" : '' }`}>Can't blank</span>
        </fieldset>

        <div className={`input-row | flex gap-4 ${complete ? 'hidden' : ""}`}>
            <fieldset className=' flex flex-col gap-2 bg-blue-900 border-none p-1 md:p-2 overflow-hidden w-1/2'>
              <legend className='invisible absolute -top-full -z-10'>EXP. DATE (MM/YY)</legend>
              <label className="" htmlFor="expiration-month">EXP. DATE (MM/YY)</label>
              <div className='flex justify-around gap-2'>
              
                <input className={`rounded-md outline-none outline-offset-0 outline-transparent text-lg p-2 md:px-4 w-1/2 transition-all duration-300 ${montherror ? "outline-red-500 error" : ''}`} value = {month} onChange={handleMonth} type="tel" id="expiration-month" maxLength={2} required pattern='[0-2]{2}' placeholder='MM'/>
                <input className={`rounded-md outline-none outline-offset-0 outline-transparent text-lg p-2 md:px-4 w-1/2 transition-all duration-300 ${yearerror ? "outline-red-500 error" : ''}`} value = {year} onChange={handleYear} type="tel" id="expiration-year" maxLength={4} required pattern='[0-9]{4}' placeholder='YY'/>
               
              </div>
              <span className={`text-red-500 text-xs opacity-0 translate-y-2 font-medium transition-all duration-300 ${montherror ? 'show translate-y-0': yearerror ? 'show translate-y-0' :''}`}>{month === '' ? "Month Can't be blank" : year === '' ? "Year Can't be blank" : ''}</span>
            </fieldset>

          <div className="cvc-container | flex flex-col justify-center gap-2 p-1 md:p-2 w-1/2 bg-cyan-300 shadow">
            <label htmlFor="cvc">CVC</label>
            <input className={`rounded-md text-lg p-2 md:pl-4 transition-all duration-300 outline-none outline-offset-0 outline-transparent ${cvcerror ? 'outline-red-500' : ''}`} type="tel" id="cvc" maxLength={3} value={cvc} onChange={ handleCvc } required pattern='[0-9]{3}' aria-label='Credit Card CVC' placeholder='123'/>
          <span className={`text-red-700 text-xs opacity-0 translate-y-2 transition-transfrom duration-300 font-medium ${cvcerror ? 'show translate-y-0'  : ''}`}>Can't be blank</span>
          </div>
        </div> 

        <div className={`thank-you | grid gap-8 justify-center ${complete ? '' : "hidden"}`}>
          <img className="mx-auto" src={completeImg} alt="Complete Sign" />
          <p>We've added your card details</p>
        </div> 

        <Ripples>
          <button className="submit-btn | border-2 border-transparent w-full rounded-lg text-lg py-2 px-4 shadow-md text-white font-medium" type="submit" onClick={ handleSubmit }>Confirm</button>
        </Ripples>
      </form>
       
      

      
    </div>
   </main>
  )
}
