import React from "react";
import classes from './PostList.module.css'
import { useState } from "react";

const PostList = (props) => {
    const [sortType, setSortType] = useState(0)

    function getAllPosts(){
        let list = []
        for(let i = 0; i < props.authors.length; i++){
            list.push(...props.authors[i].blogs)
        }
        return list
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
            return getAllPosts()
        else if (sortType === "likesAsc")
            return sortLikesAsc(getAllPosts())
        else if (sortType === "likesDesc")
            return sortLikesDesc(getAllPosts())
        else if (sortType === 'dateAsc') 
            return sortDateAsc(getAllPosts())
        else if (sortType === 'dateDesc')
            return sortDateDesc(getAllPosts())
    }

    return (
        <div className={classes.postList}>
            <div className={classes.sortPanel}>
                <button className={classes.sButton} onClick={_ => setSortType('dateAsc')}>Oldest</button>
                <button className={classes.sButton} onClick={_ => setSortType('dateDesc')}>Newest</button>
                <button className={classes.sButton} onClick={_ => setSortType('likesAsc')}>Least likes</button>
                <button className={classes.sButton} onClick={_ => setSortType('likesDesc')}>Most likes</button>
            </div>
            <div className={classes.container}>
                {selectSort(sortType).map(blog =>
                    <a className={classes.post} href={`/blog${blog.id}`}>
                        <div className={classes.title}>{blog.title}</div> 
                        <div className={classes.date}>{blog.date}</div>
                        <div className={classes.likes}>Likes: {blog.likes}</div>
                    </a>
                )}
            </div>
        </div>
    )
}

export default PostList;