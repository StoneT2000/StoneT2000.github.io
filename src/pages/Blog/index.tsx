import React, { useEffect, useState } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import BlogPostPreviewCard, {
  BlogPostPreviewCardProps,
} from '../../components/BlogPostPreviewCard';
import './index.css';
import axios from 'axios';
import MarkdownIt from 'markdown-it';
import { Helmet } from 'react-helmet';
const md = new MarkdownIt();
const Blog = () => {
  const [posts, setPosts] = useState<
    Array<BlogPostPreviewCardProps & { path: string }>
  >([
    {
      path: '25102020',
      title: 'Starting a Proper Blog',
      time: 'October 26, 2020',
      thumbnail: 'thumb.png',
      thumbnailAltText: 'Blue color',
      desc: '',
    },
    {
      path: 'Dimensions',
      title: 'Dimensions',
      time: 'April 9, 2020',
      thumbnail: 'thumb.gif',
      thumbnailAltText:
        'Dimensions running a Rock Paper Scissors AI tournament',
      desc: '',
    },
  ]);
  useEffect(() => {
    let filledPosts: any[] = [];
    let fetchCaptionsPromises: Array<Promise<string>> = [];
    posts.forEach((post) => {
      const captionUrl = `/blog/posts/${post.path}/caption.md`;
      fetchCaptionsPromises.push(
        axios.get(captionUrl).then((res) => {
          return md.render(res.data);
        })
      );
    });
    Promise.all(fetchCaptionsPromises).then((captions) => {
      captions.forEach((caption, i) => {
        filledPosts.push(posts[i]);
        filledPosts[i].desc = caption;
        filledPosts[i].link = `/blog/posts/${filledPosts[i].path}`;
        filledPosts[
          i
        ].thumbnail = `/blog/posts/${filledPosts[i].path}/${filledPosts[i].thumbnail}`;
      });
      setPosts(filledPosts);
    });
  }, [posts]);
  return (
    <>
      {/* <Sidebar tabs={tabs} />, */}
      <DefaultLayout page="Blog">
        <Helmet>
          <title>Stone Tao's Blog</title>
          <meta
            name="description"
            content="Stone Tao's blog on AI, HCI, and what he's working on"
          />
        </Helmet>
        <div className="Blog">
          <h1>Blog!</h1>
          {posts.map((post, i) => (
            <BlogPostPreviewCard key={i} {...post} />
          ))}
        </div>
      </DefaultLayout>
    </>
  );
};
export default Blog;