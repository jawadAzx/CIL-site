import React from 'react'
import "./BlogPost.css"
import { useParams, Link } from 'react-router-dom'
import blogs from '../../data/blogs'
import usePageMeta from '../../hooks/usePageMeta'
import { SITE_URL, SITE_NAME } from '../../seo/config'

const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogs.find((b) => b.slug === slug);

    const absoluteImage = post ? (post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`) : undefined;

    usePageMeta({
        title: post ? post.title : 'Post not found',
        description: post ? post.excerpt : undefined,
        path: `/blogs/${slug}`,
        image: post ? post.image : undefined,
        jsonLd: post ? {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: absoluteImage,
            datePublished: post.date,
            dateModified: post.date,
            author: {
                '@type': 'Organization',
                name: post.author,
            },
            publisher: {
                '@type': 'Organization',
                name: SITE_NAME,
                logo: {
                    '@type': 'ImageObject',
                    url: `${SITE_URL}/logo.jpeg`,
                },
            },
            mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `${SITE_URL}/blogs/${slug}`,
            },
        } : undefined,
    });

    if (!post) {
        return (
            <div className='blogpost-container'>
                <div className='blogpost-notfound'>
                    <h2>Post not found</h2>
                    <p>The blog post you're looking for doesn't exist or may have been moved.</p>
                    <Link className='blogpost-back' to='/blogs'>&larr; Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className='blogpost-container'>
            <div
                className='blogpost-hero'
                style={{
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            <div className='blogpost-content'>
                <Link className='blogpost-back' to='/blogs'>&larr; Back to Blog</Link>
                <h1 className='blogpost-title'>{post.title}</h1>
                <p className='blogpost-meta'>{formatDate(post.date)} &middot; {post.author}</p>
                {post.content.map((paragraph, idx) => (
                    <p className='blogpost-paragraph' key={idx}>{paragraph}</p>
                ))}
            </div>
        </div>
    )
}

export default BlogPost
