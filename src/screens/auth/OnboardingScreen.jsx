import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OnboardingScreen.css';

const SLIDES = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrVWHlOGgNghAgeKpof0T1LQiZ8NFgioejZ11UoesaOlY9maU3htvTZZmmiqUdTU-QjR7uuztQ_mrVaNvD5PropgPd6jg1eO5_h3eUXZdqCa9pP_GiQ9cloxd6WfIkdy6gtzQVAdyVcol7wpM6c4RetLMVtvx790_UnEbW4l5HcuvVBwBHgiExpLiCtR7ZBHFwlehjApCEFPfKcWz1yshc3pVxyomhMere0gj7eh2UOlZDTuBzkCYWqdzvf7DJ9xOFzQ9PeXpcSoA',
    imageAlt: 'Farmer inspecting crops with smartphone',
    imageShape: 'circle',
    title: 'Detect Crop Disease Instantly',
    subtitle: 'Take a photo of your crop and get instant AI-powered diagnosis with unbiased treatment advice.',
    isLast: false,
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhSBoPMPBvn4EBtI6e5tlp30YZT9EhUZU_geJtWhcEUjwuqyoXvN0DNlH1L-tUpSPfu3yxfnEGZTFML60I1HSHsvGN_oO6tE1R5phhm8PklqSe6VcGxLOGzXV8rtp1XgQLfKRE1oyuKck1DxywogTzTyBUi0EnThAY46TZ6Hinl6QVUeylXZuLsOe_wxOryLvyDtqCVYiQ9Zo8beHIfwGaXPf2WrQgTAWQuLoZlxp0xwA0dCDNoNxiB_Y9k8gf_0pAOLVWDtbCzlA',
    imageAlt: 'Mandi market illustration',
    imageShape: 'rounded',
    title: 'Live Mandi Prices, Always.',
    subtitle: 'Check real-time crop prices and stop distress selling to middlemen. Negotiate with confidence.',
    isLast: false,
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDE0e44QfbaH0sNX0RffwJirfyuY6rfuyFDVSpwrvYtCEfj4M50Qm1_bS4-24gjp372fc-OjzPkrWtt790qb6B32N6td5mcbnZxvHL5SGtZd0X6LHbmu6NNU7bxXfbqmLVpvXW54KyJZnW7TOV5tZtZNxRnYiJDdaX78Gk1iEdaX9-MG4cwDGUksVTiyKWkl6CwBr16iZImT5R8EEpar3engBPhu2FBuscUb3wO6N71cRCkB2jA1dMWrc7sQKDykuSYPda7Z3q1myw',
    imageAlt: 'Farmer video call with agronomist',
    imageShape: 'rounded',
    title: 'Talk to Verified Agri Experts',
    subtitle: 'Book 1-on-1 consultations with verified agronomists. First 5 minutes completely free.',
    isLast: true,
  },
];

export default function OnboardingScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const slide = SLIDES[step];

  const handleNext = () => {
    if (step < SLIDES.length - 1) {
      setStep(step + 1);
    } else {
      navigate('/role-select');
    }
  };

  const handleSkip = () => navigate('/role-select');

  return (
    <div className="onb-screen">

      {/* ── Skip Button ──────────────────────── */}
      {!slide.isLast && (
        <div className="onb-header">
          <button className="onb-skip-btn" onClick={handleSkip}>Skip</button>
        </div>
      )}
      {slide.isLast && <div className="onb-header" />}

      {/* ── Illustration ─────────────────────── */}
      <div className="onb-illustration-area" key={step}>
        <div className="onb-abstract-bg" />
        <div className={`onb-image-frame ${slide.imageShape === 'circle' ? 'onb-image-frame--circle' : 'onb-image-frame--rounded'}`}>
          <img
            alt={slide.imageAlt}
            className="onb-image"
            src={slide.image}
          />
        </div>
      </div>

      {/* ── Text Content ─────────────────────── */}
      <div className="onb-text-content" key={`text-${step}`}>
        <h1 className="onb-title">{slide.title}</h1>
        <p className="onb-subtitle">{slide.subtitle}</p>
      </div>

      {/* ── Dots ─────────────────────────────── */}
      <div className="onb-pagination">
        {SLIDES.map((_, i) => (
          <div
            key={i}
            className={`onb-dot ${i === step ? 'active' : 'inactive'}`}
          />
        ))}
      </div>

      {/* ── Action Area ──────────────────────── */}
      <div className="onb-action-area">
        {slide.isLast ? (
          <button className="onb-get-started-btn" onClick={handleNext}>
            GET STARTED
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
          </button>
        ) : (
          <button className="onb-next-btn" onClick={handleNext}>
            NEXT
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
          </button>
        )}
      </div>

      <div className="onb-bottom-spacer" />
    </div>
  );
}
