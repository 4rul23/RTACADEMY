import React from 'react';
import performanceimg from '../assets/images/performance.png';

const CyberIncidentsStats = () => {
  return (
    <div className="cybercontainer">
      <div className="grid">
        <div className="card">
          <p className="percentage">38%</p>
          <p className="descriptionincident">
            Siswa/Siswi di indonesia Kurang dalam problem solving Programming mereka
          </p>
        </div>
        <div className="card">
          <p className="performance-text">
            Tingkatkan <br/> Performa <br/> Programmingmu.
          </p>
          <div className='performanceimg'>
            <img 
              src={performanceimg} 
              alt="Graph showing performance optimization" 
              className="graph"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberIncidentsStats;