import React from 'react';
import styled from 'styled-components';

const data = [
  {
    name: "kyle",
    age: "27"
  },
  {
    name: "John",
    age: "old"
  },
  {
    name: "Jodi",
    age: "less old",
  }
];

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
`;

const List = styled.ul``;

const ListItem = styled.li``;

class Home extends React.Component {
  render() {
    return (
      <Container>
        {data.map((e) => {
          return (
            <ListItem>
              <b>{e.name}</b>
              <div>{e.age}</div>
            </ListItem>
          )
        })}
      </Container>
    )
  }
}

export default Home;