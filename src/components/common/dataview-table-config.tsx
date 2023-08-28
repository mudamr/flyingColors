import React from "react";
import DeleteModal from "./deleteModal";
import { CollectionPreferencesProps } from "@cloudscape-design/components";

export function getMatchesCountText(count) {
  return count === 1 ? `1 match` : `${count} matches`;
}

export const COLUMN_DEFINITIONS = (clearSelectionHandler) => { 
  return [
    {
      id: "ablumId",
      header: "Album Id",
      cell: (item) => item.albumId,
      sortingField: "transactionId",
    },
    {
      id: "id",
      header: "id",
      cell: (item) => item.id,
      sortingField: "status",
    },
    { id: "url",
      header: "Url",
      cell: (item) => (
      <img 
        src={item.thumbnailUrl} 
        alt={`${item.id}`} 
      />)
    },
    {
      id: "title",
      header: "Title",
      cell: (item) => item.title,
    },
    {
      id: "actions",
      header: "Actions",
      cell: (item) => (
        <DeleteModal clearSelection={clearSelectionHandler} selectedItems={[item]}/>
      ),
    },
  ]
};

const pageSizePreference = {
  title: "Page size",
  options: [
    { value: 10, label: "10 entries" },
    { value: 20, label: "20 entries" },
    { value: 50, label: "50 entries" },
  ],
};

const visibleContentPreference = {
  title: 'Select visible content',
  options: [
    {
      label: 'Column Properties',

      // Allow users to toggle columns visiblity except id column
      options: COLUMN_DEFINITIONS(null).map(({ id, header }) => ({ id, label: header, editable: id !== 'id' })),
    },
  ],
};

export const DEFAULT_PREFERENCES: CollectionPreferencesProps.Preferences= {
  pageSize: 10,
  wrapLines: true,
  stripedRows: true,
  visibleContent: ['id', 'url', 'actions'],
};

export const collectionPreferencesProps = {
  pageSizePreference,
  visibleContentPreference,
  stripedRowsPreference: {label: 'Striped Rows', description: 'Select to add alternating shaded rows'},
  cancelLabel: 'Cancel',
  confirmLabel: 'Confirm',
  title: 'Preferences',
};
