import React, { useState } from "react";
import { useCollection } from '@cloudscape-design/collection-hooks';
import {
  Box,
  TextFilter,
  Header,
  Pagination,
  CollectionPreferences,
  Table,
  SpaceBetween,
} from "@cloudscape-design/components";
import { COLUMN_DEFINITIONS, getMatchesCountText, collectionPreferencesProps, DEFAULT_PREFERENCES } from "./dataview-table-config";
import DeleteModal from "./deleteModal";
import { photoData } from "types/photo";

export interface DataviewTableProps<T> {
  name: string;
  data: T[];
  loading: boolean;
  error: string;
}

function DataView<T> ({ ...props }: DataviewTableProps<T>) {
  const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES);
  const { items, actions, filteredItemsCount, collectionProps, filterProps, paginationProps } = useCollection<T>(
    props.data,
    {
      filtering: {
        empty: <div>No results found</div>,
        noMatch: (
          <div>No results found</div>
        ),
      },
      pagination: { pageSize: preferences.pageSize},
      selection: { keepSelection: true },
    }
  );
  const { selectedItems } = collectionProps;
  const clearSelectionHandler = actions.setSelectedItems

  return (
    <Table
      {...collectionProps}
      ariaLabels={{
        tableLabel: "Photos table",
        selectionGroupLabel: "Items selection",
        allItemsSelectionLabel: ({ selectedItems }) =>
          `${selectedItems.length} ${
            selectedItems.length === 1 ? "item" : "items"
          } selected`,
      }}
      columnDefinitions={COLUMN_DEFINITIONS(clearSelectionHandler)}
      visibleColumns={preferences.visibleContent}
      stripedRows={preferences.stripedRows}
      selectedItems={selectedItems}
      items={items}
      loadingText="Loading entries"
      loading={props.loading}
      empty={
        <Box textAlign="center" color="inherit">
          <b>Oops!</b>
          <Box padding={{ bottom: "s" }} variant="p" color="inherit">
            No available entries to display.
          </Box>
        </Box>
      }
      filter={
        <TextFilter
          {...filterProps}
          filteringPlaceholder="Search Photos"
          countText={getMatchesCountText(filteredItemsCount)}
          filteringAriaLabel="Search Photo Input"
        />
      }
      header={<Header
        counter={selectedItems?.length ? `(${selectedItems.length}/${props.data.length})`: `(${props.data.length})`} 
        actions={
          <SpaceBetween
            direction="horizontal"
            size="xs"
          >
            <DeleteModal clearSelection={clearSelectionHandler} selectedItems={selectedItems?.map(item => item) as photoData[]}/>
          </SpaceBetween>
        }
      >{props.name} </Header>}
      selectionType="multi"
      pagination={<Pagination {...paginationProps} />}
      preferences={
        <CollectionPreferences
          {...collectionPreferencesProps}
          preferences={preferences}
          onConfirm={({ detail }) => setPreferences(detail)}
        />
      }
    />
  );
}

export default DataView;
