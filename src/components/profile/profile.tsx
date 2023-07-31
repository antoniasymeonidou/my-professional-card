import React from 'react';
import styles from './profile.module.scss';
import profileImage from '../../assets/1.png';
import profileImageTwo from '../../assets/2.png';
import WorkExperience from '../work-experience/work-experience';
import SocialMedia from '../socialmedia/socialmedia';
import DownloadCVButton from '../cv/cv';

function Profile() {
  // Define the workData array with some sample data
  const workData = [
    {
      company: '',
      position: '',
      duration: '',
    },
    {
      company: '',
      position: '',
      duration: '',
    },
    {
      company: '',
      position: '',
      duration: '',
    }
    // Add more work experience data if needed
  ];

  const cvUrl = 'https://example.com/your-cv.pdf'; // Replace with your actual CV URL
  const buttonText = 'Download CV'; // Replace with the desired button text

  const socialMediaLinks = [
    { platform: 'facebook', url: '' },
    { platform: 'twitter', url: '' },
    { platform: 'linkedin', url: '' },
    // Add more social media links if needed
  ];

  const gradientStyle = {
    background: 'linear-gradient(to right, cyan, #ff6b08, #cf23cf, silver)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent'
  };

  return (
    <div className={styles['profile-card']}>
    <div className={styles['profile-image-box']}></div> {/* Square box */}
      <img className={styles['profile-image']} src={profileImage} alt="Profile" />
      <img className={styles['profile-image_two']} src={profileImageTwo} alt="Profile" />
      <div className={styles['profile-content']}>
        <h2 style={gradientStyle}>Lucy Sparks</h2>
        <p className={styles['profession']}>WEB DESIGNER//MASTERING CSS ART</p>
        <WorkExperience workData={workData} />
        <div className={styles['cv-button']}>
          <DownloadCVButton cvUrl={cvUrl} buttonText={buttonText} />
        </div>
      </div>
      <SocialMedia links={socialMediaLinks} />
    </div>
  );
}

export default Profile;
