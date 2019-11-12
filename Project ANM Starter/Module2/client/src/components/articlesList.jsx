import React from 'react'; 

const articlesList = (props) => (
  <div className= {`widget ${isLoading ? 'is-loading' : ''}`}>
    <ul className="postlist" id="popularStories">
    {props.articles.map(article => {
       
    })}
)
{/* 
<li className="post space">
      //    <a className="imagewrap" ">
      //    <img onerror="this.onerror=null;this.src = 'https://cdn.iflscience.com/assets/site/img/ifls-placeholder-square.png?v=1.3.5'" src="https://cdn.iflscience.com/images/39ca5314-9372-5720-a03d-fc2a54741b9a/square_medium-1572974929-cover-image.jpg" alt=""/>
      //    </a>
      //    <div className="post-content">
      //    <h4 className="title"> <a href="https://www.iflscience.com/space/scientists-confirm-the-discovery-of-a-mysterious-interstellar-space-boundary/">Scientists Confirm The Discovery Of A Mysterious Interstellar Space Boundary</a></h4>
      // </div>
      // </li> */}