import { PermissionsAndroid, Platform } from "react-native";

export const requestAudioRecordPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);  
        if (
          grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.READ_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.RECORD_AUDIO'] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          //console.log('Permissions granted');
        } else {
          //console.log('All required permissions not granted');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
  }

  export const formatAudioDuration = (seconds: number): string => {
    let calMinutes = Math.floor(seconds / 60);
    let calSeconds = Math.round(seconds - calMinutes * 60);
    return `${calMinutes > 9 ? calMinutes : `0${calMinutes}`} : ${
      calSeconds > 9 ? calSeconds : `0${calSeconds}`
    }`;
  };