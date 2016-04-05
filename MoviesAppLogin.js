
'use strict';
var Button = require('react-native-button'); //Khởi tạo Button 
var React = require('react-native');
var SearchScreen = require('./SearchScreen');

var {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    Platform,
} = React;


//
// React Native Classes
//
var MoviesAppLogin = React.createClass({

    getInitialState: function() {
        return {
            text: "Type Something",
            moreText: "What you listening to?",
        };
    },

    _handlePress() {
        var username = this.state.username;
        var password = this.state.password;
        if (Platform.OS === 'ios') {
            this.props.navigator.replace({
                title: 'Home',
                component: SearchScreen,
            });
        } else {
            this.props.navigator.push({id:2});
        }
    },

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Login View
                </Text>

                <Text style={styles.instructions}>
                    username
                </Text>

                <TextInput
                    style={styles.textEdit}
                    onChangeText={(username) => this.setState({ username }) }
                    placeholder="Nhập tên đăng nhập"
                    />

                <Text style={styles.instructions}>
                    password
                </Text>

                <TextInput
                    style={styles.textEdit}
                    onChangeText={(password) => this.setState({ password }) }
                    placeholder="Nhập mật khẩu"
                    />


                <Button
                    style={styles.btnLogin}
                    styleDisabled={{ color: 'red' }}
                    onPress={this._handlePress}
                    >
                    Login
                </Button>
            </View>


        );
    }
});

// style cho cac component
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        padding: 20,
    },
    welcome: {
        fontSize: 28,
        textAlign: 'center',
        margin: 20,
    },
    instructions: {
        color: 'blue',
        fontSize: 22,
        marginBottom: 5,
    },
    textEdit: {
        height: 40,
        borderColor: 'grey',
        backgroundColor: 'white',
        borderWidth: 1
    },

    btnLogin: {
        marginTop: 20,
        width: 120,
        height: 40,
        borderRadius: 5,
        backgroundColor: 'white',
        borderWidth: 1
    },
});
module.exports = MoviesAppLogin;//AppRegistry.registerComponent('MoviesAppLogin', () => MoviesAppLogin);
