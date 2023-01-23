import React from 'react'
import logo from './assets/card-logo.svg'
import cardFront from './assets/bg-card-front.png'
import cardBack from './assets/bg-card-back.png'
import complete from './assets/icon-complete.svg'

export default function App() {
  return (
   <main className='grid grid-rows-2 gap-0 md:gap-8 xl:gap-16 lg:grid-cols-2 lg:grid-rows-none lg:items-center min-h-screen lg:px-8 xl:px-16'>
    <div className="card-preview | relative bg-slate-900 p-2 md:p-4 lg:p-4">
      <div className="card-front | absolute z-10 lg:inset-0 lg:relative text-white bg-lime-600 rounded-2xl max-w-md">
        <img src={cardFront} alt="Front Side of Credit Card" />
        <img className='logo | absolute top-4 left-6 lg:top-8 lg:left-8'src={logo} alt="Card Logo" />
        <span className='absolute left-6 top-1/2 text-2xl lg:left-8 lg:top-2/4 tracking-widest'>0000 0000 0009 8888</span>
        <span className='absolute left-6 bottom-6 md:text-base lg:left-8 text-sm lg:bottom-8 tracking-wider'>Jane Appleseed</span>
        <span className='absolute right-6 bottom-6 text-sm md:text-base lg:right-8 lg:bottom-8 tracking-widest'>01/25</span>
      </div>
      <div className="card-back | absolute lg:inset-0 lg:relative text-white lg:mt-8 ml-auto bg-lime-600 rounded-2xl max-w-md">
        <img src={cardBack} alt="Back Side of Credit Card" />
        <span className='cvc | absolute right-12 text-sm md:text-lg lg:right-16 tracking-widest'>123</span>
      </div>
    </div>

    <div className='form-container | bg-cyan-500 p-8 rounded-2xl shadow-2xl'>
      <form className='border-2 border-red-600'>
        <label htmlFor="card-name">Cardholder Name</label>
        <input type="text"  id="card-name" required placeholder='e.g. Jane Appleseed'/>
        <fieldset>
          <legend>Card Number</legend>
          <label htmlFor="cc-1">Card Number</label>
            <div className='border-4 border-green-400'>
              <input type="tel" id="cc-1" maxLength={4} required pattern='[0-9]{4}' aria-label="Credit Card First 4 Digits" placeholder='e.g. 1234' />
              <input type="tel" maxLength={4} aria-label="Credit Card Second 4 Digits" placeholder='5678'/>
              <input type="tel" maxLength={4} aria-label="Credit Card Second Last 4 Digits" placeholder='9123'/>
              <input type="tel" maxLength={4} aria-label="Credit Card Last 4 Digits" placeholder='0000'/>
            </div>
        </fieldset>

        <div className="input-row">
          <fieldset>
            <legend>EXP. DATE (MM/YY)</legend>
            <label htmlFor="expiration-month">EXP. DATE (MM/YY)</label>
            <div>
              <select id="expiration-month">
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>

              <select id="Expiration Year" placeholder='YY'>
                <option>2023</option>
                <option>2024</option>
              </select>
            </div>
          </fieldset>
          <label htmlFor="cvc">CVC</label>
          <input type="tel" id="cvc" maxLength={3} required pattern='[0-9]{3}' aria-label='Credit Card CVC' placeholder='e.g. 123'/>
        </div>

        <button type="submit">Confirm</button>
      </form>

      <div className="thank-you | hidden">
        <img src={complete} alt="Complete Sign" />
        <p>We've added your card details</p>
      </div>
    </div>
   </main>
  )
}
