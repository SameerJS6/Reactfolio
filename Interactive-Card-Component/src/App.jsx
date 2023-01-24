import React from 'react'
import Ripples from 'react-ripples'
import logo from './assets/card-logo.svg'
import cardFront from './assets/bg-card-front.png'
import cardBack from './assets/bg-card-back.png'
import complete from './assets/icon-complete.svg'

export default function App() {
  return (
   <main className='grid grid-rows-2 gap-0 md:gap-8 xl:gap-16 lg:grid-cols-2 lg:grid-rows-none lg:items-center min-h-screen lg:px-8 xl:px-16'>
    <div className="card-preview | relative bg-slate-900 p-2 md:p-4 lg:p-4">
      <div className="card-front | absolute z-10 lg:inset-0 lg:relative text-white bg-lime-600 rounded-2xl max-w-md 2xl:mx-auto shadow-lg">
        <img className="shadow-lg" src={cardFront} alt="Front Side of Credit Card" />
        <img className='logo | absolute top-4 left-6 lg:top-8 lg:left-8'src={logo} alt="Card Logo" />
        <span className='absolute left-6 top-1/2 text-2xl lg:left-8 lg:top-2/4 tracking-widest'>0000 0000 0009 8888</span>
        <span className='absolute left-6 bottom-6 md:text-base lg:left-8 text-sm lg:bottom-8 tracking-widest uppercase'>Jane Appleseed</span>
        <span className='absolute right-6 bottom-6 text-sm md:text-base lg:right-8 lg:bottom-8 tracking-widest'>01/25</span>
      </div>
      <div className="card-back | absolute lg:inset-0 lg:relative text-white lg:mt-8 ml-auto bg-lime-600 rounded-2xl max-w-md">
        <img src={cardBack} alt="Back Side of Credit Card" />
        <span className='cvc | absolute right-12 text-sm md:text-lg lg:right-16 tracking-widest'>123</span>
      </div>
    </div>

    <div className='form-container | bg-cyan-500 p-4 lg:p-8 rounded-2xl shadow-2xl md:mx-auto lg:mx-0 overflow-hidden'>
      <form className='flex flex-col border-2 gap-4 border-red-600 max-w-lg'>
        <div className="flex flex-col gap-2 bg-yellow-500 p-1 md:p-2">
          <label htmlFor="card-name">Cardholder Name</label>
          <input className="text-lg rounded-md p-2 md:px-4 transition-all duration-300" type="text" id="card-name" required placeholder='Jane Appleseed'/>
          <span className="text-red-700 text-xs font-medium">Can't be blank</span>
        </div>
        <fieldset className='bg-lime-500 border-none p-1 md:p-2 grid gap-2'>
          <legend className='invisible absolute -top-full -z-10'>Card Number</legend>
          <label htmlFor="cc-1">Card Number</label>
            <div className='card-number | flex border-4 rounded-lg p-2 md:px-4 bg-white border-green-400 text-lg transition-all duration-300'>
              <input className='' type="tel" id="cc-1" maxLength={4} required pattern='[0-9]{4}' aria-label="Credit Card First 4 Digits" placeholder='1234' />
              <input className='' type="tel" maxLength={4} aria-label="Credit Card Second 4 Digits" placeholder='5678'/>
              <input className='' type="tel" maxLength={4} aria-label="Credit Card Second Last 4 Digits" placeholder='9123'/>
              <input className='' type="tel" maxLength={4} aria-label="Credit Card Last 4 Digits" placeholder='0000'/>
            </div>
            <span className='text-red-600 text-xs font-medium'>Wrong format, numbers only</span>
        </fieldset>

        <div className="input-row | flex gap-4">
            <fieldset className=' flex flex-col gap-2 bg-blue-900 border-none p-1 md:p-2 overflow-hidden w-1/2'>
              <legend className='invisible absolute -top-full -z-10'>EXP. DATE (MM/YY)</legend>
              <label className="" htmlFor="expiration-month">EXP. DATE (MM/YY)</label>
              <div className='flex justify-around gap-2'>
              
                <input className='rounded-md text-lg p-2 md:px-4 w-1/2 transition-all duration-300' type="tel" id="expiration-month" maxLength={2} required pattern='[0-2]{2}' placeholder='MM'/>
                <input className='rounded-md text-lg p-2 md:px-4 w-1/2 transition-all duration-300' type="tel" id="expiration-year" maxLength={4} required pattern='[0-9]{4}' placeholder='YY'/>
               
              </div>
              <span className="text-red-500 text-xs font-medium">Can't be blank</span>
            </fieldset>

          <div className="cvc-container | flex flex-col justify-center gap-2 p-1 md:p-2 w-1/2 bg-purple-900 shadow">
            <label htmlFor="cvc">CVC</label>
            <input className="rounded-md text-lg p-2 md:pl-4 transition-all duration-300" type="tel" id="cvc" maxLength={3} required pattern='[0-9]{3}' aria-label='Credit Card CVC' placeholder='123'/>
          <span className="text-red-600 text-xs font-medius">Can't be blank</span>
          </div>
        </div>

        <Ripples>
          <button className="submit-btn | border-2 border-transparent w-full rounded-lg text-lg py-2 px-4 shadow-md text-white font-medium" type="submit">Confirm</button>
        </Ripples>
      </form>

      <div className="thank-you | hidden">
        <img src={complete} alt="Complete Sign" />
        <p>We've added your card details</p>
      </div>
    </div>
   </main>
  )
}
