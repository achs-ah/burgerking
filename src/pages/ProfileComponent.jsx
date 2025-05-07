import { useNavigate } from 'react-router-dom';
import profileImg from '../assets/profileImg.jpg'

const Profile = () => {
    const navigate = useNavigate();

    const handleRedirect = () =>{
        navigate('/');
    };
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 py-12">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md">

        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full object-cover border-4 border-[#f3961c] mb-4"
            src={profileImg}
            alt="Profile"
          />
          <h2 className="text-2xl font-bold text-[#f3961c]">Manager</h2>
          <p className="text-gray-400 mb-4">Manager Burger King</p>
        </div>

        {/* Info */}
        <div className="space-y-3">
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <p className="text-lg">achsa@gmail.com</p>
          </div>
          <div>
            <label className="text-sm text-gray-400">Location</label>
            <p className="text-lg">Kimironko, Kigali</p>
          </div>
          <div>
            <label className="text-sm text-gray-400">Joined</label>
            <p className="text-lg">May 2025</p>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <button className="bg-[#f3961c] hover:bg-yellow-500 text-white py-2 px-4 rounded-md transition"
          onClick={handleRedirect}>
            Edit Profile
          </button>
          <button className="border border-[#f3961c] text-[#f3961c] hover:bg-[#f3961c] hover:text-white py-2 px-4 rounded-md transition"
          onClick={handleRedirect}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
