import React, {useEffect, useState} from 'react';
import Product from "../../components/Product/Product";
import styles from "./catalogProductsPageStyles.module.sass"
import {getProducts} from "../../api";

function CatalogProductsPage(props) {

    const [products, setProducts] = useState([]);
    const [openedProductId, setOpenedProductId] = useState(null);

    const loadProducts = () => {
        getProducts('/api/products/').then((response => {
            setProducts([
                ...response.data
            ]);
        }))
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const openMoreProductInfoById = (id) => {
        setOpenedProductId(id);
    };

    return (
        <div className={styles.productsContainer}>
            {
                products.map(product => (
                    <Product key={product.id} product={product} openProductFunc={openMoreProductInfoById} openedProductId={openedProductId}/>
                ))
            }
        </div>
    );
}

export default CatalogProductsPage;