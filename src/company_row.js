import React from "react";

class CompanyRow extends React.Component {
    render() {
        const product = this.props.product;
        return (
            <div style={{width:'30%', height: '100px', border: '4px double black', float: 'left', margin: '1%'}}>
                {product.name}
            </div>
        );
    }
}

export default CompanyRow;