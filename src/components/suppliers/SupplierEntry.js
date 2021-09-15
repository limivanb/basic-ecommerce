import { useRef } from 'react';
import Modal from '../../components/ui/Modal.module.css';
import Form from '../../components/ui/Form.module.css';
import { Button } from 'react-bootstrap';

function SupplierEntry(props) {
    const refSupplierName = useRef();
    const refSupplierAddress = useRef();
    const refEmailAddress = useRef();
    const refMobileNumber = useRef();


    function submitHandler(e) {
        e.preventDefault();

        const txtSupplierName = refSupplierName.current.value;
        const txtSupplierAddress = refSupplierAddress.current.value;
        const txtEmailAddress = refEmailAddress.current.value;
        const txtMobileNumber = refMobileNumber.current.value;

        // console.log("Supplier name: ", txtSupplierName);


        const SupplierData = {
            supplier_name: txtSupplierName,
            address: txtSupplierAddress,
            email_address: txtEmailAddress,
            mobile_number: txtMobileNumber
        }

        // console.log("DATA: ", SupplierData);

        props.onAddSupplier(SupplierData);
    }
    function onCancelHandler() {
        props.onCancel();
    }

    return (
        <section className={Modal.modal}>
            <h4>Add New Supplier</h4>
            <form onSubmit={submitHandler} >
                <div className={Form.control}>
                    <label htmlFor="supplier_name">Supplier Name</label>
                    <input id="supplier_name" type="text" required ref={refSupplierName} />
                </div>
                <div className={Form.control}>
                    <label htmlFor="address">Address</label>
                    <input id="address" type="text" ref={refSupplierAddress} />
                </div>
                <div className={Form.control}>
                    <label htmlFor="email_address">Email Address</label>
                    <input id="email_address" type="email" required ref={refEmailAddress} />
                </div>
                <div className={Form.control}>
                    <label htmlFor="mobile_number">Mobile number</label>
                    <input id="mobile_number" type="text" required ref={refMobileNumber} />
                </div>
                <div className="d-flex justify-content-between">
                    <Button className="btn btn-light" onClick={onCancelHandler} >Cancel</Button>
                    <Button type="submit" className="btn btn-primary" >Add Supplier</Button>
                </div>
            </form>
        </section>
    )
}

export default SupplierEntry;