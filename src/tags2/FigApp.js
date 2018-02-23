import React, { Component } from 'react';
import { connect } from 'react-redux';
import FigHeader from './FigHeader';
import FigTree from './FigTree';
import styled from 'styled-components';
import { initializeState } from './actions';

const Container = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
`;

const Inner = styled.div`
  display: flex;
  height: calc(100% - 5rem);
  height: 100%;
`;

const Left = styled.div`
  flex: 0 0 250px;
  min-width: 250px;
  border-right: 1px solid #c1c1c1;
  position: relative;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

class FigApp extends Component {
  componentWillMount() {
    this.props.initializeState({
      ui: {
        isTree: false,
        isInfo: false
      },
      parentIndex: 0,
      childrenIndex: 0,
      list: [
        {
          name: 'aaa',
          items: [
            {
              name: 'aaa',
              template: 'aaa',
              _opts: {}
            }
          ]
        },
        {
          name: 'bbb',
          items: [
            {
              name: 'bbb',
              template: 'bbb',
              _opts: {}
            }
          ]
        }
      ],
    });
  }
  render() {
    const { state, initializeState } = this.props;

    return (
      <Container>
        <Inner>
          <Left>
            <FigTree state={state} />
          </Left>
          <Right>
            <FigHeader state={state} />
          </Right>
        </Inner>
      </Container>)
  }
}

export default connect(
    state => ({ state: state }),
    { initializeState }
)(FigApp)
