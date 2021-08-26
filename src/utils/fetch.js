export const fetchUsers = async () => {
    const response = await fetch("https://randomuser.me/api/?results=20");
    const data = await response.json();
    const users = data.results;
    return users;
};