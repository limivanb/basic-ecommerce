import React from 'react';
import axios from 'axios';

import Table from 'react-bootstrap/Table';
import ProductItem from './ProductItem';

export default class ProductList extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/api/products`)
            .then(res => {
                // console.log('1');
                return res.data;

            }).then(data => {
                // console.log('2');
                this.setState({ products: data });
            }).catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.products.map((product) => {
                            return (
                                <ProductItem product={product} />
                            )
                        })
                    }

                </tbody>
            </Table>
        )
    }
}