import React from "react";
import "./LocationTableBody.css";

const LocationTableBody = (props) => (
    <React.Fragment>
        <tbody>
            {props.usersLocations.map((userLocation) => (
                <tr>
                    {Object.values(userLocation).map((value) => {
                        return <td>{value}</td>
                    })}
                </tr>
            ))}
        </tbody>
    </React.Fragment>
);

export default LocationTableBody;