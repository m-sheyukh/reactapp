import React , {Component} from "react";

// function Card({title , body}) {
//     return (
//         <div className="card">
//             <header className="card-header">
//             <h2>{title}</h2>
//             </header>
//             <section className="card-body">
//                 <p>{body}</p>
//             </section>
//             <footer>
//                 <p>Card Footer</p>
//             </footer>
//         </div>
//     )
// }

class Card extends Component {
    render(){
        let {title , body} = this.props;
        return (
            <div className="card">
                <header className="card-header">
                <h2>{title}</h2>
                </header>
                <section className="card-body">
                <p>{body}</p>
                </section>
                <footer>
                <p>Card Footer</p>
                </footer>
            </div>
            )
    }
}

export default Card;