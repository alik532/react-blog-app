import React from "react";
import classes from './SearchInput.module.css'

const SearchInput = (props) => {
    return (
        <div className={classes.searchInput}>
            <input type="text" placeholder="Search..." className={classes.input} {...props}/>
        </div>
    )
}

export default SearchInput;