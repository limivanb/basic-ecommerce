import { useState } from 'react';

// import { useHistory } from 'react-router-dom';

import ProductList from "../components/products/ProductList";
import Card from "../components/ui/Card";
import { Button } from 'react-bootstrap';

import ProductEntry from "../components/products/ProductEntry";
import Backdrop from "../components/ui/BackDrop";

const Products = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    function AddNewProduct() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    function AddProductHandler(props) {

        fetch('http://localhost:5000/api/products/create', {
            method: 'POST',
            body: props,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            setModalIsOpen(false);

            window.location = "/products";
        });

    }

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1>Products</h1>
                <Button onClick={AddNewProduct}>Add New Product</Button>
            </div>
            <Card>
                <ProductList />
            </Card>
            {modalIsOpen && <ProductEntry onCancel={closeModal} onAddProduct={AddProductHandler} />}
            {modalIsOpen && <Backdrop onCancel={closeModal} />}
        </div>
    )
}

export default Products;