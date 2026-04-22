import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import './SplashScreen.css';

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/language');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <div className="splash-center">
        <div className="splash-icon-container">
          <div className="splash-icon-gradient"></div>
          <Leaf size={80} color="white" />
        </div>
        <div className="splash-text-container">
          <h1 className="splash-title">NeoKrishiTech</h1>
          <p className="splash-subtitle">Voice of the Farmer, Power of AI</p>
        </div>
      </div>
      
      <div className="splash-footer">
        <div className="splash-loader-bar">
          <div className="splash-loader-progress"></div>
        </div>
        <p className="splash-loader-text">Initializing Systems</p>
      </div>

      <div className="splash-blob-1"></div>
      <div className="splash-blob-2"></div>
    </div>
  );
}
