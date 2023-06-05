import React from 'react';
import './Blog.css';
import posts from '../../data/posts.json';
import {Link} from "react-router-dom";

function Blog() {

    return (
        <>
            <div className="content">
                <h1>Blog pagina</h1>
                <p>Totaal aantal blog posts: {posts.length}</p>

                <ul className="blog-list">
                    {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/blogposts/${post.id}`}>{post.title}</Link>
                    </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default Blog;