import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(term) {
        this.setState({term});
        this.props.updateTerm(term);
    }

    render() {
        return (
            <div>
                <input type='text' onChange={event => this.handleChange(event.target.value)} value={this.state.term} />
            </div>
        );
    }
}

export default Search;