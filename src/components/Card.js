import React , {Component} from 'react'
import './Card.css';


class Card extends Component {
    eventHandler(e){
        console.log(this)
        console.log('click')
    }

    render(){
        let {title , body } = this.props;
        return (
                    <div className="card">
                        <header className="card-header">
                            <h2>{title}</h2>
                        </header>
                        <section className="card-body">
                            <p>{body}</p>
                            <button onClick={this.eventHandler.bind(this , 'xxxx')} >Click</button>
                        </section>
                        <footer>
                            <p>Card Footer</p>
                        </footer>
                    </div>
                )
    }
}

export default Card;