import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import EntryDetails from '../components/EntryDetails';
import PageTemplate from '../components/PageTemplate';
import { RootState } from '../store/rootReducer';

const EntryFormPage = () => {
  const { isEntryFormMode, entry } = useSelector((state: RootState) => ({
    isEntryFormMode: state.app.isEntryFormMode,
    entry: state.entryForm,
  }));
  const history = useHistory();
  const { entryId } = useParams<{ entryId: string }>();

  useEffect(() => {
    isEntryFormMode || history.push('/entries');
  }, [isEntryFormMode, history]);

  useEffect(() => {
    if (entryId && entry.id !== entryId) {
      history.push('/new/entries');
    }
  }, [entry.id, entryId, history]);

  return (
    <PageTemplate title={entryId ? 'Edit Entry' : 'Add Entry'}>
      <EntryDetails
        name={entry.name}
        isc={entry.isc}
        sectorials={entry.sectorials}
        editable
      />
    </PageTemplate>
  );
};

export default EntryFormPage;
