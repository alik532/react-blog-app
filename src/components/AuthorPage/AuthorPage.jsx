import React from "react";
import classes from './AuthorPage.module.css';
import { useState } from "react";

const AuthorPage = (props) => {
    
    const [sortType, setSortType] = useState(0)

    function countLikes() {
        let count = 0
        for (let i = 0; i < props.author.blogs.length; i++){
            count += props.author.blogs[i].likes
        }
        return count
    }
    
    function sortDateAsc(blogs) {
        let list = []
        for (let i = 0; i < blogs.length; i++){
            list.push({...blogs[i], date: new Date(blogs[i].date)})
        }
        list = [...list].sort((a, b) => a.date - b.date)
        return list.map(el => {
            return {...el, date: String(el.date.getFullYear() + "-" + (el.date.getMonth()+1) + "-" + el.date.getDate())}
        })
    }

    function sortDateDesc(blogs) {
        let list = []
        for (let i = 0; i < blogs.length; i++){
            list.push({...blogs[i], date: new Date(blogs[i].date)})
        }
        list = [...list].sort((a, b) => b.date - a.date)
        return list.map(el => {
            return {...el, date: String(el.date.getFullYear() + "-" + (el.date.getMonth()+1) + "-" + el.date.getDate())}
        })
    }

    function sortLikesAsc(blogs) {
        return [...blogs].sort((a, b) => a.likes - b.likes)
    }

    function sortLikesDesc(blogs) {
        return [...blogs].sort((a, b) => b.likes - a.likes)
    }

    function selectSort(sortType = 0) {
        if (!sortType)
            return props.author.blogs
        else if (sortType === "likesAsc")
            return sortLikesAsc(props.author.blogs)
        else if (sortType === "likesDesc")
            return sortLikesDesc(props.author.blogs)
        else if (sortType === 'dateAsc') 
            return sortDateAsc(props.author.blogs)
        else if (sortType === 'dateDesc')
            return sortDateDesc(props.author.blogs)
    }

    return (
        <div className={classes.authorPage}>  
            <div className={classes.card}>
                <img src={props.author.img} alt="" className={classes.image}/>
                <div className={classes.initials}>
                    <div>{props.author.name}</div>
                    <div>{props.author.surname}</div>
                </div>
                <div>
                    Phone Number: {props.author.phone}
                </div>
                <div className={classes.stats}>
                    <div>LIKES: {countLikes()}</div>
                    <div>POSTS: {props.author.blogs.length}</div>
                </div>
            </div>
            
            <div className={classes.posts}>
                <hr/><br/>
                <h2>Posts</h2>
                <div className={classes.sortPanel}>
                    <button className={classes.sButton} onClick={_ => setSortType('dateAsc')}>Oldest</button>
                    <button className={classes.sButton} onClick={_ => setSortType('dateDesc')}>Newest</button>
                    <button className={classes.sButton} onClick={_ => setSortType('likesAsc')}>Least Likes</button>
                    <button className={classes.sButton} onClick={_ => setSortType('likesDesc')}>Most Likes</button>
                </div>
                <div className={classes.postsList}>
                    {selectSort(sortType).map(blog =>
                        <a href={`/blog${blog.id}`}>
                            <div className={classes.post}>
                                <div>{blog.title}</div>
                                <div>{blog.date}</div>
                                <div>Likes: {blog.likes}</div>
                            </div>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AuthorPage;