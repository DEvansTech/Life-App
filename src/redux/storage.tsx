import storage from '@react-native-firebase/storage';

export const uploadFileToStorage = async (filename:string, fileUri: string, targetFolder?: string) => {
    const targetUrl = targetFolder ? `${targetFolder}/${fileUri}` : fileUri;
    await storage().ref(targetUrl).putFile(fileUri);
    return await storage().ref(targetUrl).getDownloadURL();
}