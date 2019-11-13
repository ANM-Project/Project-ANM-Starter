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
      // console.log(this.props);
    return(
      <div>                              
         
      </div>
      )
    }
  }

  export default ArticlesList;

  
  {props.comments.map(comment => {
    return <div key={comment._id}>{comment.text}</div>
    } )}

    {this.props.stories.map((story,key)  =>
      return(<Article  key={key} story={story} />
      )
   )



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