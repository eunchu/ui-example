import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 3rem;
`;

const RightArea = styled.div`
  width: 14rem;
  height: 50rem;

  display: flex;
  flex-direction: column;

  border: 1px solid gray;

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

const LeftArea = styled.div``;

const Item = styled.div`
  width: 98%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  margin-bottom: 0.4rem;

  cursor: pointer;
`;

const LibraryList = ({ libraries, currentLibrary, onClickLibrary }) => {
  return (
    <Container>
      <RightArea>
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
      </RightArea>

      <LeftArea>
        {currentLibrary ? (
          <>
            <div>id: {currentLibrary.id}</div>
            <div>user: {currentLibrary.createUser}</div>
            <div>create date: {currentLibrary.createDate}</div>
            <div>desc: {currentLibrary.desc ? currentLibrary.desc : "-"}</div>
          </>
        ) : null}
      </LeftArea>
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
