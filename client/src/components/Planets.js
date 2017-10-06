import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import axios from 'axios';

class Planets extends React.Component {
  state= { planets: [] }

  componentDidMount() {
    axios.get('https://swapi.co/api/planets/')
    .then(res => {
      this.setState({ planets: res.data.entries })
    })
  }
     
  showPlanets = () => {
    const { planets } = this.state
      return planets.map( planet => 
        <Segment>
          {<span>{planet.name}</span>}
        </Segment>
      )
  }

  render() {
    return(
      <Container>
        <Header as="h3">Planets!</Header>
        {this.showPlanets()}
      </Container>
    )
  }
}


// POTENTIAL???
// componentDidMount() {
//   axios.get('https://swapi.co/api/planets/')
//   .then(results => {
//     return results.json();
//   }).then( data => {
//     let planets = data.results.map((planet) => {
//       return(
//         <div>{planet.name}</div>
//       )
//   })
//     this.setState({ planets: planets })
//     console.log("state", this.state.planets)
//   });
// }

export default Planets;