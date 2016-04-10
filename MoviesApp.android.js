/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @providesModule MoviesApp
 * @flow
 */
'use strict';

//khai báo React và các thành phần dùng trong class này
var React = require('react-native');
var {
    AppRegistry,
    Navigator,
    StyleSheet,
} = React;

// khai báo class Login để sử dụng khi chuyển trang
var MoviesAppLogin = require('./MoviesAppLogin');
var SearchScreen = require('./SearchScreen');
var MovieScreen = require('./MovieScreen');
var VideoPlayer = require('./VideoPlayer');

// khởi tạo view giao diện cho class
var MoviesApp = React.createClass({
    
    _renderScene(route, navigator) {
    if (route.id === 1) {
      return <MoviesAppLogin navigator={navigator} />
    } else if (route.id === 2) {
      return <SearchScreen navigator={navigator} />
    } else if (route.id === 3) {
      return <MovieScreen navigator={navigator} title={route.title}
                      movie={route.movie} />
    } else if (route.id === 4) {
      return <VideoPlayer navigator={navigator}  />
    } 
  },
    
    render: function() {
        return (
            //Dùng navigator để add trang Login
            <Navigator
                initialRoute={{ id: 1,}}
                renderScene={this._renderScene}
                />
        );
    }
});

//khai báo style dạng như css
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

// Đăng ký class MoviesApp vào hệ thống
AppRegistry.registerComponent('MoviesApp', () => MoviesApp);

module.exports = MoviesApp;