import React from "react";
import { Item, Icon } from "semantic-ui-react";

export default function BlogItem({ img, header, description }) {
  return (
    <Item>
      <Item.Image size="small" src={img} />

      <Item.Content>
        <Item.Header as="a">{header}</Item.Header>
        <Item.Description>
          <p>{description}</p>
          <p>
            Many people also have their own barometers for what makes a cute
            dog.
          </p>
        </Item.Description>
        <Item.Extra>
          <Icon color="green" name="check" /> 121 Votes
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
