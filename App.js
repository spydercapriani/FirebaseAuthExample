import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header, CustomButton, Spinner, CardSection } from './src/components/common/index';
import LoginForm from './src/screens/LoginForm';

export default class App extends React.Component {
  state = {
    loggedIn: null
  }

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAfVBHyeO_wLRNPQlpohSKyUbl_uLhbGwI',
        authDomain: 'authreactexample-f6350.firebaseapp.com',
        databaseURL: 'https://authreactexample-f6350.firebaseio.com',
        projectId: 'authreactexample-f6350',
        storageBucket: 'authreactexample-f6350.appspot.com',
        messagingSenderId: '225141169462'
    })

    firebase.auth().onAuthStateChanged((user) => {
      user ? this.setState({ loggedIn: true }) : this.setState({ loggedIn: false })
      console.log(`User Logged In: ${this.state.loggedIn}`)
    })
  }

  renderContent() {
    switch ( this.state.loggedIn ) {
      case true:
        return (
          <CardSection>
            <CustomButton onPress={() => firebase.auth().signOut()}>
              Log Out
            </CustomButton>
          </CardSection>
        )
      case false:
        return <LoginForm />
      default:
        return (
          <View style={styles.blockingView}>
            <Spinner size='large' />
          </View>
        )
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header title={'Authentication'}/>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blockingView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})