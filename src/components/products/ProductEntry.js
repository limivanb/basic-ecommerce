import { useRef } from 'react';
import Modal from '../../components/ui/Modal.module.css';
import Form from '../../components/ui/Form.module.css';
import { Button } from 'react-bootstrap';

// import ProductCategory from './ProductCategory';


function ProductEntry(props) {
    const refProductCode = useRef();
    const refProductName = useRef();
    const refCategory = useRef();
    const refDescription = useRef();

    function submitHandler(e) {
        e.preventDefault();

        const txtProductCode = refProductCode.current.value;
        const txtProductName = refProductName.current.value;
        const txtCategory = refCategory.current.value;
        const txtDescription = refDescription.current.value;

        const ProductData = {
            product_code: txtProductCode,
            product_name: txtProductName,
            category: txtCategory,
            description: txtDescription
        }

        props.onAddProduct(JSON.stringify(ProductData));
    }
    function onCancelHandler() {
        props.onCancel();
    }

    return (

        <section className={Modal.modal}>

            <h2>Add New Supplier</h2>
            <form className={Form.form} onSubmit={submitHandler} >
                <div className={Form.control}>
                    <label htmlFor="product_code">Product Code</label>
                    <input id="product_code" type="text" required ref={refProductCode} />
                </div>
                <div className={Form.control}>
                    <label htmlFor="product_name">Product Name</label>
                    <input id="product_name" type="text" ref={refProductName} />
                </div>
                <div className={Form.control}>
                    <label htmlFor="category">Category</label>
                    <input id="category" type="text" ref={refCategory} />
                </div>
                <div className={Form.control}>
                    <label htmlFor="description">Description</label>
                    <input id="description" type="text" ref={refDescription} />
                </div>

                <div className="d-flex justify-content-between">
                    <Button className="btn btn-light" onClick={onCancelHandler} >Cancel</Button>
                    <Button type="submit" className="btn btn-primary" >Add Product</Button>
                </div>

            </form>

        </section>

    )
}

export default ProductEntry;