function ProductItem(props) {
    return (
        <tr>
            <td>{props.product.product_code}</td>
            <td>{props.product.product_name}</td>
            <td>{props.product.category}</td>
            <td>{props.product.description}</td>
        </tr>
    )

}

export default ProductItem;