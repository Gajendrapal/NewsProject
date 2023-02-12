import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  

  constructor() {
    super();
    console.log("This is constructor from news components");
    this.state = {
      articles: [],
    };
  }

  async componentDidMount(){

    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c3fa8715aed04b0486e77762e8df1745";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({articles: parseData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h2>New Monkey - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => (
            <div className="col-md-4"  key={element.url}>
              <NewsItem
                title={element.title? element.title: ""}
                description={element.description? element.description:""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
               
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default News;
