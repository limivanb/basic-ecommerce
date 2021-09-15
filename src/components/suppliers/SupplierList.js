import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Table from 'react-bootstrap/Table';
import SupplierItem from './SupplierItem';

export default class SupplierList extends React.Component {
    constructor(){
        super();
        this.state = {
            suppliers: []
        }    
    }
    
    componentDidMount(){
        this.getSuppliers();
    }

    async getSuppliers(){
        const response = await axios.get('http://localhost:4000/api/suppliers');
        this.setState({ suppliers: response.data.results})
    }

    render() {
        return this.state.suppliers !== undefined ?  (
            <Table striped bordered hover className="mt1">
                <thead>
                    <tr>
                        <th>Supplier Name</th>
                        <th>Address</th>
                        <th>Email Address</th>
                        <th>Contact Info</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         this.state.suppliers.map((supplier) => {
                            return (
                                <SupplierItem supplier={supplier} />
                            )
                        })
                    }
                </tbody>
            </Table>
        ) : <p>No supplier data</p>
    }
}