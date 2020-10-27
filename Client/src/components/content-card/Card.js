import React from 'react';
import classNames from 'classnames';
import Text from '../../components/text';

import {GridContainer, GridRow, GridColumn, Card, CardCenter, CardImage, CardNumber, CardTitle, CardDescription, CardTitleCenter, CardDescriptionCenter, CardImageCenter} from './styles/card';

export function GroupCard({ classes, children, ...restProps }) {
    return (
      <GridContainer className={classNames('groupCard', classes)} {...restProps}>
        {children}
      </GridContainer>
    );
  }

  GroupCard.Text = function CardText({ classes, children, ...restProps }) {
    return (
      <Text className={classNames('card__text', classes)} {...restProps}>
        {children}
      </Text>
    );
  };

  GroupCard.GridColumn = function CardGridColumn({ classes, children, ...restProps }) {
    return (
      <GridColumn className={classNames('groupCard__gridColumn', classes)} {...restProps}>
        {children}
      </GridColumn>
    );
  };

  GroupCard.GridRow = function CardGridRow({ classes, children, ...restProps }) {
    return (
      <GridRow className={classNames('groupCard__gridRow', classes)} {...restProps}>
        {children}
      </GridRow>
    );
  };
  
  GroupCard.Card = function Card_Card({ classes, children, ...restProps }) {
    return (
      <Card className={classNames('groupCard__card', classes)} {...restProps}>
        {children}
      </Card>
    );
  };
  
  GroupCard.CardCenter = function Card_CardCenter({ classes, children, ...restProps }) {
    return (
      <CardCenter className={classNames('groupCard__cardCenter', classes)} {...restProps}>
        {children}
      </CardCenter>
    );
  }; 

  GroupCard.CardImage = function Card_CardImage({ classes, children, ...restProps }) {
    return (
      <CardImage className={classNames('groupCard__cardImage', classes)} {...restProps}>
        {children}
      </CardImage>
    );
  }; 


  GroupCard.CardNumber = function Card_CardNumber({ classes, children, ...restProps }) {
    return (
      <CardNumber className={classNames('groupCard__cardNumber', classes)} {...restProps}>
        {children}
      </CardNumber>
    );
  }; 

  GroupCard.CardTitle = function Card_CardTitle({ classes, children, ...restProps }) {
    return (
      <CardTitle className={classNames('groupCard__cardTitle', classes)} {...restProps}>
        {children}
      </CardTitle>
    );
  }; 

  GroupCard.CardDescription = function Card_CardDescription({ classes, children, ...restProps }) {
    return (
      <CardDescription className={classNames('groupCard__cardDescription', classes)} {...restProps}>
        {children}
      </CardDescription>
    );
  }; 

  GroupCard.CardImageCenter = function Card_CardImageCenter({ classes, children, ...restProps }) {
    return (
      <CardImageCenter className={classNames('groupCard__cardImageCenter', classes)} {...restProps}>
        {children}
      </CardImageCenter>
    );
  }; 

  GroupCard.CardTitleCenter = function Card_CardTitleCenter({ classes, children, ...restProps }) {
    return (
      <CardTitleCenter className={classNames('groupCard__cardTitleCenter', classes)} {...restProps}>
        {children}
      </CardTitleCenter>
    );
  }; 

  GroupCard.CardDescriptionCenter = function Card_CardDescriptionCenter({ classes, children, ...restProps }) {
    return (
      <CardDescriptionCenter className={classNames('groupCard__cardDescriptionCenter', classes)} {...restProps}>
        {children}
      </CardDescriptionCenter>
    );
  }; 
