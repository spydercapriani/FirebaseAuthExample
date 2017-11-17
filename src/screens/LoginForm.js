import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, CustomButton, FormInput, Spinner } from '../components/common/index';

export default class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onLoginPressed() {
        const { email, password } = this.state
        
        this.setState({error: '', loading: true })

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFailed.bind(this));
        })
    }

    onLoginSuccess() {
        this.setState({ 
            email: '',
            password: '',
            error: 'Successfully Logged In!',
            loading: false
        })
    }

    onLoginFailed() {
        this.setState({ 
            email: this.state.email,
            password: '',
            error: 'Authentication Failed!',
            loading: false
        })
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='large'/>
        }

        return (
            <CustomButton onPress={this.onLoginPressed.bind(this)}>
                Log In
            </CustomButton>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Card>
                    <CardSection>
                        <FormInput 
                            label='Email'
                            placeholder='jon@doe.com'
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </CardSection>

                    <CardSection>
                        <FormInput 
                            label='Password'
                            placeholder='********'
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
                <Text style={styles.errorText}>
                    {this.state.error}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    errorText: {
        fontSize: 18,
        color: 'red',
        alignSelf: 'center',
        textAlign: 'center'
    },
    container: {
        backgroundColor: 'transparent'
    }
})