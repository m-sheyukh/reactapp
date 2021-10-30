import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

  // function App() {
  // const [stateArticle , setArticleState] = useState ({
  //   articles : [
  //     {id : 1 , title : 'article 1' , body : 'this is article 1' },
  //     {id : 2 , title : 'article 2' , body : 'this is article 2' },
  //     {id : 3 , title : 'article 3' , body : 'this is article 3' },
  //   ]
  // })

    
  //       let articleList = stateArticle.articles.map((article , index) => <Card key={index} title={article.title} body={article.body} />)

  //       const loadMore = (e) => {
  //         let articles = [
  //           {id : 1 , title : 'article 4' , body : 'this is article 4' },
  //           {id : 2 , title : 'article 5' , body : 'this is article 5' },
  //           {id : 3 , title : 'article 6' , body : 'this is article 6' },
  //         ] 

          
  //         setArticleState(prevState => {
  //           return {
  //             articles : [...prevState.articles , ...articles ]
  //           }
  //         })
  //       }


  //       console.log(stateArticle)
  //   return (
  //     <div className="app">
  //       {
  //         articleList
  //       }

  //       <button onClick={loadMore}>load more</button>
  //     </div>
  //   );
  // }

class App extends React.Component {

  state = {
    articles : [
      {id : 1 , title : 'article 1' , body : 'this is article 1' , active : 1 },
      {id : 2 , title : 'article 2' , body : 'this is article 2'  , active : 0},
      {id : 3 , title : 'article 3' , body : 'this is article 3'  , active : 1},
    ],
    title : 'this is roocket',
    loading : false,
    btnStyle : {
      backgroundColor : 'rgba(0,0,0,.8)',
      padding : '10px 25px' ,
      color : 'white' ,
      border : 'none' ,
      borderRadius : '3px'
    }
  }

  loadMore = () => {
    this.setState({ loading : true})
    setTimeout(() => {
      let articles = [
        {id : 1 , title : 'article 4' , body : 'this is article 4' , active : 1 },
        {id : 2 , title : 'article 5' , body : 'this is article 5' , active : 0 },
        {id : 3 , title : 'article 6' , body : 'this is article 6' , active : 1 },
      ] 


      this.setState(prevState => {
        return {
          articles : [...prevState.articles , ...articles ],
          loading : false
        }
      })
    }, 3000);
  }



mouseEnter = (e) => {
  this.setState(prevState => {
    return {
      btnStyle : {
        ...prevState.btnStyle,
        backgroundColor : 'rgba(0,0,0,.5)'
      }
    }
  })
}

mouseLeave = (e) => {
  this.setState(prevState => {
    return {
      btnStyle : {
        ...prevState.btnStyle,
        backgroundColor : 'rgba(0,0,0,.8)'
      }
    }
  })
}
  

  render() {

    let articleList = this.state.articles.map((article , index) => article.active ? <Card key={index} title={article.title} body={article.body} /> : null )

      console.log(this.state.btnStyle)

    return (
      <div className="app">
        { articleList }
        {  this.state.loading 
          ? <div>Loading ...</div> : null }

        <button style={ this.state.btnStyle } onClick={this.loadMore}
        onMouseEnter={this.mouseEnter} 
        onMouseLeave={this.mouseLeave}

        >load more</button>
      </div>
    );
  }
}

export default App;
