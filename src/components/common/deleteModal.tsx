import React, { useState } from "react";
import {
  Modal,
  Grid,
  Box,
  SpaceBetween,
  Button,
  ColumnLayout,
} from "@cloudscape-design/components";
import { useDispatch } from "react-redux";
import { removePhotos } from "store/photos";
import { photoData } from "types/photo";

export interface DeleteModalProps {
  selectedItems : photoData[]
  clearSelection?: any
}


const DeleteModal: React.FC<DeleteModalProps> =  ({...props} ) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    setLoading(true);

    try {
      const selectedIds = props.selectedItems.map((item) => item.id);
      dispatch(removePhotos(selectedIds))
      setVisible(false);
      setLoading(false);
      props.clearSelection([])

    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <Button disabled={props.selectedItems.length < 1} iconName="remove" loading={loading} onClick={(e) => setVisible(true)}>
        Delete
      </Button>
      <Modal
        data-testid="delete-modal-test"
        onDismiss={() => setVisible(false)}
        visible={visible}
        footer={
          <Box float="right">
            <SpaceBetween direction="horizontal" size="xs">
              <Button ariaLabel='cancel delete' onClick={(e) => setVisible(false)} variant="link">
                Cancel
              </Button>
              <Button
                data-testid="delete-button-test"
                variant="primary"
                loading={loading}
                onClick={handleDelete}
                ariaLabel="confirm delete"
              >
                Ok
              </Button>
            </SpaceBetween>
          </Box>
        }
        header={
          <>
            <Box variant="h1">Delete Entry(s)</Box>
            <Box variant="h4" color="text-status-info" >Are you sure you want to delete the following entry(s)?</Box>
          </>}
      >
        <ColumnLayout borders="horizontal" columns={2}>
          {props.selectedItems.map((item) => (
          <Grid key={item.id}
            gridDefinition={[
               { colspan: 10, offset: 2 },
             ]}
          >
            <Box variant="awsui-key-label" key={item.id}>
              <p key={item.id}>ID: {item.id}</p>
              <img 
                src={item.thumbnailUrl}
                alt={`${item.id}`} 
              />
              <p>{item.title}</p>
            </Box>
          </Grid>
          ))}
      </ColumnLayout>
      </Modal>
    </>
  );
};

export default DeleteModal;
