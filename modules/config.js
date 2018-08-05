export const url = 'https://jsonplaceholder.typicode.com';

 export function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};
