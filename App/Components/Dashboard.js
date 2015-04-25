'use strict';

var React = require('react-native');
var Profile = require('./Profile');

var {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableHighlight

} = React;

var styles = StyleSheet.create({
    container: {
        marginTop: 65,
        flex: 1
    },
    image: {
        height: 350
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        alignSelf: 'center'
    }
});

class Dashboard extends React.Component {
    makeBackground (btn) {
        var obj = {
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            flex: 1
        };

        if (btn === 0) {
            obj.backgroundColor = '#48BBEC';
        } else if (btn === 1) {
            obj.backgroundColor = '#E77AAE';
        } else {
            obj.backgroundColor = '#758BF4';
        }

        return obj;
    }
    goToProfile () {
        this.props.navigator.push({
            component: Profile,
            title: 'Profile Page',
            passProps: {userInfo: this.props.userInfo}
        });
    }
    goToRepos () {
        console.log('Going to the repo page');
    }
    goToNotes () {
        console.log('Going to the notes page');
    }
    render () {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.userInfo.avatar_url}}
                       style={styles.image}
                />
                <TouchableHighlight
                    style={this.makeBackground(0)}
                    onPress={this.goToProfile.bind(this)}
                    undelayColor="#88D4F5"
                >
                    <Text style={styles.buttonText}>View Profile</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBackground(1)}
                    onPress={this.goToRepos.bind(this)}
                    undelayColor="#88D4F5"
                    >
                    <Text style={styles.buttonText}>View Repos</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBackground(2)}
                    onPress={this.goToNotes.bind(this)}
                    undelayColor="#88D4F5"
                    >
                    <Text style={styles.buttonText}>View Notes</Text>
                </TouchableHighlight>
            </View>
        )
    }

}


module.exports = Dashboard;