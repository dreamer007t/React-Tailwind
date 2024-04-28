import React, { useState } from 'react';

function SignUpForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className='From-Wrapper pb-10'>
    <h1 className=' text-4xl text-blue-400 font-bold pb-5 text-center'>Contact Us</h1>
    <form className="max-w-screen-sm  mx-auto px-5 py-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
        <div className="mt-2">
          <input type="text" id="full-name" name="full-name" value={fullName} onChange={handleFullNameChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
        <div className="mt-2">
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
        <div className="mt-2">
          <input type="tel" id="phone" name="phone" value={phone} onChange={handlePhoneChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
        <div className="mt-2">
          <textarea id="message" name="message" rows="3" value={message} onChange={handleMessageChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"></textarea>
        </div>
      </div>

      <div className="mt-6">
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
      </div>
    </form>
    </div>
  );
}

export default SignUpForm;
