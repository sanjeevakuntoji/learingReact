import React, {Component} from 'react';

class  SearchBar extends Component {
//   ///user changes text in an input//
//     onChangeInput(event) {
//         ///displaying typing input value using {event.target.value}
//         console.log(event.target.value)
//     }
    ///user clilck on something////
    // onInputClick () {
    //     console.log('input was clicked')
    // }

    state = { term:''}

    onFormSubmit =(event)=> {
        event.preventDefault();
        //invoking call back in child {child to parent communication}
        this.props.onSubmit(this.state.term)
        // console.log(this.state.term)
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"  
                        // onClick={this.onInputClick}
                        // onChange={ this.onChangeInput} 
                        value= {this.state.term}
                        onChange={(e)=> this.setState({term: e.target.value})} />
                    </div>
                </form>
            </div>
    )
} 
}
export default SearchBar;