import {useState} from "react";

export default function AddProduct () {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        category: "",
        quantity: 0,
        price: 0,
    });

    const handleChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Product submission. Name: ${product.name}, Description: ${product.description},\nCategory: ${product.category}, Quantity: ${product.quantity}, Price: ${product.price}`);
        console.log("Product Submission:", product);
    }

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <label htmlFor="name">Name: </label>
                        </td>
                        <td>
                            <input type="text" name="name" id="name" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="description">Description: </label>
                        </td>
                        <td>
                            <input type="text" name="description" id="description" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="category">Category: </label>
                        </td>
                        <td>
                            <input type="text" name="category" id="category" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="quantity">Quantity: </label>
                        </td>
                        <td>
                            <input type="number" name="quantity" id="quantity" onChange={handleChange} value={product.quantity} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="price">Price: </label>
                        </td>
                        <td>
                            <input type="number" name="price" id="price" onChange={handleChange} value={product.price} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" onSubmit={handleSubmit} />
                        </td>
                        <td>
                            <input type="button" onClick={() => console.log("Not Implemented :/")} value="Cancel" />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}