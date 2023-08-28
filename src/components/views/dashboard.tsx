import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@cloudscape-design/components";
import DataView from "components/common/dataview";
import { fetchPhotosAction } from "store/photos";


const DashboardView = () => {
  const dispatch = useDispatch()
  const {data, loading, error} = useSelector((state: { photos }) => state.photos);

  useEffect(() => {
    // Dispatch get photos
    const fetchData = async () => {
      try {
        await fetchPhotosAction(dispatch)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);


  return (
    <div>
      <Box variant="h1" textAlign="center">
        Dashboard
      </Box>
      <br />
      <DataView name="Photos data" data={data} loading={loading} error={error}></DataView>
    </div>
  );
};

export default DashboardView;
