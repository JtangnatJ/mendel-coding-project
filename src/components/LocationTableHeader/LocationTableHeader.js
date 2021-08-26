import React from "react";
import "./LocationTableHeader.css";

const LocationTableHeader = (props) => {
    const [alphanumerical, setAlphanumerical] = React.useState(false);
    const activeSort = props.sortKey;

    const headers = Object.keys(props.locationsHeaders);

    const headerTitles = headers.map((header) => {
        return header[0].toUpperCase() + header.slice(1);
    });

    const handleClick = (event) => {
        event.preventDefault();
        props.sortHandler(event.target.name);
        setAlphanumerical(!alphanumerical);
    };

    return (
        <React.Fragment>
            <thead className={"header"} >
                <tr className={"headerRow"}>
                    {headerTitles.map((header) => (
                            <th>
                                <button name={header} onClick={handleClick}>
                                    {header}
                                    {header === activeSort ? alphanumerical ? '▼' : '▲' : ' '}
                                </button>
                            </th>
                    ))}
                </tr>
            </thead>
        </React.Fragment>
    );
};

export default LocationTableHeader;
