import React from "react";

function BlogContent(props) {
  return <div id="blog-content">{props.articleText}</div>;
  // return (
  //   <div>
  //     <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
  //     <Comment />
  //     <Comment />
  //     <Comment />
  //   </div>
  

}

export default BlogContent;
