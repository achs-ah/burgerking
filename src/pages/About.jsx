import { useNavigate } from 'react-router-dom';
import bestOne from '../assets/bestOne.jpg';
import burgerImg from '../assets/burgerImg.jpg'; 
import ecommerce from '../assets/ecommerce.jpg'; 
import Home from './Home';

const About = () => {
    const navigate = useNavigate();

    const handleRedirect = () =>{
        navigate('/');
    };
  return (
    <section className="bg-black text-white py-12 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-pink-500 text-center mb-6 uppercase tracking-wider">
          KingBurger Vibes 💥
        </h1>
        <p className="text-center text-gray-400 text-lg">
          Where flavor meets fire — and style meets bite. 🍔🔥
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[bestOne, burgerImg, ecommerce].map((img, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={img}
              alt={`Burger ${i + 1}`}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition duration-300 flex items-end p-4">
              <h2 className="text-xl font-bold text-yellow-400">
                {['Flame Grilled', 'Juicy Bites', 'Boss Energy'][i]}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#f3961c] mb-4">Our Menu is Special</h2>
        <p className="text-lg text-gray-300 mb-6">
          Welcome! We serve the most delicious burgers in town, made with fresh ingredients and a lot of love. Whether you're craving a classic cheeseburger or something spicy and new, we've got something just for you.
        </p>
        <div className="flex justify-center gap-4">
          <a
            onClick={handleRedirect}
            className="bg-[#f3961c] hover:bg-yellow-500 text-white px-6 py-3 rounded-md transition duration-300"
          >
            Order Now
          </a>
          <a
            onClick={handleRedirect}
            className="border border-[#f3961c] hover:bg-[#f3961c] text-[#f3961c] hover:text-white px-6 py-3 rounded-md transition duration-300"
          >
            Add to Cart
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
