import React from "react";
import classes from './AuthorsList.module.css'
import AuthorCard from "../AuthorCard/AuthorCard";
import SearchInput from "../UI/SearchInput/SearchInput";
import { useState } from "react";

const AuthorsList = (props) => {

    const [query, setQuery] = useState("")

    function getSortedAuthors() {
        let list = props.authors.filter((author) => String(author.name).toLowerCase().startsWith(query.toLowerCase()) 
            || String(author.surname).toLowerCase().startsWith(query.toLowerCase()) );
        return list
    }

    return (
        <div className={classes.container}>
            <div className={classes.filterPanel}>
                <SearchInput value={query} onChange={e => setQuery(e.target.value)}/>
            </div>
            <div className={classes.authorsList}>
                {getSortedAuthors().length !== 0
                    ? getSortedAuthors().map(author => <AuthorCard author={author}/>)
                    : "Nothing found"}
            </div>
        </div>
    )
}
export default AuthorsList;