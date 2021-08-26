import { flattenObject } from "./flattenObject";

export const flattenLocations = (array) => {
    const flattenedUsers = array.map((user) => {
        user.location = flattenObject(user.location);
        return user;
    });

    return flattenedUsers;
}