import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
           title:"Hello From the other side",
           img:"",
           desc:"",
           img_author:"",
           counter:868,
           author_name:"Amal Al Jarousha",
           date: new Date().toLocaleString(),
        }
    }
   
    // getInformation(){
    //     $.ajax({
    //         url: "/repos",
    //         method: "GET",
    //         data: { username: term },
    //         datatype: "json"
    //         // success: function (a){console.log("Done")},
    //         // error: function (){console.log("Fail")}
    //       });
    //    }

    render(){
     return(
            <div id="content" class="col-xl-6">
                    <h1 class="title">{this.state.title}</h1>
                    <div class="social-shares">
                        <div class="share-count" id="counter_shares">{this.state.counter}<span> Shares</span></div>
                        <div class="share-widget share-article">
                            <div class="social">
                                <a class="facebook" href="#">
                                    <img id="id_social" src="http://www.boldmethod.com/images/social/share-facebook-long-v2.png"/>
                                </a>
                            </div>
                            <div class="social">
                                <a href="#" class="twitter">
                                <img id="id_social" src="https://images.squarespace-cdn.com/content/v1/563e2841e4b09a6ae020bd67/1530018807349-YP4LPA0C7INKN2XL0IM2/ke17ZwdGBToddI8pDm48kMJPBCPJsiaclxZdF5CWJnlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIMrHLJAYcctYfGny_wGpS1LuO2Ox8Cjc1KavDC4kMrXc/button+share+on+twitter.png"/>
                                </a>
                            </div> 
                        </div>									
                    </div>  
                   <img id="img" src="https://cdn.iflscience.com/images/9402f0b2-ea1d-53eb-a72b-38ab70c67f6a/extra_large-1573087146-cover-image.jpg" alt="New Study Challenges One Of Darwin's Major Theories Surrounding The Beginning Of Life On Earth"></img>
                      <div class="author" >
                          <a href="https://www.iflscience.com/team/madison-dapcevich/" class="image">
                            <img id="author_img"src="https://cdn.iflscience.com/images/2c71dbf8-f2ea-5a37-bd71-073bc362a79b/author_large-author.jpg"/> </a>
								<h5 class="name">{this.state.author_name}</h5>
								<span class="date">{this.state.date}</span>
                               </div>      	
								<div class="article-content">
                                      <p>{this.state.desc}</p>
                                </div>
                          </div>        
                        ) 
                      }
                    }
ReactDOM.render(<App />, document.getElementById("content"))
