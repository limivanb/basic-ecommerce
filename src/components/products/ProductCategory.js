function ProductCategory(props) {
    return (
        <select id={props.id} ref={props.ref} >
            <option value="" >Select Category</option>
            <option value="Cameras" >Cameras</option>
            <option value="Computers" >Computers</option>
            <option value="Laser" >Laser</option>
            <option value="Printer" >Printer</option>
        </select>
    )

}

export default ProductCategory;