import React from 'react';
import './index.css';
type WorkModuleProps = {
  link: string;
  org: string;
  start: string;
  end: string | null;
  location: string;
  details: string[];
  role: string;
  logoImage: string;
};
const WorkModule = ({
  link,
  org,
  start,
  end,
  location,
  details,
  role,
  logoImage,
}: WorkModuleProps) => {
  return (
    <div className="WorkModule">
      <a href={link} target="blank">
        <img src={logoImage} className="logo" alt={`${org} logo`} />
      </a>
      <div className="work-meta">
        <a className="org-link" href={link} target="blank">
          {org}
        </a>
        <time>
          {start} - {end ? end : 'Present'} | {location}
        </time>
      </div>
      <br />

      <p className="work-role">{role}</p>
      <div className="work-details">
        <ul>
          {details.map((d, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: d }} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default WorkModule;
