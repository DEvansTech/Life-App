import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        alignItems: 'center',
        marginLeft: 0,
        height: 50,
        overflow: 'hidden',
        width: '80%',
        borderRadius: 10,
        borderColor: '#E4E4E4'
    },
    avataAndMike: {
        // borderWidth: 1,
        marginHorizontal: 5,
    },
    mikeIcon: {
        position: 'absolute',
        bottom: -3,
    },
    playIconAndDuration: {
        height: 60,
        justifyContent: 'center'
    },
    playIconAndSlider: {
        flexDirection: 'row',
        // borderWidth: 1,
        alignItems: 'center',
        width: '80%'
    }
})

export default styles