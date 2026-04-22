import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../screens/farmer/HomeScreen';
import DiagnosisScreen from '../screens/farmer/DiagnosisScreen';
import ExpertsScreen from '../screens/farmer/ExpertsScreen';
import ExpertBookingScreen from '../screens/farmer/ExpertBookingScreen';
import MandiScreen from '../screens/farmer/MandiScreen';
import MarketplaceScreen from '../screens/farmer/MarketplaceScreen';
import MoreScreen from '../screens/farmer/MoreScreen';
import ProfileScreen from '../screens/farmer/ProfileScreen';
import WeatherScreen from '../screens/farmer/WeatherScreen';
import LearningScreen from '../screens/farmer/LearningScreen';
import SubsidyScreen from '../screens/farmer/SubsidyScreen';
import AIAssistantScreen from '../screens/farmer/AIAssistantScreen';

export default function FarmerTabs() {
  return (
    <Routes>
      <Route path="home" element={<HomeScreen />} />
      <Route path="diagnosis" element={<DiagnosisScreen />} />
      <Route path="experts" element={<ExpertsScreen />} />
      <Route path="expert-booking" element={<ExpertBookingScreen />} />
      <Route path="mandi" element={<MandiScreen />} />
      <Route path="marketplace" element={<MarketplaceScreen />} />
      <Route path="more" element={<MoreScreen />} />
      
      {/* Secondary farmer screens */}
      <Route path="profile" element={<ProfileScreen />} />
      <Route path="weather" element={<WeatherScreen />} />
      <Route path="learning" element={<LearningScreen />} />
      <Route path="subsidy" element={<SubsidyScreen />} />
      <Route path="ai-assistant" element={<AIAssistantScreen />} />
    </Routes>
  );
}
