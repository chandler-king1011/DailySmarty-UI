import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

class Post extends Component {

    constructor(props) {
        super(props);

        this.state= {
            height: 0
        }

        this.getPostLinkName= this.getPostLinkName.bind(this);
    }

    renderPostTopics() {
        let topics = this.props.associated_topics.map((topic ,index) => {
            return (
                <span className="post-topic" key={index}>{topic}</span>
            ) 
        })
        return topics
    }

    getPostLinkName(url) {
        let startingIndex = url.lastIndexOf('/') + 1;
        let linkTitle = url.substring(startingIndex, url.length);

        if (startingIndex == url.length ) {
            linkTitle = url.slice(0, startingIndex);
            startingIndex = linkTitle.lastIndexOf('/');
            linkTitle = url.substring(startingIndex, url.length-1);
        }
        while (linkTitle.includes("-")){
        linkTitle = linkTitle.replace("-", " ");
        }

        linkTitle = linkTitle.toUpperCase();
        return linkTitle;
    }

    renderLinks() {
        let links = this.props.post_links.map((post_link, index) => {
            return (
            <div className="post-link" key={index} >
                <div className="post-link-box"></div>
                <div className="post-link-link">
                    <a href={post_link.link_url}>{this.getPostLinkName(post_link.link_url)}</a>
                </div>
            </div>
            )
        })
        if(links == 0) {
            return <div className="no-content"> No Post Links </div>
        }

        return links;
    }

    handleMouseEnter() {
        this.setState({
            height: 70
        })
    }
    handleMouseLeave() {
        this.setState({
            height: 0
        })
    }


    render() {

      if (this.props.type === "recent"){
        return (
            <li className="recent-post">
                <div className="recent-post-title">
                    {this.props.title}
                </div>
                <div className="recent-post-topics">
                    {this.renderPostTopics()}
                </div>
            </li>
        )
      }else if (this.props.type === "result") {
          return (
            <li className="result-post"
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}>
                <div className="result-post-topics">
                    {this.renderPostTopics()}
                </div>
                <div className="result-post-title">
                    <a href={this.props.url_for_post}>{this.props.title}</a>
                </div>
                <AnimateHeight
                    duration={500}
                    height={this.state.height}
                >
                    <div className="result-post-links">
                        {this.renderLinks()}
                    </div>
                </AnimateHeight>
            </li>
          )
      }
    }
}

export default Post;