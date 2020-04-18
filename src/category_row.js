import React from "react";

class CategoryRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.onNumberChange(this.props.index);
        event.preventDefault();
    }

    render() {
        const product = this.props.product;
        return (
            <li style={{margin: '10px', cursor: 'pointer'}} onClick={this.handleSubmit}>{product.category}</li>
        );
    }
}

export default CategoryRow;