import React from 'react';
import styles from './work-experience.module.scss';

interface WorkData {
  company: string;
  position: string;
  duration: string;
}

interface WorkExperienceProps {
  workData: WorkData[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ workData }) => {
  return (
    <div className={styles['work-experience']}>
      <div className={styles['work-items']}>
        {workData.map((work, index) => (
          <div key={index} className={styles['work-item']}>
            {index === 0 ? (
              <div className={styles['icon-container']}>
                <img
                  className={styles['custom-icon']}
                  src="https://img.icons8.com/?size=512&id=45984&format=png"
                  alt="Code Icon"
                />
              </div>
            ) : index === 1 ? (
              <div className={styles['icon-container']}>
                <img
                  className={styles['custom-icon']}
                  src="https://img.icons8.com/?size=512&id=45990&format=png"
                  alt="Paint Brush Icon"
                />
              </div>
            
            ) : index === 3 ? (
              <div className={styles['icon-container']}>
                <img
                  className={styles['custom-icon']}
                  src="https://img.icons8.com/?size=512&id=45986&format=png"
                  alt="Building Icon"
                />
              </div>
            ) : (
              <div className={styles['icon-container']}>
                <img
                  className={styles['custom-icon']}
                  src="https://img.icons8.com/?size=512&id=45986&format=png"
                  alt="CSS Icon"
                />
              </div>
            )}
            <div>
              <h3>{work.company}</h3>
              <p>{work.position}</p>
              <p>{work.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
