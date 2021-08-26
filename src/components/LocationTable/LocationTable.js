import React from "react";
import "./LocationTable.css";
import LocationTableHeader from "../LocationTableHeader/LocationTableHeader";
import LocationTableBody from "../LocationTableBody/LocationTableBody";

const LocationTable = (props) => {
    return (
        <table>
            <LocationTableHeader locationsHeaders={props.data[0]} sortHandler={props.sortTable} sortKey={props.sortKey} />
            <LocationTableBody usersLocations={props.data} />
        </table>
    );
};

export default LocationTable;
