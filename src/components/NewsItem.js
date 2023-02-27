import React, { Component } from 'react'

export default class NewsItem extends Component {

    
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source}=this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger"style={{left:'90%', zIndex:'1'}}>
            {source}
            <span class="visually-hidden">unread messages</span>
          </span>
          <img
            src={
              !imageUrl
                ? "https://images.hindustantimes.com/img/2023/01/14/550x309/congress_mp_santokh_chaudhary_bharat_jodo_1673673646594_1673673665571_1673673665571.PNG"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
            <p class="card-text">
              <small class="text-muted">
                By {author} on {new Date(date).toLocaleTimeString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
