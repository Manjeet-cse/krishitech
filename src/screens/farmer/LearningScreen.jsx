import React from 'react';
import AppTopBar from '../../components/common/AppTopBar';
import BottomTabs from '../../components/layout/BottomTabs';
import FloatingAIButton from '../../components/ai/FloatingAIButton';
import './LearningScreen.css';

export default function Learning() {
  const courses = [
    {
      id: 1,
      title: "Soil Health Basics",
      views: "1.2k views",
      duration: "4:20",
      level: "Beginner",
      levelClass: "level-beginner",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA33Tsq-xyYck0ZZLk96_knAFBXxzvHMVOva062SJUa-xL60J149GuFYdevYdfA9TVEHWBk7NBENkdp4U0baFjsc9Yg9C303Sx1oCXx906becA1wzIliUqoB3bwHmzoPpTE8potXzlWOcltp4SutQFDzqfOCPZuUW-Iy8K7saEEXxBKwsUwbMfgDs_NLk-Ax8aZDOjxFY5E5Wdg09Yz3WjbXMGuC0hu-rxT9fU7kwmL8o5qLfwwqP0B-ginj_83m-0Z16JsuBPa_vg"
    },
    {
      id: 2,
      title: "Efficient Drip Irrigation",
      views: "850 views",
      duration: "8:45",
      level: "Intermediate",
      levelClass: "level-intermediate",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkK_7Dxr5glD2d8R_posF98bjcwWG5MHTvXmD5XmxsgtiiBihM-YeNOWgpKkQogg4M0fao_X9R8hLuHc5xFYFt4x3smCHNTPGo13tS5ft2ryX5VhUqEB3mwmBSAhYgA5-nFe_N-3IzyfVcpy1MNu9u2HY5xYDI1cY0b6_6RT47nxjnPO7iaIIci29tdlJ6SZiI6qdlzqObqLM7CTI0kH6zyqjxOhDn0D-0Dws3ufImT0jTNcZmITE3JwVoNZ_SZ-zWtyzanplFOg0"
    },
    {
      id: 3,
      title: "Organic Pest Management",
      views: "3.4k views",
      duration: "12:10",
      level: "Advanced",
      levelClass: "level-advanced",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-1GD98Yz7Y5cr2dCWqs62wetwn9MpGK49qdopABJjh-cl6nWb_5Afwao5RLOt1sF2GdPSspnbTqsGLIEF-jUfubewH5AcRzXRnFNV7vUygq20SThstRDREagpLGXqAVigzYGwABIJJiqSy4H0xXyTMUMQAL8vZvhXIVV5T1TWG8kMDKOJyNmhlT6zaa9ZMn8pbf0aU1KqghukBr7q7vvABxgzOloeFr7FkechX5thU27njTxefrD-zwQx747DggphL4OG-n0C1Ro"
    },
    {
      id: 4,
      title: "Understanding Mandi Rates",
      views: "5.1k views",
      duration: "5:30",
      level: "Beginner",
      levelClass: "level-beginner",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlGihg4vQZIufImSgGHQGxolSPEO731aK8Mv6jNFaSgKr6GnuDayFGYivVSJOm6UPEcThieRBv4cE9XqHmEHTpaI2QA7oV1x9Bq-LVVwwK6vxte6BJaGcCWkvyCQPzF-RpIbJCUp9_GBMoRmU_8GfFBzybo0MoUzcPDE4WbD-kQXXQ5VM_osRR_YmcFrULSy3rpyuQL7sEQpv-VAlLIht9TTjsgR5HZ8UrVq_jjcn9otLhwc8dQCifXaw4JFMTdgu2XvIMcLrHfeg"
    }
  ];

  return (
    <div className="screen-layout bg-surface min-h-screen">
      <AppTopBar title="Learning Hub" showBack={false} showNotification={true} />

      <div className="screen-body">
        <div className="screen-content pb-nav px-4 pb-32">
          
          <div className="learning-screen-container">
            {/* Page Title Area */}
            <div className="learning-title-area">
              <h2 className="learning-title">Learning Hub</h2>
              <p className="learning-subtitle">Master modern farming techniques.</p>
            </div>

            {/* Progress & Streak Section */}
            <section className="progress-section">
              <div className="progress-bg-glow"></div>
              <div className="progress-header">
                <div>
                  <h3 className="progress-title">Weekly Goal</h3>
                  <p className="progress-subtitle">2 modules left to complete</p>
                </div>
                <div className="streak-badge">
                  <span className="material-symbols-outlined streak-icon">local_fire_department</span>
                  <span className="streak-text">3 Day Streak</span>
                </div>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: '75%' }}></div>
              </div>
              <div className="progress-footer">
                <span>Progress</span>
                <span className="progress-percentage">75%</span>
              </div>
            </section>

            {/* Featured Video Card */}
            <section className="featured-video-card group">
              <img 
                alt="Advanced Crop Disease Identification thumbnail" 
                className="featured-video-img" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUYNzNT6AenHNfuN3ZzZhyFZ1LcooIEuNvIEWwMWcR7GI5cE_R2I2ptmZVky6iN3hpI0FyxMUVx0kCLEzuDeFudyphsqXE9JQQR6y2B8HjOa16HC2bnMtD1gGoBRrv-PIsazryZMAQlNqVGTedqDDTjmXzIH6vdatOxXuB8OmvbWPWJKsprmGrojj6FOg637X14rufJQjkMEBK7Fg3MCcSGBdFYz7gibs6JTIho70LrhMp0SFsjasmheZHK_8DgJhAe8m0Ta-3syg" 
              />
              <div className="featured-video-overlay"></div>
              <div className="featured-video-lang">
                <span className="lang-badge">Hindi</span>
              </div>
              <div className="featured-video-play">
                <div className="play-button-glass">
                  <span className="material-symbols-outlined play-icon">play_arrow</span>
                </div>
              </div>
              <div className="featured-video-info">
                <span className="featured-video-meta">Featured Course • 15 Mins</span>
                <h3 className="featured-video-title">Advanced Crop Disease Identification</h3>
              </div>
            </section>

            {/* Course Library Grid */}
            <section className="course-library">
              <div className="course-library-header">
                <h3 className="course-library-title">Explore Courses</h3>
                <button className="view-all-btn">View All</button>
              </div>
              <div className="course-grid">
                {courses.map((course) => (
                  <div key={course.id} className="course-card">
                    <div className="course-card-img-container">
                      <img 
                        alt={course.title} 
                        className="course-card-img" 
                        src={course.image} 
                      />
                      <div className="course-card-level-container">
                        <span className={`course-card-level ${course.levelClass}`}>
                          {course.level}
                        </span>
                      </div>
                      <div className="course-card-duration">{course.duration}</div>
                    </div>
                    <div className="course-card-content">
                      <h4 className="course-card-title">{course.title}</h4>
                      <p className="course-card-views">
                        <span className="material-symbols-outlined view-icon">visibility</span> 
                        {course.views}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Language Selector */}
            <section className="language-selector">
              <div className="language-info">
                <span className="material-symbols-outlined lang-icon">language</span>
                <div>
                  <h4 className="lang-title">Content Language</h4>
                  <p className="lang-desc">Currently showing Hindi content</p>
                </div>
              </div>
              <button className="change-lang-btn">Change</button>
            </section>
            
          </div>
        </div>
      </div>

      <FloatingAIButton />

      <div className="screen-bottomnav">
        <BottomTabs />
      </div>
    </div>
  );
}