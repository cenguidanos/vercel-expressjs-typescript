import https from 'https';
export async function fetchUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => (data += chunk));
            res.on('end', () => resolve(JSON.parse(data)));
            res.on('error', (err) => reject(err));
        });
    });
}
