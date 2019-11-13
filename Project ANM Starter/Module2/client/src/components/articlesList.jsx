import React from 'react'; 
import ReactDom from 'react-dom';
import Article from './article.jsx'



  class ArticlesList extends React.Component {
    constructor (props) {
      super(props);
      // this.state = {
      //     // isLoading: true,
          
      // }
    }
    render() {
      console.log(this.props);
    return(
      // <h1>Alaaaaa{story.title}</h1>
      <div>                              
          {this.props.stories.map((story,key)  =>
               <Article  key={key} story={story} />
           )}
           </div>
      
)
    }
  }

  export default ArticlesList;

  




// //   })
// // )
// //   <div className= widget>
// //     <ul className="postlist" id="popularStories">
// //       <div>
// //        <li className="post space">
// //        <a className="imagewrap" ">
// //        <img {this.props.image}/>
// //        </a>
// //        <div className="post-content">
// //        <h4 className="title">{this.props.title}</h4>
// //         </div>
// //        </li>
// //       </div>
 

// // {/* 
// //  */}