import firestore from '@react-native-firebase/firestore';
import { profileType } from '../context/tableTypes';

export const getProfile = async (uuid: string) => {
    const userDocument = firestore().collection('Person').doc(uuid);
    return (await userDocument.get()).data() as profileType;
}

export const insertProfile = async (payload: any) => {
    firestore()
        .collection('Person')
        .add({ ...payload })
        .then(() => { })
        .catch(() => { });
}

export const updateProfile = async (uuid: string, payload: any) => {
    firestore()
        .collection('Person')
        .doc(uuid)
        .set({ ...payload })
        .then(() => { })
        .catch(() => { });
}

export const getAllUsers = async () => {
    const users = await firestore().collection('Person').get();
    return users.docs.map((doc) => ({id: doc.id, ...doc.data() as profileType}))
}