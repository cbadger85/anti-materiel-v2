import kebabcase from 'lodash/kebabCase';
import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Sectorial, sectorials } from '../../types/army';
import EntryList from '../EntryList/EntryList';
import Page from '../Page/Page';

const ListBuilder = () => {
  const { sectorial } = useParams<{ sectorial: Sectorial }>();

  const sectorialName = sectorials.find(
    name => sectorial === kebabcase(name.toLowerCase()),
  );

  return (
    <Page>
      {sectorialName ? (
        <EntryList sectorial={sectorialName} />
      ) : (
        <Redirect to="/" />
      )}
    </Page>
  );
};

export default ListBuilder;
