import React from "react";
import classes from './AuthorCard.module.css'

const AuthorCard = (props) => {
    return (
        <div className={classes.authorCard}>
            <img src={props.author.img} alt=""/>
            <div className={classes.info}>
                <div className="name">{props.author.name}</div>
                <div className="surname">{props.author.surname}</div>
            </div>
            <a href={`/page${props.author.id}`}>
                <button className={classes.view}>Click to View Profile</button>
            </a>
        </div>
    )
}
export default AuthorCard;