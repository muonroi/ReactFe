import React from 'react'
export default function Checkout() {
    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th colSpan="2">Customer Information</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Full Name:</td>
                        <td><input type="text" className="input-medium" placeholder="John Doe" /></td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td><input type="email" className="input-medium" placeholder="example@example.com" /></td>
                    </tr>
                    <tr>
                        <td>Phone Number:</td>
                        <td><input type="tel" className="input-medium" placeholder="555-555-5555" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}