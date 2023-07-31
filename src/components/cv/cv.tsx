import React from 'react';

interface DownloadCVButtonProps {
  cvUrl: string;
  buttonText: string;
}

const DownloadCVButton: React.FC<DownloadCVButtonProps> = ({ cvUrl, buttonText }) => {
  const handleDownloadClick = () => {
    // Function to trigger the download
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'your-cv.pdf'; // Change the file name if needed
    link.click();
  };

  return (
    <button onClick={handleDownloadClick}>
      {buttonText}
    </button>
  );
};

export default DownloadCVButton;
