import React from 'react'
import "./Blogs.css"
import { Link } from 'react-router-dom'
import blogs from '../../data/blogs'
import wwebanner from "../../assets/productpage.jpg"
import usePageMeta from '../../hooks/usePageMeta'

const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const Blogs = () => {
    const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
    const featuredPost = sortedBlogs[0];
    const remainingPosts = sortedBlogs.slice(1);

    usePageMeta({
        title: 'Blog',
        description: 'Agronomy guides on zinc sulphate, chelated zinc, liquid zinc and humic acid fertilizers for rice, wheat, cotton and vegetable growers in Pakistan.',
        path: '/blogs',
    });

    return (
        <div className='blogs-container'>
            <div className='blogs-top-container'>
                <div className='blogs-top-left'>
                    <span className="blogs-hero-kicker">Field knowledge</span>
                    <div className='blogs-top-heading'>
                        Agronomy Insights
                    </div>
                    <p className="blogs-hero-copy">Practical guidance for healthier soil, smarter nutrition, and stronger crops.</p>
                </div>
                <div className='blogs-top-right'>
                    <img src={wwebanner} alt="blog banner" className="blogs-top-img" />
                </div>
            </div>
            <div className="blogs-mid-container">
                <div className="blogs-section-heading">
                    <div><span>Latest from the field</span><h2>Knowledge that helps crops thrive.</h2></div>
                    <p>Research-led, practical guides for growers, agronomists, and agricultural partners.</p>
                </div>
                {featuredPost && <Link className="featured-blog" to={`/blogs/${featuredPost.slug}`}>
                    <div className="featured-blog-image" style={{backgroundImage:`url(${featuredPost.image})`}} />
                    <div className="featured-blog-copy"><span>Featured insight · {formatDate(featuredPost.date)}</span><h2>{featuredPost.title}</h2><p>{featuredPost.excerpt}</p><strong>Read the full article &rarr;</strong></div>
                </Link>}
                <div className="blog-archive-title"><span>Explore all insights</span><i /></div>
                <div className="blogs-grid">
                    {remainingPosts.map((post) => (
                        <Link
                            className="blog-card"
                            key={post.id}
                            to={`/blogs/${post.slug}`}
                        >
                            <div
                                className="blog-card-image"
                                style={{
                                    backgroundImage: `url(${post.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            />
                            <div className="blog-card-details">
                                <p className="blog-card-date">{formatDate(post.date)}</p>
                                <h2 className="blog-card-title">{post.title}</h2>
                                <p className="blog-card-excerpt">{post.excerpt}</p>
                                <span className="blog-card-readmore">Read more &rarr;</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blogs
