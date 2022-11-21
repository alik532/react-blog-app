import React from "react";
import classes from './Blog.module.css';

const Blog = (props) => {
    return (
        <div className={classes.blog}>
            <div className={classes.title}>
                {props.blog.title}
            </div>
            <div className={classes.content}>
                Ipsum repudiandae saepe. Rerum quidem repudiandae dolorem quas. Tempore earum qui veritatis itaque illum et voluptatem ex et. Ratione est incidunt voluptate. Quo earum molestias omnis. Labore ea quod non quod blanditiis neque provident quidem. Exercitationem accusantium numquam. Sapiente nihil nihil. Deleniti illum explicabo est veniam. Assumenda et placeat quos pariatur excepturi deserunt odit qui. Aut sequi itaque nulla laboriosam ex. Voluptatem ipsum deleniti.
            </div>
            <div className={classes.date}>
                Date: {props.blog.date}
            </div>
            <div className={classes.likes}>
                Likes: {props.blog.likes}
            </div>
        </div>
    )
}

export default Blog;