import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// 1. antd 에서 DatePicker를 가져와서 사용합니다.
// 스타일을 변경할 필요가 있을 경우, assets > css > componentName.css 만들어서 사용합니다.
import { Select } from "antd";

const { Option } = Select;

const Container = styled.div`
  margin: 1rem;
`;

const Title = styled.div`
  margin-bottom: 0.4rem;
`;

const MainPage = ({ lang, versions, onChangeLang }) => {
  return (
    <Container>
      <Title>Dropdown example</Title>
      <Select
        defaultValue={lang}
        style={{ width: 200 }}
        // 2. option을 변경했을 때, 해당 언어의 version 정보를 불러올 수 있도록 onChange이벤트를 연결합니다.
        onChange={onChangeLang}
      >
        <Option value="R">R</Option>
        <Option value="Python">Python</Option>
      </Select>
      {/* 호출한 version정보를 출력합니다. */}
      <Select placeholder="version" style={{ width: 200 }}>
        {versions &&
          versions.map((version) => (
            <Option key={version} value={version}>
              {version}
            </Option>
          ))}
      </Select>
    </Container>
  );
};

MainPage.defaultProps = {
  lang: "R",
  versions: [],
  onChangeLang: (lang) => {},
};

MainPage.propTypes = {
  lang: PropTypes.string,
  versions: PropTypes.array,
  onChangeLang: PropTypes.func,
};

export default MainPage;
