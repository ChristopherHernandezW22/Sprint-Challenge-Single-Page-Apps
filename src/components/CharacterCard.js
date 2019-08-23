import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

export default function CharacterCard(props) {
  const { toon } = props;
  return (
    <Card>
    <Image src={toon.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{toon.name}</Card.Header>
      <Card.Meta>
        <span className='gender'>{toon.gender}</span>
        <span className='species'>{toon.species}</span><br></br>
        <span className='status'>Status: {toon.status}</span>
      </Card.Meta>
      <Card.Description>
        {toon.origin.name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Episodes:{toon.episode.length}
      </a>
    </Card.Content>
  </Card>
  );
}
