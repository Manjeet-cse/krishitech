import { Sun, CloudRain, Wind, Droplets, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AppTopBar from '../../components/common/AppTopBar';
import './WeatherScreen.css';

export default function Weather() {
  const navigate = useNavigate();

  const forecast = [
    { day: 'Mon', temp: '28°', icon: Sun },
    { day: 'Tue', temp: '27°', icon: Sun },
    { day: 'Wed', temp: '25°', icon: CloudRain },
    { day: 'Thu', temp: '24°', icon: CloudRain },
    { day: 'Fri', temp: '26°', icon: Sun },
    { day: 'Sat', temp: '28°', icon: Sun },
    { day: 'Sun', temp: '29°', icon: Sun },
  ];

  return (
    <div className="screen-layout bg-muted">
      <AppTopBar title="Weather Forecast" />

      <div className="screen-body">
        <div className="screen-content pb-nav">
        
        <div className="weather-hero-card">
          <p className="text-center text-muted">Ludhiana, Punjab</p>
          <div className="temp-display">
            <Sun size={64} color="var(--tertiary)" className="weather-hero-icon" />
            <h1 className="temp-huge">28°<span className="unit">C</span></h1>
          </div>
          <p className="text-center font-bold mt-2">Mostly Sunny</p>
          <p className="text-center text-sm text-muted">H: 31° L: 19°</p>

          <div className="weather-stats-grid mt-4">
            <div className="weather-stat-box">
              <Droplets size={20} color="var(--primary)" />
              <div>
                <p className="text-xs text-muted">Humidity</p>
                <p className="font-bold">45%</p>
              </div>
            </div>
            <div className="weather-stat-box">
              <Wind size={20} color="var(--primary)" />
              <div>
                <p className="text-xs text-muted">Wind</p>
                <p className="font-bold">12 km/h</p>
              </div>
            </div>
            <div className="weather-stat-box">
              <CloudRain size={20} color="var(--primary)" />
              <div>
                <p className="text-xs text-muted">Rain</p>
                <p className="font-bold">0%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-header mt-4">
          <h3>7-Day Forecast</h3>
        </div>

        <div className="card forecast-list">
          {forecast.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="forecast-row">
                <span className="font-bold w-12">{item.day}</span>
                <span className="flex-1 flex justify-center">
                  <Icon size={20} color={Icon === Sun ? "var(--tertiary)" : "var(--primary)"} />
                </span>
                <span className="w-12 text-right font-bold">{item.temp}</span>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
    </div>
  );
}