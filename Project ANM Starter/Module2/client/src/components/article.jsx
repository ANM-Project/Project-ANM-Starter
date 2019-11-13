import React from 'react'; 
import ReactDom from 'react-dom';


  class Article extends React.Component {
    constructor (props) {
      super(props);
    }
    render(){
      console.log("nour",this.props.story)
      return(
        <div className= 'widget'>
        <h1 className = "widgetitle">POPULAR STORIES</h1>
        <ul className="postlist" id="popularStories">	
            <li className="post space">
                <a className="imagewrap" >
                <img src={this.props.story.image}/>
                </a>
                <div className="post-content">
                <h4 className="title">{this.props.story.title}</h4>
                </div>
            </li>
            
        </ul>    
        </div>
      )
    }
  }

  export default Article;