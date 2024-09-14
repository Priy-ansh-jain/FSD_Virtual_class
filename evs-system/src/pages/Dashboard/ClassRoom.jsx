
import { useNavigate } from 'react-router-dom';
import AuthPage from '../Auth/Regitsration/AuthPage';

const ClassRoom = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/target-page'); // Replace '/target-page' with the route you want to navigate to
  };

  return (
    <header className="flex items-center justify-between p-4 bg-green-400 text-green-800">
      <div className="flex-grow text-center text-xl font-semibold">
        Virtual Classroom
      </div>
      <button
        onClick={handleButtonClick}
        className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <AuthPage />
      </button>
    </header>
  );
};

export default ClassRoom;
