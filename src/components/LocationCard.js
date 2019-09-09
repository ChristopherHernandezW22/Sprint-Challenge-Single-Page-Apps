import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function LocationCard(props) {
  const { location } = props;
  return (

    <Card>
    <Card.Content>
      <Card.Header>{location.name}</Card.Header>
      <Card.Meta>
        <span className='dimension'>Dimension: {location.dimension}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Residents:{location.residents.length}
      </a>
    </Card.Content>
  </Card>
  
    )
}