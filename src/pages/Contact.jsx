import { useNavigate } from 'react-router-dom';
import ecommerce from '../assets/ecommerce.jpg';

const Contact = () => {

        const navigate = useNavigate();
    
        const handleRedirect = () =>{
            navigate('/');
        };
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-4 py-12">
      <section className="flex flex-wrap md:flex-nowrap w-full max-w-6xl shadow-lg rounded-lg overflow-hidden bg-gray-800">
        

        <div className="flex-1 p-8">
          <h1 className="text-4xl mb-2 text-[#f3961c] font-bold">Contact Us - KingBurger</h1>
          <h3 className="text-2xl mb-6 text-gray-300">Best Burger, Best Price</h3>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f3961c]"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f3961c]"
                placeholder="yourEmail@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-sm">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f3961c]"
                placeholder="Tell us what’s on your mind"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#f3961c] hover:bg-[#e3840f] text-white py-2 px-6 rounded transition"
              onClick={handleRedirect}
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="hidden md:block w-full md:w-1/2">
          <img
            src={ecommerce}
            alt="burger"
            className="w-full h-full object-cover"
          />
        </div>

      </section>
    </div>
  );
};

export default Contact;
