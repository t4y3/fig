import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #fff;
  user-select: none;
`;

const Title = styled.div`
  padding: 0 16px;
  margin-bottom: 16px;
  color: #10263d;
  font-size: 3rem;
  font-weight: bold;
  line-height: 4rem;
  border-bottom: 1px solid #c1c1c1;
`;

const List = styled.ul`
  flex: 1;
  overflow: scroll;
`;

const ListItem = styled.li`
  cursor: pointer;
  position: relative;
  color: #10263d;
`;

const TagTitle = styled.p`
  display: flex;
  align-items: center;
  padding: 8px 8px;
  position: relative;
  font-size: 1.6rem;
`;

const Icon = styled.i`
  margin-left: auto;
  font-size: 18px;
`;

const TagListItem = styled.p`
  padding: 8px 8px;
  margin-left: 8px;
  position: relative;
  font-size: 1.4rem;

  &:hover {
     background-color: #10263d;
     color: #fff;
  }

  &.active:after {
    content: "";
    display: block;
    width: 4px;
    height: 100%;
    position: absolute;
    top: 0;
    left: -8px;
    background-color: #10263d;
  }
`;

export default class FigTree extends React.Component {
  render() {
    return (
      <Container>
        <Title>Fig</Title>
        <List>
          <ListItem>
            <TagTitle>Button<Icon className="material-icons">keyboard_arrow_right</Icon><Icon className="material-icons">keyboard_arrow_down</Icon></TagTitle>
            <div className="tag-list">
              <TagListItem>default</TagListItem>
              <TagListItem className="active">defaultdefault</TagListItem>
            </div>
          </ListItem>
        </List>
      </Container>
    )
  }
}
