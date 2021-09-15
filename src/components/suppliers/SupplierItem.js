import { Link } from 'react';

function SupplierItem(props) {
    return (
        <tr>
            <td>{props.supplier.supplier_name}</td>
            <td>{props.supplier.address}</td>
            <td>{props.supplier.email_address}</td>
            <td>{props.supplier.mobile_number}</td>
            <td>
                <span>Edit</span>&nbsp;&nbsp;
                <span>Delete</span>
            </td>
        </tr>
    )

}

export default SupplierItem;