import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateProduct from "../components/modals/CreateProduct";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState()
    const [productVisible, setProductVisible] = useState()
    return (
        <Container className="d-flex flex-column" >

            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={()=> setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setProductVisible(true)}
            >
                Добавить товар
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"

            >
                Заказы
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"

            >
                Вопросы
            </Button>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
            <CreateType show ={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;