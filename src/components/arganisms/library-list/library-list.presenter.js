import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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

  margin-bottom: 0.4rem;

  cursor: pointer;
`;

const LibraryList = ({ libraries, onClickLibrary }) => {
  return (
    <Container>
      <Title>Library List</Title>
      <ListArea>
        {libraries.length &&
          libraries.map((library) => (
            <Item
              key={library.id}
              title={library.name}
              onClick={(event) => onClickLibrary(event, { id: library.id })}
            >
              {library.name}
            </Item>
          ))}
      </ListArea>
    </Container>
  );
};

LibraryList.defaultProps = {
  onClickLibrary: (event, { id }) => {},
};

LibraryList.propTypes = {
  onClickLibrary: PropTypes.func,
};

export default LibraryList;
