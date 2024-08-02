import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const FilterButtons = ({ handleFilter }) => {
  return (
    <ButtonGroup>
      <Button variant="outline-primary" onClick={() => handleFilter('all')}>Todos</Button>
      <Button variant="outline-danger" onClick={() => handleFilter('Nintendo Switch')}>Nintendo Switch</Button>
      <Button variant="outline-primary" onClick={() => handleFilter('PlayStation')}>PlayStation</Button>
      <Button variant="outline-success" onClick={() => handleFilter('Xbox')}>Xbox</Button>
    </ButtonGroup>
  );
};

export default FilterButtons;
