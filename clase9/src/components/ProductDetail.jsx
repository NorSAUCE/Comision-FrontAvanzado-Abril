import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'

function ProductDetail(){
    const {id}= useParams()
    const [product,setProduct] = useState(null)

    useEffect(()=>{
        const fetchProduct = async()=>{
            const response = await fetch(`https://api.mercadolibre.com/items/${id}`)
            const data = await response.json()
            setProduct(data)
        }

        fetchProduct()
    },[id])

    if(!product) return <p>Loading...</p>

    return(
        <div>
            <h2>{product.title}</h2>
            <img src={product.pictures[0].url} alt={product.title}/>
            <p>{product.price} {product.currency_id}</p>
            <p>{product.condition}</p>
        </div>
    )
}

export default ProductDetail;

