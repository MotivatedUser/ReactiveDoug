import React from 'react';
import { FaStar } from 'react-icons/fa';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', proficiency: 4 },
    { name: 'CSS', proficiency: 4 },
    { name: 'JavaScript', proficiency: 4 },
    { name: 'React', proficiency: 4 },
    { name: 'Bootstrap', proficiency: 4 },
    { name: 'Node.js', proficiency: 3 },
    { name: 'Google Cloud', proficiency: 2 },
    { name: 'Firebase', proficiency: 2 },
  ];

  const softSkills = [
    { name: 'Collaboration', proficiency: 5 },
    { name: 'Communication', proficiency: 5 },
    { name: 'Problem-solving', proficiency: 5 },
    { name: 'Leadership', proficiency: 4 },
    { name: 'Adaptability', proficiency: 4 },
    { name: 'Relationship-building', proficiency: 4 },
  ];

  const tools = [
    { name: 'Git/GitHub', proficiency: 3 },
    { name: 'VS Code', proficiency: 4 },
    { name: 'Expo Snacks', proficiency: 3 },
    { name: 'Android Studio', proficiency: 3 },
  ];

  return (
    <div className="table-responsive" >
  <table className='table table-striped' >
    <thead>
    <tr>
        <th><strong>Skill</strong></th>
        <th><strong>Proficiency</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr className="orange-bg text-light">
        <td>
          <h2 className='skills-h2'>Technical Skills</h2>
        </td>
        <td></td>
      </tr>
        
      {technicalSkills.map((skill) => (
        <tr key={skill.name}>
          <td>{skill.name}</td>
          <td>
            <div className="rating">
              {[...Array(skill.proficiency)].map((star, index) => (
                <FaStar key={index} />
              ))}
            </div>
          </td>
        </tr>
      ))}
      <tr className="orange-bg text-light">
        <td>
          <h2 className='skills-h2'>Soft Skills</h2>
        </td>
        <td></td>
      </tr>
      {softSkills.map((skill) => (
        <tr key={skill.name}>
          <td>{skill.name}</td>
          <td>
            <div className="rating">
              {[...Array(skill.proficiency)].map((star, index) => (
                <FaStar key={index} />
              ))}
            </div>
          </td>
        </tr>
      ))}
      <tr className="orange-bg text-light">
        <td>
          <h2 className='skills-h2'>Tools</h2>
        </td>
        <td></td>
      </tr>
      {tools.map((skill) => (
        <tr key={skill.name}>
          <td>{skill.name}</td>
          <td>
            <div className="rating">
              {[...Array(skill.proficiency)].map((star, index) => (
                <FaStar key={index} />
              ))}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default Skills;
