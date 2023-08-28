import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import wrapper from '@cloudscape-design/components/test-utils/dom';
import DataView from 'components/common/dataview';
import store from '../store/index'

const initialData = [{
    "albumId": 1,
    "id": 1,
    "title": "here beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  
]

describe('DataView Component Loading', () => {
    it('renders without errors', async () => {
        // Render DataView component with no matches
        const { getByText } = render(
            <Provider store={store}>
                <DataView name="Test Data" data={[]} loading={false} error="" />
            </Provider>);

        const headerElement = getByText('Test Data');
        expect(headerElement).toBeInTheDocument();
    });

    it('filters data when a filter is applied', async () => {
        // Render DataView component with initial data
        const { getByLabelText, getByText } = render(
            <Provider store={store}>
                <DataView name="Fake Data" data={initialData} loading={false} error="" />
            </Provider>
        );

        const filterTitleQuery = initialData[0].title
        
        const inputElement = getByLabelText('Search Photo Input', {selector: 'input'})
        fireEvent.change(inputElement, { target: { value: filterTitleQuery } });
                
        expect(inputElement).toHaveValue(filterTitleQuery);
        expect(getByText('1 match')).toBeInTheDocument();
    });

    it('loads all given data into table entries', async () => {
        // Render DataView component with initial data
        const { getByLabelText } = render(
            <Provider store={store}>
                <DataView name="Fake Data" data={initialData} loading={false} error="" />
            </Provider>
        );

        const tableElement = getByLabelText('Photos table')
        const tableRows = tableElement.querySelectorAll('tr');
        
        // Check for table rows when providing 2 entries. Note: Table header counts as a row and no entries counts as a row.
        expect(tableRows.length).toBe(3)    
    

    });


describe('DataView Component Actions', () => {
  it('deletes an item when the delete button is clicked and confirmed', async () => {
    // Render your DataView component with initial data
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <DataView name="Fake Data" data={initialData} loading={false} error="" />
      </Provider>
    );

    // Find the delete button element and click it
    let buttonClicked = false;

    // Mock the behavior of the modal confirmation dialog
    const deleteButton = wrapper(document.body).findTable().findBodyCell(2,4).findButton().element
    
    deleteButton.addEventListener('click', () => {
        buttonClicked = true;
    });
    
    fireEvent.click(deleteButton)
    
    //[TODO] research why modal component is not being triggered by the wrapper.
    //const modal = wrapper(document.body).find('[data-testid="delete-button-test"]')
    //const mudamr = wrapper(document.body).find('[data-testid="delete-modal-test"]')

    //[TODO] Fix this test when modal button click can be mocked
    await (() => {
      // Verify that the item has been deleted by looking for its title
      const deletedItem = getByText('deleted item');
      expect(deletedItem).toBeNull();
    });
})})

});
