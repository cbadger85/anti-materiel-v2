import kebabcase from 'lodash/kebabCase';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Sectorial, sectorials } from '../../types/army';
import EntryList from '../EntryList/EntryList';
import Page from '../Page/Page';

const ListBuilder = () => {
  const { sectorial } = useParams<{ sectorial: Sectorial }>();

  const sectorialName = sectorials.find(
    name => sectorial === kebabcase(name.toLowerCase()),
  );

  if (!sectorialName) {
    return null;
  }

  return (
    <Page>
      <EntryList sectorial={sectorialName} />
    </Page>
  );
};

export default ListBuilder;
