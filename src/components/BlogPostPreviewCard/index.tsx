import React from 'react';
import './index.css';
export type BlogPostPreviewCardProps = {
  title: string;
  time: string;
  desc: string;
  thumbnail: string;
  link?: string;
  thumbnailAltText: string;
};
const BlogPostPreviewCard = ({
  title,
  time,
  desc,
  thumbnail,
  thumbnailAltText,
  link,
}: BlogPostPreviewCardProps) => {
  return (
    <div className="BlogPostPreviewCard">
      <a href={link} className="post-link">
        <div className="title">
          <h2>{title}</h2>
          <time>{time}</time>
        </div>
      </a>
      <div className="thumb-wrapper">
        <a href={link} className="post-link">
          <img className="thumb" src={thumbnail} alt={thumbnailAltText} />
        </a>
      </div>
      <div className="caption" dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
};
export default BlogPostPreviewCard;