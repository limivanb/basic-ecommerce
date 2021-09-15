import Table from 'react-bootstrap/Table';
import SupplierItem from './SupplierItem';

function SupplierList(props) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Supplier Name</th>
                    <th>Address</th>
                    <th>Contact Info</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.suppliers.map((supplier) => {
                        return (
                            <SupplierItem supplier={supplier} />
                        )
                    })
                }

            </tbody>
        </Table>
    )
}

export default SupplierList;