import React from 'react';
import Page from '../Page/Page';
import EntryList from '../EntryList/EntryList';
import kebabcase from 'lodash/kebabCase';
import { sectorials, Sectorial } from '../../types/army';
import { useParams } from 'react-router-dom';

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
