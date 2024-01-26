import PocketBase from 'pocketbase';
import Cookies from 'js-cookie';

const url = process.env.REACT_APP_POCKETBASE_API_URL;
const pb = new PocketBase(url);
pb.autoCancellation(false);

export function getToken () {
    return pb.authStore.token;
}

export async function fetchData () {
    Cookies.set('userToken', pb.authStore.token, { expires: 7, sameSite: 'None', secure: true })
    Cookies.set('userId', pb.authStore.model.id, { expires: 7, sameSite: 'None', secure: true })
    Cookies.set('userCollectionId', pb.authStore.model.collectionId, { expires: 7, sameSite: 'None', secure: true })
    Cookies.set('userName', pb.authStore.model.name, { expires: 7, sameSite: 'None', secure: true })
    Cookies.set('userLogin', pb.authStore.model.email, { expires: 7, sameSite: 'None', secure: true })
    Cookies.set('adm', pb.authStore.model.adm, { expires: 7, sameSite: 'None', secure: true })
}

export async function fetchActivities() {
    return await pb.collection('activities').getFullList();
}

export async function login(email, password) {
    await pb.collection("users").authWithPassword(email, password);
    const userToken = getToken();
    Cookies.set('userToken', userToken, { expires: 7, sameSite: 'None', secure: true });
    await fetchData();
    console.log("Logged in");
    console.log(pb.authStore.model);
}

export async function getLoginsId(logins) {
    try {
        const loginsId = [];

        for (let i = 0; i < logins.length; i++) {
            const filter = `email = '${logins[i]}'`;

            await pb.collection('users').getFullList({
                sort: '-created',
                filter,
            });
        }

        return loginsId;
    } catch (error) {
        console.error('Error fetching user IDs:', error);
        return [];
    }
}


export async function postNewDemand(type, title, description, logins ,upload) {

    const loginsId = await getLoginsId(logins);

    const data = {
        "Type": type,
        "Title": title,
        "Student_Logins": [
            ...loginsId
        ],
        "Description": description,
        "Support" : upload
    };

    await pb.collection('adminActivityRequests').create(data);
}
