import React from 'react';

function DownloadResumeButton() {
  const downloadResume = () => {
    const url = '/pdfs/Doug_Altermatt_Resume_2023.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Doug_Altermatt_Resume_2023.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={downloadResume} className="resumeButton" >Download Resume</button>
  );
}

export default DownloadResumeButton;