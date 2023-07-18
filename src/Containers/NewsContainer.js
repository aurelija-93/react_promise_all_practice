import React from "react";
import StoriesList from "../Components/StoriesList";

function NewsContainer() {
    return (
        <>
            <h1>Hacker News</h1>
            <h2>Top Stories:</h2>
            <StoriesList />
        </>
    );
};

export default NewsContainer;