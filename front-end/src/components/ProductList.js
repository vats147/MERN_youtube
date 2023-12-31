import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch('http://localhost:3000/products');
        result = await result.json();
        setProducts(result);
    }

    const deleteItem =async (id) =>{
       let result = await fetch('http://localhost:3000/product/'+id,{
              method:"DELETE"
       });
       result = await result.json();
       if(result.deletedCount ==0 )
              console.warn("No product Found");
       else
       {
              console.warn("product Deleted");
              getProducts();
       }



    }

    console.warn(products);

    return (
        <div className="product-list">
            <h3>Product List</h3>
            <ul>
                <li>S. No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Operation</li>

            </ul>
            {
                products.map((item,index)=>
                <ul key={item}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.category}</li>
                <li><button onClick={()=>deleteItem(item._id)}>delete</button>
                     <Link to={"/update/"+item._id}>update</Link>
                </li>

            </ul>
                )
            }
        </div>
    )
}

export default ProductList;