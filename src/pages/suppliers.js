import { useState } from 'react';

import SupplierList from "../components/suppliers/SupplierList";
import Card from "../components/ui/Card";
import { Button } from 'react-bootstrap';

import SupplierEntry from "../components/suppliers/SupplierEntry";
import Backdrop from "../components/ui/BackDrop";

import axios from 'axios';

const Suppliers = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function AddNewSupplier() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    function AddSupplierHandler(props) {
        const { supplier_name, address, email_address, mobile_number } = props;

        axios.post('http://localhost:4000/api/suppliers', {
            "supplier_name": supplier_name,
            "address": address,
            "email_address": email_address,
            "mobile_number": mobile_number
        }).then( () => {
            setModalIsOpen(false);

            window.location = "/suppliers";
        });

    }

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h4>Suppliers</h4>
                <Button className="btn btn-primary" onClick={AddNewSupplier}>Add New Supplier</Button>
            </div>
            

                <SupplierList />
            
            {modalIsOpen && <SupplierEntry onCancel={closeModal} onAddSupplier={AddSupplierHandler} />}
            {modalIsOpen && <Backdrop onCancel={closeModal} />}
        </div>
    )
}

export default Suppliers;