import React, { useEffect, useState } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import './index.css';
import axios from 'axios';
import MarkdownIt from 'markdown-it';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { Helmet } from 'react-helmet';
//@ts-ignore
import { TwitterShareButton } from 'react-twitter-embed';

const md = new MarkdownIt({ html: true, linkify: true });
const BlogPostPage = () => {
  const [content, setContent] = useState('');
  const [tabs, setTabs] = useState<{ name: string; href: string }[]>([]);
  const [title, setTitle] = useState('Blog Post');
  const { postpath } = useParams<{ postpath: string }>();
  useEffect(() => {
    const url = `/blog/posts/${postpath}/post.md`;
    axios.get(url).then((res) => {
      setContent(md.render(res.data));
      const foundtabs: any[] = [];
      md.parse(res.data, '').forEach((token) => {
        if (token.type === 'html_block') {
          if (token.content.slice(1, 3) === 'h2') {
            // console.log(token.content);
          }
        }
      });
      const h2elems = document.getElementsByTagName('h2');
      for (let i = 0; i < h2elems.length; i++) {
        const href = h2elems[i].id + '-a';
        foundtabs.push({
          name: h2elems[i].id.replace(/-/g, ' '),
          href,
        });
        //@ts-ignore
        h2elems[i].innerHTML += `<span class="anchor" id="${href}"></span>`;
      }
      setTabs(foundtabs);
      const h1elem = document.getElementsByTagName('h1')[0];
      setTitle(h1elem.innerHTML);
      const linkElems = document.getElementsByTagName('a');
      for (let i = 0; i < linkElems.length; i++) {
        const linkElem = linkElems[i];
        console.log(linkElem.href);
        if (linkElem.origin !== window.origin) {
          linkElem.target = 'blank';
        }
      }
    });
  }, [postpath]);
  useEffect(() => {
    // find all h2 elements
    // content.
  }, [content]);
  return (
    <>
      <Sidebar tabs={tabs} />
      <DefaultLayout page="Blog">
        <Helmet>
          <title>{title}</title>
          <meta
            name="description"
            content={`Stone Tao's blog post on ${title}`}
          />
        </Helmet>
        <div className="BlogPostPage">
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
          <TwitterShareButton
            url={window.location}
            options={{ text: `${title}`, via: 'Stone_Tao' }}
          />
        </div>
      </DefaultLayout>
    </>
  );
};
export default BlogPostPage;
