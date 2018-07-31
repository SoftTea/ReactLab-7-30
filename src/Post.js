import React, { Component } from 'react';
import Comment from './Comment';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      body: 'body text body text body text body text body text body text body text body text',
    }
  }

  handleClick = (e)=>{
    console.log('test');
    const body = prompt();
    this.setState({
      body: body,
    })
  }

  render() {
    const comments = this.props.comments;
    const commentsMap = comments.map((c,i)=>{
      return <Comment key={i} body={c}/>
    })
    console.log(commentsMap);
    return ( 
    <div>
      <h1>{this.props.title}</h1>
      <h3>{this.props.author}</h3>
      <p>{this.state.body}</p>
      <button onClick={this.handleClick}>Edit</button>
      <h3>Comments:</h3>
       {commentsMap}
    </div>
    );
  }
}

export default Post;