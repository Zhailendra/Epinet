import PocketBase from 'pocketbase';
import Cookies from 'js-cookie';

const url = process.env.REACT_APP_POCKETBASE_API_URL;
const pb = new PocketBase(url);

export function getToken () {
    return pb.authStore.token;
}

export async function fetchData () {
    Cookies.set('userToken', pb.authStore.token, { expires: 7, sameSite: 'None', secure: true })
    Cookies.set('userId', pb.authStore.model.id, { expires: 7, sameSite: 'None', secure: true })
    Cookies.set('userCollectionId', pb.authStore.model.collectionId, { expires: 7, sameSite: 'None', secure: true })
    Cookies.set('userName', pb.authStore.model.name, { expires: 7, sameSite: 'None', secure: true })
    Cookies.set('userEmail', pb.authStore.model.email, { expires: 7, sameSite: 'None', secure: true })
    Cookies.set('userAvatarLink', pb.authStore.model.avatar, { expires: 7, sameSite: 'None', secure: true })
    Cookies.set('userAvatar', `${url}/api/files/${Cookies.get('userCollectionId')}/${Cookies.get('userId')}/${Cookies.get('userAvatarLink')}`, { expires: 7, sameSite: 'None', secure: true })
}

export async function login(email, password) {
    await pb.collection("users").authWithPassword(email, password);
    const userToken = getToken();
    Cookies.set('userToken', userToken, { expires: 7, sameSite: 'None', secure: true });
    await fetchData();
}
