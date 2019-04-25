import React, { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
        this.Likes = 0;
        this.Dislikes = 0;
    }

    like = () => {
        this.refs.lastClick.value = "Like";
        this.Likes++;
        this.refs.likes.innerText = this.Likes;
    }

    dislike = () => {
        this.refs.lastClick.value = "Dislike";
        this.Dislikes++;
        this.refs.dislikes.innerText = this.Dislikes;
    }

    render() {
        const {title, message} = this.props;
        
        return (
            <>
                <label>
                    {title}
                </label>
                <br/>
                <textarea>
                    {message}
                </textarea>
                <br/>

                <button onClick={this.like}>Like</button>
                <button onClick={this.dislike}>Dislike</button>
                <br/>
                <label>
                    Last click:
                    <input type="text" ref="lastClick"/>
                </label>
                <br/>
                <label>
                    Likes:
                    <label ref="likes"/>
                </label>
                <br/>
                <label>
                    Dislikes:
                    <label ref="dislikes"/>
                </label>
            </>
        );
    }
}

export default Message;