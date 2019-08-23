import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function EpisodesCard(props) {
    const { episodes } = props;
    console.log(props);
    return (
  
      <Card>
      <Card.Content>
        <Card.Header>{episodes.name}</Card.Header>
        <Card.Meta>
          <span className='episode'>{episodes.episode}</span>
          <br></br>
          <span className='aired'>Aired: {episodes.air_date}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
    
    )
}