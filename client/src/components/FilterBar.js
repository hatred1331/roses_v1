import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, Row} from "react-bootstrap";
import {Context} from "../index";

const FilterBar = observer(() => {
    const {product} = useContext(Context)
    return (
        <Row className="d-flex">
            {product.filters.map(filter =>
                <Card
                    style={{cursor: 'pointer'}}
                key={filter.id}
                className="p-3"
                onClick={() => product.setSelectedFilters(filter)}
                border={filter.id === product.selectedFilter.id ? 'danger' : 'light'}
                >

                </Card>
            )}
        </Row>
    );
});

export default FilterBar;