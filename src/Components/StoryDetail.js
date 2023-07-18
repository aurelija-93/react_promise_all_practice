import React from "react";

function StoryDetail({story}) {
    return (
        <li>
            <h4>{story.title}</h4>
            <h5>Author: {story.by}</h5>
            <a href={story.url}>{story.url}</a>
        </li>
    );
};

export default StoryDetail;