import React from 'react';
import './index.css';
type AwardModuleProps = {
  link: string | null;
  title: string;
  details: string;
};
const AwardModule = ({ link, title, details }: AwardModuleProps) => {
  return (
    <div className="AwardModule">
      {link ? (
        <a href={link} className="award-title">
          {title}
        </a>
      ) : (
        <div className="award-title">{title}</div>
      )}
      <div dangerouslySetInnerHTML={{ __html: details }}></div>
    </div>
  );
};
export default AwardModule;
