import "./Home.css";
import React from "react";




export default class Converter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { currency: '€'}
    }

    handleChangeCurrency = event => {
        this.setState({ currency: this.state.currency === '€' ? '$' : '€' })
    }

    render() {
        return (
            <div>
                <Display currency={this.state.currency} />
                <CurrencySwitcher 
                    currency={this.state.currency}
                    handleChangeCurrency={this.handleChangeCurrency}
                />
            </div>
        )
    }
}

const CurrencySwitcher = props => {
    return (
        <button className="btn btn-success" onClick={props.handleChangeCurrency}>
            Current currency is {props.currency}. Change It!
        </button>
    )
}

const Display = props => {
    return <p>Current currency is {props.currency}. </p>
}
