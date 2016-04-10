
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
    Image,
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
            this.props.navigator.replace({ id: 2 });
        }
    },

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewLogin}>
                <Image style={styles.imgLogo}
                    source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }}
                    />
                <TextInput
                    style={styles.textEdit}
                    onChangeText={(username) => this.setState({ username }) }
                    placeholder="Nhập tên đăng nhập"
                    />
                <TextInput
                    style={styles.textEdit}
                    onChangeText={(password) => this.setState({ password }) }
                    placeholder="Nhập mật khẩu"
                    />
                <Button
                    style={styles.btnLogin}
                    onPress={this._handlePress}
                    >
                    Login
                </Button>
                </View>
            </View>
        );
    }
});

// style cho cac component
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A8D1FF',
        paddingTop: 70,
    },
    viewLogin: {
        alignItems:'center',
        justifyContent:'center'
    },
    imgLogo: {
        width:100,
        height:100,
        marginBottom: 20
    },
    textEdit: {
        height: 40,
        borderColor: 'grey',
        backgroundColor: 'white',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        textAlign:'center',
        borderRadius: 3,
    },
    btnLogin: {
        marginTop: 20,
        width: 280,
        height: 40,
        borderRadius: 3,
        backgroundColor: '#426EDD',
        textAlign:'center',
        color: 'white'
    },
});
module.exports = MoviesAppLogin;//AppRegistry.registerComponent('MoviesAppLogin', () => MoviesAppLogin);
