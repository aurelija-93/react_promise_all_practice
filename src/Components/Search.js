import React from "react";

function Search({handleSearchSubmit}) {

    const onFormSubmit = function(evt) {
        evt.preventDefault();
        const formattedInput = evt.target[0].value.toLowerCase();
        console.log(typeof(handleSearchSubmit));
        handleSearchSubmit(formattedInput);
    }

    return (
        <form onSubmit={onFormSubmit}>
                <label htmlFor="search">Search:</label>
                <input type="text" placeholder="Enter search phrase"/>
                <input type="submit" value="Go" />
        </form>
    );
};

export default Search;