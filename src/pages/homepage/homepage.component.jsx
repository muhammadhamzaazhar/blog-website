import React from "react";

import Blogs from "../../components/blogs/blogs.component";

const HomePage = ({ blogs }) => {
    return (
        <Blogs blogs={blogs} />
    )
}

export default HomePage;