import React , {Component} from 'react'
import './Card.css';
import {Card , Button } from 'react-bootstrap';


class CardItem extends Component {
    eventHandler(e){
        console.log(this)
        console.log('click')
    }

    render(){
        let {title , body } = this.props;
        //throw Error('something went wrong');
        return (
            <Card>
                <Card.Header as="h4" >{title}</Card.Header>
                <section className="card-body">
                <Card.Body>
                <Card.Text>{body}</Card.Text>
                <Button onClick={this.eventHandler.bind(this , 'xxxx')} >Click</Button>
                </Card.Body>
                </section>
                <Card.Footer>
                <p>Card Footer</p>
                </Card.Footer>
            </Card>
                )
    }
}

export default CardItem;