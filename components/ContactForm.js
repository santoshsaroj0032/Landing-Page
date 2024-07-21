import { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
    } else {
      alert('Form submitted successfully!');
    }
  };

  return (
<section id="contact" className="py-12 bg-gradient-to-r from-light-black-500 to-grey-500 rounded-md" style={{ border: "2px solid black" }}>
<div className="container mx-auto px-4 border-1 border-black">
<h3 className="text-4xl font-bold text-center mb-6">Contact Us</h3>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto">
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2 text-black" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
              required
            />
          </div>
          <div className="mb-6">
          <label className="block   font-bold mb-2 text-black" htmlFor="message">Message:</label>
          <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
              rows="5"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold text-lg transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
