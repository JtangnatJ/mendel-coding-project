import React from "react";
import "./App.css";
import { fetchUsers } from "../../utils/fetch.js";
import { flattenLocations } from "../../utils/flattenLocations";
import LocationTable from "../LocationTable/LocationTable";

function App() {
    const [isLoading, setIsLoading] = React.useState(true)
    const [locations, setLocations] = React.useState([]);
    const [sortKey, setSortKey] = React.useState('');

    React.useEffect(() => {
        fetchUsers().then((response) => {
            const transformedData = flattenLocations(response);
            const usersLocations = [];
            transformedData.forEach((user) => {
                usersLocations.push(user.location);
            });
            setLocations(usersLocations);

            setIsLoading(false);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    const sortTableByColumn = (string) => {
        if (string === sortKey) {
            const reversedSortedTable = locations.slice().reverse();
            setLocations(reversedSortedTable);
            return null;
        };
        
        const key = string.toLowerCase();

        const sortedTable = locations.sort((a, b) => {
            if (a[key] < b[key]) {
                return -1;
            }

            if (a[key] > b[key]) {
                return 1;
            }

            return 0;
        });

        setLocations(sortedTable);
        setSortKey(string);
    };
    
    return (
        <div className="App">
            {!isLoading ? <LocationTable data={locations} sortTable={sortTableByColumn} sortKey={sortKey} /> : <p>Loading...</p>}
        </div>
    );
}

export default App;
