import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 14rem;
  height: 50rem;

  display: flex;
  flex-direction: column;
  
  border: 1px solid gray;

  margin: 3rem 0 0 3rem;
  padding: 0.8rem;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const ListArea = styled.div`
  height: 0;
  flex-grow: 1;

  color: #5573a3;
  overflow: auto;

  margin-top: 1rem;
`;

const Item = styled.div`
  width: 98%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const LibraryList = () => {
  return (
    <Container>
      <Title>Library List</Title>
      <ListArea>
        <Item>
          1. test library name
        </Item>
      </ListArea>
    </Container>
  );
};

export default LibraryList;