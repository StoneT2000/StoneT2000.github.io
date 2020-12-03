import React from 'react';
import './index.css';
export type BlogPostPreviewCardProps = {
  title: string;
  time: string;
  desc: string;
  thumbnail: string;
  link?: string;
  thumbnailAltText: string;
  lengthInMin?: number;
};
const BlogPostPreviewCard = ({
  title,
  time,
  desc,
  thumbnail,
  thumbnailAltText,
  link,
  lengthInMin,
}: BlogPostPreviewCardProps) => {
  return (
    <div className="BlogPostPreviewCard">
      <a href={link} className="post-link">
        <div className="title">
          <h2>{title}</h2>
          <br />
          <time>{time}</time>{' '}
          {lengthInMin ? (
            <span>
              &#183; <span>{lengthInMin} min read</span>
            </span>
          ) : (
            ''
          )}
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
