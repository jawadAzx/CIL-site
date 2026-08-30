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
            '@graph': [{
                '@type': 'BlogPosting',
                headline: post.title,
                description: post.excerpt,
                image: absoluteImage,
                datePublished: post.date,
                dateModified: post.dateModified || post.date,
                author: { '@type': 'Organization', name: post.author },
                publisher: {
                    '@type': 'Organization',
                    name: SITE_NAME,
                    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.jpeg` },
                },
                mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blogs/${slug}` },
            }, ...(post.faq ? [{
                '@type': 'FAQPage',
                mainEntity: post.faq.map((item) => ({
                    '@type': 'Question',
                    name: item.question,
                    acceptedAnswer: { '@type': 'Answer', text: item.answer },
                })),
            }] : [])],
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
                {post.intro && <p className='blogpost-intro'>{post.intro}</p>}
                {post.content?.map((paragraph, idx) => (
                    <p className='blogpost-paragraph' key={idx}>{paragraph}</p>
                ))}
                {post.sections?.map((section, idx) => <section className='blogpost-section' key={idx}>
                    <h2>{section.heading}</h2>
                    {section.paragraphs?.map((paragraph, paragraphIdx) => <p className='blogpost-paragraph' key={paragraphIdx}>{paragraph}</p>)}
                    {section.bullets && <ul>{section.bullets.map((item, itemIdx) => <li key={itemIdx}>{item}</li>)}</ul>}
                </section>)}
                {post.faq && <section className='blogpost-faq'><h2>Frequently asked questions</h2>
                    {post.faq.map((item, idx) => <div key={idx}><h3>{item.question}</h3><p>{item.answer}</p></div>)}
                </section>}
                {post.sources && <section className='blogpost-sources'><h2>Sources and further reading</h2>
                    <ul>{post.sources.map((source, idx) => <li key={idx}><a href={source.url} target='_blank' rel='noopener noreferrer'>{source.label}</a></li>)}</ul>
                    <p>Agronomic guidance varies by soil, crop and formulation. Follow the registered product label and local Agriculture Department advice.</p>
                </section>}
                {post.relatedSlugs && <aside className='blogpost-related'><h2>Continue reading</h2>
                    {post.relatedSlugs.map((relatedSlug) => { const related = blogs.find((blog) => blog.slug === relatedSlug); return related ? <Link key={relatedSlug} to={`/blogs/${relatedSlug}`}>{related.title} &rarr;</Link> : null; })}
                </aside>}
            </div>
        </div>
    )
}

export default BlogPost
