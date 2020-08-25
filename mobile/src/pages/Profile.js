import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

function Profile({ navigation }) {
    const githubUsername = navigation.getParam('github_username')

    return (
        <WebView style={styles.container} source={{ uri: `https://github.com/${githubUsername}`}}/>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default Profile;