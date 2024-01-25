import { Dimensions } from "react-native"
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('screen');

export const DEVICE_WIDTH = width
export const DEVICE_HEIGHT = height
export const StatusBarHeight = Constants.statusBarHeight