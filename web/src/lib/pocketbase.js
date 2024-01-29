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
    Cookies.set('userName', pb.authStore.model.name, { expires: 7, sameSite: 'None', secure: true })
    Cookies.set('userLogin', pb.authStore.model.email, { expires: 7, sameSite: 'None', secure: true })
    Cookies.set('adm', pb.authStore.model.adm, { expires: 7, sameSite: 'None', secure: true })
}

export async function fetchActivities() {
    return await pb.collection('activities').getFullList({
        sort: '-created',
    });
}

export async function fetchNoneAcceptedActivities() {
    const resultList = await pb.collection('activities').getList(1, 50, {
        filter: 'status != "accepted"',
        sort: '-created',
    });

    return resultList.items;
}

export async function fetchAcceptedActivities() {
    const resultList = await pb.collection('activities').getList(1, 50, {
        filter: 'status = "accepted"',
        sort: '-created',
    });

    return resultList.items;
}

export async function fetchUserLogins() {
    return await pb.collection('users').getFullList({
        sort: '-created',
    });
}

export async function login(email, password) {
    await pb.collection("users").authWithPassword(email, password);
    const userToken = getToken();
    Cookies.set('userToken', userToken, { expires: 7, sameSite: 'None', secure: true });
    await fetchData();
    console.log("Logged in");
    console.log(pb.authStore.model);
}

export async function postNewDemand(type, title, description, login ,upload) {
    console.log("postNewDemand");
}
