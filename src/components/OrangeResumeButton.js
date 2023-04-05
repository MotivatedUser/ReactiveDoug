import React from 'react';

function OrangeResumeButton() {
  const downloadResume = () => {
    const url = process.env.PUBLIC_URL + '/pdfs/Doug_Altermatt_Resume_2023.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Doug_Altermatt_Resume_2023.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={downloadResume} className="resumeButton-orange" >Download Resume</button>
  );
}

export default OrangeResumeButton;