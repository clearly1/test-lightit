import React, {useEffect, useState} from 'react';
import Product from "../Product/Product";
import styles from "./productsContainerStyles.module.sass"
import {getProducts} from "../../api";

function ProductsContainer(props) {

    const [products, setProducts] = useState([]);

    const loadProducts = () => {
        getProducts('/api/products/').then((response => {
            console.log(response.data);
            setProducts([
                ...response.data
            ]);
        }))
    };

    useEffect(()=>{
        loadProducts();
    },[]);

    return (
        <div className={styles.productsContainer}>
            {
                products.map(product => (
                    <Product key={product.id} product={product}/>
                ))
            }
            <Product product={
                {
                    id:3,
                    img: 'imgUrl',
                    title: 'product3',
                    text: 'rofniwebgrkuwbgливслуиклмиулмиулимлумлкуиалуикалу умтукат а4а4кета 4ак4иаш4а 4лкшл4кешмкуал4ка 4пшл4ишеп4 4лепш4п ука оукалиш3395850838рпщгиущп у9щр3пщпаищуак ащ3ркпар9щг3киащ3 3ишкгра3гщаищ3ка 33bwkgbkwb4gk'
                }
            }/>
        </div>
    );
}

export default ProductsContainer;