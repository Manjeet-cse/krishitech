import { useNavigate } from 'react-router-dom';
import './ExpertBookingScreen.css';

export default function ExpertBookingScreen() {
  const navigate = useNavigate();

  return (
    <div className="expert-booking-layout">
      {/* Modal / Bottom Sheet */}
      <div className="expert-booking-modal">
        {/* Drag Handle (Mobile) */}
        <div className="modal-drag-handle-wrap">
          <div className="modal-drag-handle" />
        </div>

        {/* Modal Header */}
        <div className="modal-header">
          <div className="expert-info-row">
            <div className="booking-expert-img-wrap">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmFClHCmMJqot7gjtKzqo3Jd1URAoy8LeZsvbEAkbawqqBVrzgNL9wAHbNuC0sws96AkQcerN-KP16dYGFliSR4GC0V7Oah9BKaL0sPTPhyjToK6Q3V3nylg-DWxMozTjAU1g1hW-PH2vnoB7gAIkQ4KPssSVCcD4QMZ3tCBf2ppakK_g8hx2qMRCaua6SnlgS2lyIsIZrmv2I9zUXd7eD8n31XV5bMk7z0AR9THbsq0D6PVJXQf2Awamc9oqCO6OZS0_kRHjZQcY"
                alt="Dr. Ravi Kumar"
                className="booking-expert-img"
              />
            </div>
            <div>
              <h2 className="booking-expert-name">Dr. Ravi Kumar</h2>
              <p className="booking-expert-role">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>psychiatry</span>
                Senior Agronomist
              </p>
            </div>
          </div>
          <button className="modal-close-btn" aria-label="Close" onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body hide-scrollbar">
          
          {/* Date Selection */}
          <div style={{ marginBottom: '32px' }}>
            <h3 className="section-h3">
              <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>calendar_month</span>
              Select Date
            </h3>
            <div className="dates-row hide-scrollbar">
              {/* Date Item (Past/Disabled) */}
              <div className="date-tile disabled">
                <span className="date-day">Mon</span>
                <span className="date-num">12</span>
              </div>
              
              {/* Date Item (Active) */}
              <div className="date-tile active">
                <span className="date-day">Tue</span>
                <span className="date-num">13</span>
              </div>
              
              {/* Date Item (Default) */}
              <div className="date-tile default">
                <span className="date-day">Wed</span>
                <span className="date-num">14</span>
              </div>
              
              {/* Date Item (Default) */}
              <div className="date-tile default">
                <span className="date-day">Thu</span>
                <span className="date-num">15</span>
              </div>
              
              {/* Date Item (Default) */}
              <div className="date-tile default">
                <span className="date-day">Fri</span>
                <span className="date-num">16</span>
              </div>
            </div>
          </div>

          {/* Time Slots Selection */}
          <div>
            <h3 className="section-h3">
              <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>schedule</span>
              Available Time
            </h3>
            <div className="times-grid">
              <button className="time-slot default">10:00 AM</button>
              <button className="time-slot active">10:30 AM</button>
              <button className="time-slot default">11:00 AM</button>
              <button className="time-slot disabled" disabled>11:30 AM</button>
              <button className="time-slot default">02:00 PM</button>
              <button className="time-slot default">02:30 PM</button>
            </div>
          </div>

          {/* Fee Breakdown Card */}
          <div className="booking-summary-card">
            <h4>Booking Summary</h4>
            <div className="summary-row">
              <span className="summary-label">Consultation Fee</span>
              <span className="summary-value">₹300</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Platform Fee</span>
              <span className="summary-value">₹30</span>
            </div>
            <div className="summary-row total">
              <span className="summary-label">Total Payable</span>
              <span className="summary-value">₹330</span>
            </div>
          </div>

        </div>

        {/* Fixed Bottom Action Area */}
        <div className="modal-bottom-fixed">
          <button className="confirm-booking-btn">
            Confirm Booking
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}