import React, { useReducer } from 'react';
import axios from 'axios';
import BuildingContext from './buildingContext';
import buildingReducer from './buildingReducer';
import {   
  GET_BUILDINGS,
  GET_BUILDING,
  ADD_BUILDING,
  DELETE_BUILDING,
  SET_CURRENT_BUILDING,
  CLEAR_CURRENT_BUILDING,
  UPDATE_BUILDING,
  FILTER_BUILDINGS,
  CLEAR_FILTER_BUILDING,
  BUILDING_ERROR,
  CLEAR_BUILDINGS
  } from '../types';

const BuildingState = props => {
  const initialState = {
    buildings: null,
    current_building: null,
    filtered_building: null,
    error_building: null,
  };

  const [state, dispatch] = useReducer(buildingReducer, initialState);

  // Get Buildings
  const getBuildings = async () => {
    try {
      const res = await axios.get("/api/buildings/");
      console.log("here is the response");
      console.log(res);
      dispatch({
        type: GET_BUILDINGS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: BUILDING_ERROR,
        payload: err,
      });
    }
  };


    // Get Building
    const getBuilding = async id => {
      try {
        const res = await axios.get(`/api/buildings/${id}`);
        console.log("here is the response");
        console.log(res);
        dispatch({
          type: GET_BUILDING,
          payload: res.data,
        });
      } catch (err) {
        console.log(err);
        dispatch({
          type: BUILDING_ERROR,
          payload: err,
        });
      }
    };








  // Add Building
  const addBuilding = async building => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/buildings', building, config);

      dispatch({
        type: ADD_BUILDING,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: BUILDING_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Delete Building
  const deleteBuilding = async id => {

    console.log("IN DELETE BUILDING"+ id);
    try {
      console.log(`/api/buildings/${id}`

      )
      await axios.delete(`/api/buildings/${id}`);

      dispatch({
        type: DELETE_BUILDING,
        payload: id
      });
    } catch (err) {
      console.log("HERE IS THE ERROR");
      dispatch({
        type: BUILDING_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update Building
  const updateBuilding = async building => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `/api/buildings/${building._id}`,
        building,
        config
      );

      dispatch({
        type: UPDATE_BUILDING,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: BUILDING_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear Buildings
  const clearBuildings = () => {
    dispatch({ type: CLEAR_BUILDINGS });
  };

  // Set Current Building
  const setCurrentBuilding = building => {
    console.log(building);
    dispatch({ type: SET_CURRENT_BUILDING, payload: building });
  };

  // Clear Current Building
  const clearCurrentBuilding = () => {
    dispatch({ type: CLEAR_CURRENT_BUILDING });
  };

  // Filter Buildings
  const filterBuildings = text => {
    dispatch({ type: FILTER_BUILDINGS, payload: text });
  };

  // Clear Filter
  const clearFilterBuilding = () => {
    dispatch({ type: CLEAR_FILTER_BUILDING});
  };


  return (
    <BuildingContext.Provider
      value={{
        buildings: state.buildings,
        current_building: state.current_building,
        filtered_building: state.filtered_building,
        error_building: state.error_building,
        getBuildings,
        getBuilding,
        addBuilding,
        deleteBuilding,
        setCurrentBuilding,
        clearCurrentBuilding,
        updateBuilding,
        filterBuildings,
        clearFilterBuilding,
        clearBuildings
      }}>
      {props.children}
    </BuildingContext.Provider>
  );
};

export default BuildingState;
