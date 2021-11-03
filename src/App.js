import React from 'react';  
import './App.css';
import CardItem from './components/Card';
import { Carousel } from 'react-bootstrap';
//import ErrorBoundary from './components/errors/ErrorBoundary';

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
    btnHover : false
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
  this.setState({
    btnHover : true
  })
}

mouseLeave = (e) => {
  this.setState({
    btnHover : false
  })
}
  

  render() {

    let articleList = this.state.articles.map((article , index) => article.active ? <CardItem key={index} title={article.title} body={article.body} /> : null )
    let btnclasses = ['btn-more']

    if(this.state.btnHover) {
      btnclasses.push('active')
    }

    console.log(btnclasses)

    return (
      <div className="app">

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ahangchin.ir/wp-content/uploads/2020/06/music-lite.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ahangchin.ir/wp-content/uploads/2020/06/music-lite.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ahangchin.ir/wp-content/uploads/2020/06/music-lite.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

        <div className="container">
        { articleList }
        </div>
        {  this.state.loading 
          ? <div>Loading ...</div> : null }

        <button
        //className = {`btn-more ${this.state.btnHover ? 'active' : ''}`}
        className={btnclasses.join(' ')}
        onClick={this.loadMore}
        onMouseEnter={this.mouseEnter} 
        onMouseLeave={this.mouseLeave}

        >load more</button>
      </div>
    );
  }
}

export default App;
