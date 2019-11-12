import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import articlesList from './components/articlesList.jsx';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoading: true,
            articles: []
        }
    }  

    retreiveData() { //it needs a place to retrieve
        var that = this; 
        $.ajax({
            type: "GET",
            url: "/",
            success: function(data) {
                that.updateState(data);
                console.log(data);
            },
            error: function(request, status, error) {
                console.log(error);
            }
        })
    }



    render() {
   
        return(
            <div>
            <articlesList articles={this.state.articles}/>
            </div>
         ) 
    }
}

ReactDOM.render(<App />, document.getElementById("side_bar"))





// const {isLoading, articles} = this.state; before return
// {
//     !isLoading && articles.length > 0 ? articles.map(article => {
//         return <li className="post space">
//         <a className="imagewrap" href="https://www.iflscience.com/space/scientists-confirm-the-discovery-of-a-mysterious-interstellar-space-boundary/">
//          <img src="https://cdn.iflscience.com/images/39ca5314-9372-5720-a03d-fc2a54741b9a/square_medium-1572974929-cover-image.jpg" alt=""/>
//         </a>
//         <div className="post-content">
//         <h4 className="title"><a href="https://www.iflscience.com/space/scientists-confirm-the-discovery-of-a-mysterious-interstellar-space-boundary/">Scientists Confirm The Discovery Of A Mysterious Interstellar Space Boundary</a></h4>
//         </div>
//         </li>
//     }) : null
// }

{/* <div className= {`widget ${isLoading ? 'is-loading' : ''}`}>
<h1 className = "widgetitle">POPULAR STORIES</h1>
<ul className="postlist" id="popularStories">	
    <li className="post space">
        <a className="imagewrap" href="https://www.iflscience.com/space/scientists-confirm-the-discovery-of-a-mysterious-interstellar-space-boundary/">
        <img onerror="this.onerror=null;this.src = 'https://cdn.iflscience.com/assets/site/img/ifls-placeholder-square.png?v=1.3.5'" src="https://cdn.iflscience.com/images/39ca5314-9372-5720-a03d-fc2a54741b9a/square_medium-1572974929-cover-image.jpg" alt=""/>
        </a>
        <div className="post-content">
        <h4 className="title"><a href="https://www.iflscience.com/space/scientists-confirm-the-discovery-of-a-mysterious-interstellar-space-boundary/">Scientists Confirm The Discovery Of A Mysterious Interstellar Space Boundary</a></h4>
        </div>
    </li>
    
</ul>    
</div>    */}