import { useNavigate } from 'react-router-dom';
import burgerImg from '../assets/burgerImg.jpg';
import { useState, useEffect } from 'react';


const Home = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-[#f3961c] flex-col">
        <div className="loader"></div>
        <h1 className="text-3xl font-bold mt-4 animate-pulse">
          Loading KingBurger... 🍔
        </h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center px-8 py-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Side - Text */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#f3961c] drop-shadow-lg">
            Welcome to <span className="text-white">KingBurger</span>
          </h1>
          <h3 className="text-xl md:text-2xl text-gray-300">🔥 Best Burger. Best Price.</h3>
          <p className="text-lg text-gray-400">
            Taste like Heaven foods Where flavor meets fire — and style meets bite. 🍔🔥
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={handleRedirect}
              className="bg-[#f3961c] hover:bg-yellow-500 text-white px-6 py-3 rounded-md shadow-md transition duration-300"
            >
              Order Now
            </button>
            <button
              onClick={handleRedirect}
              className="border border-[#f3961c] hover:bg-[#f3961c] text-[#f3961c] hover:text-white px-6 py-3 rounded-md shadow-md transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src={burgerImg}
              alt="KingBurger"
              className="rounded-3xl shadow-[0_10px_40px_rgba(243,150,28,0.4)] w-[350px] md:w-[450px] hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute bottom-4 right-4 bg-[#f3961c] text-black px-3 py-1 text-xs rounded-full shadow-md">
              Fresh & Juicy 🍔
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
