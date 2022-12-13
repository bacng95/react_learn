import React, {Component, useEffect, useState} from 'react';


// export default class LabDemo extends Component {

//     constructor (props) {
//         super(props)
//         this.state = {
//             counter: 0
//         }
//     }

//     handleClick = () => {
//         this.setState({
//             counter: this.state.counter + 1
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleClick}>CLick</button>
//                 <p>{this.state.counter}</p>
//             </div>
//         )
//     }
// }

export default function LabDemo (props) {

    const defaultValue = {
        count: 0
    }

    let [count, setCount] = useState()

    const handleClick = () => {
        setCount(count += 1)
    }

    useEffect (() => {
        if (count == undefined) {
            setCount(defaultValue['count'])
            return;
        }
        
        console.log(count)
    })

    return (
        <div>
            <button onClick={handleClick}>CLick</button>
            <p>{count}</p>
        </div>
    )
}