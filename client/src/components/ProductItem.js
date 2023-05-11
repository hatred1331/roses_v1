import React from 'react';
import {Card, Col} from "react-bootstrap";
import {Image} from "react-bootstrap";
import star from '../assets/star.jpg'
import {useNavigate} from 'react-router-dom';
import {PRODUCT_ROUTE} from "../utils/consts";

const ProductItem = ({product}) => {

    const navigate = useNavigate();



    return <Col md={3} className="mt-3" onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}>
        <Card style={{width: 150, cursor: 'pointer'}}>
            <Image width={150} height={150} src={process.env.REACT_APP_API_URL + product.img}/>
            <div className="text-black-50 d-flex justify-content-between align-items-center mt-1">

                <div className="d-flex align-items-center ">

                    <div>{product.rating}</div>
                    <Image src={star} style={{width: 20, height: 20}}/>
                </div>

            </div>
            <div>{product.name}</div>
            <div>{product.price} руб.</div>
        </Card>
    </Col>;
};

export default ProductItem;