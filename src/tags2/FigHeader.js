import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addValue } from './actions';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid #c1c1c1;
  background-color: #fff;
  box-shadow: 0 0 16px 0 #c1c1c1;
  color: #10263d;
`;

const Icon = styled.div`
  font-size: 3rem;
  line-height: 4rem;
  margin-right: 8px;
`;

const Text = styled.div`
  font-size: 2rem;
  line-height: 4rem;
`;

export default class FigHeader extends Component {
  render() {

    const state = this.props.state;

    return (
      <Container>
        <Icon className="material-icons">pageview</Icon>
        <Text className="header-text">タグ名 - タグ名</Text>
      </Container>
    )
  }
}
