import { Shield, ChevronRight, MapPin, Edit3, Camera } from 'lucide-react';
import AppTopBar from '../../components/common/AppTopBar';
import BottomTabs from '../../components/layout/BottomTabs';
import './ProfileScreen.css';

export default function Profile() {
  return (
    <div className="screen-layout bg-muted">
      <AppTopBar title="My Profile" showProfile={false} />

      <div className="screen-body">
        <div className="screen-content pb-nav">
<div className="card profile-header-card text-center">
          <div className="profile-img-container mx-auto">
            <div className="profile-avatar-lg">M</div>
            <button className="edit-img-btn">
              <Camera size={14} color="white" />
            </button>
          </div>
          <h2 className="mt-3">Manjeet Singh</h2>
          <p className="text-muted">+91 98765 43210</p>

          <div className="profile-stats mt-4">
            <div className="p-stat">
              <span className="font-bold">2.5</span>
              <span className="text-xs text-muted">Acres</span>
            </div>
            <div className="p-divider"></div>
            <div className="p-stat">
              <span className="font-bold">12</span>
              <span className="text-xs text-muted">Crops</span>
            </div>
            <div className="p-divider"></div>
            <div className="p-stat">
              <span className="font-bold">₹12K</span>
              <span className="text-xs text-muted">Earned</span>
            </div>
          </div>
        </div>

        <div className="section-header mt-4">
          <h3>Account Settings</h3>
        </div>

        <div className="card settings-list">
          <div className="settings-row">
            <div className="flex-row items-center gap-3">
              <Edit3 size={20} className="text-muted" />
              <span className="font-bold">Edit Profile</span>
            </div>
            <ChevronRight size={20} className="text-muted" />
          </div>
          <div className="settings-row">
            <div className="flex-row items-center gap-3">
              <MapPin size={20} className="text-muted" />
              <span className="font-bold">My Addresses</span>
            </div>
            <ChevronRight size={20} className="text-muted" />
          </div>
          <div className="settings-row">
            <div className="flex-row items-center gap-3">
              <Shield size={20} className="text-muted" />
              <span className="font-bold">Privacy & Security</span>
            </div>
            <ChevronRight size={20} className="text-muted" />
          </div>
        </div>

        <button className="btn-outline-primary full-width mt-4 border-error text-error">
          Log Out
        </button>

      
        </div>
      </div>
      <div className="screen-bottomnav">
        <BottomTabs />
      </div>
    </div>
  );
}