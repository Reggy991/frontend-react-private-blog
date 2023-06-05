import React from 'react';
import './BlogPost.css';

import posts from "../../data/posts.json";
import {Link, useParams} from "react-router-dom";

function BlogPost() {
    console.log(posts);

    const { blogId } = useParams();
    const blogPost = posts.find((post) => post.id === blogId);

    return (
        <>
            <div className="content">
                <h1>Blogpost pagina</h1>

                {blogPost ? (
                    <>
                        <p>
                            Dit is blog {blogPost.id} met titel: {blogPost.title}.
                        </p>
                        <p>
                            Ga terug naar het <Link to="../blogposts">blog overzicht</Link>.
                        </p>
                    </>
                ) : (
                    <p>De blogpost is helaas niet gevonden.</p>
                )}
            </div>
        </>
    );
}

export default BlogPost;