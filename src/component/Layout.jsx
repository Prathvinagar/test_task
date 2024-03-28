import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  apiDataSuccess,
  apiDataFailure,
  apiDataRequest, page, isLoading
} from "../redux/action";
import Card from "../component/Card";

function Layout() {
 
  const dispatch = useDispatch();

  const getApiData = async () => {
    try {
      const response = await axios.get(
        `https://freetestapi.com/api/v1/countries`
      );
      dispatch(apiDataSuccess(response.data));
    } catch (error) {
      dispatch(apiDataFailure("failed to get error"));
    } finally {
      dispatch(apiDataRequest("success"));
    }
  };

    useEffect(() => {
    dispatch(apiDataRequest("Fetching data..."));
    getApiData();
  }, []);

  return (
    <div>
      <Card />
    </div>
  );
}

export default Layout;

