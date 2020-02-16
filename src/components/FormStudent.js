import React, { Component } from 'react';
import { Content, View, TextInput, Text, StyleSheet, Form, Button, Icon } from 'react-native';
import { withFormik } from 'formik';

export default class FormStudent extends Component<{}>  {

    styles = StyleSheet.create({
        bg: {
            backgroundColor: '#E0EEEE'
        },
        container: {
            marginLeft : 15,
            marginRight: 15
        },
        formOuter: { backgroundColor: '#E0EEEE'}
    });

    handle = (param, text) => {
        this.setState({ param : text })
    }
   
    formSubmit = () => {
        console.log(this.state.name)
    }

    state = {
        name: this.props.student.name,
        dateOfBirth: this.props.student.dateOfBirth,
        schoolLevel: this.props.student.schoolLevel,
        codeZip: this.props.address.codeZip,
        publicPlace: this.props.address.publicPlace,
        number: this.props.address.number,
        complement: this.props.address.complement,
        neighborhood: this.props.address.neighborhood,
        city: this.props.address.city,
        state: this.props.address.state,
        motherName: this.props.mother.motherName,
        cpf: this.props.mother.motherName,
        preferredDate: this.props.mother.preferredDate
    }
    
    render() {

        return (
                <>
                
                    <TextInput style={this.styles.bg}
                        value={this.state.name}
                        onChangeText={text => this.setState({name: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.dateOfBirth}
                        onChangeText={text => this.setState({dateOfBirth: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.schoolLevel}
                        onChangeText={text => this.setState({schoolLevel: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.codeZip}
                        onChangeText={text => this.setState({codeZip: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.publicPlace}
                        onChangeText={text => this.setState({publicPlace: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.number}
                        onChangeText={text => this.setState({number: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.complement}
                        onChangeText={text => this.setState({complement: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.neighborhood}
                        onChangeText={text => this.setState({neighborhood: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.city}
                        onChangeText={text => this.setState({city: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.state}
                        onChangeText={text => this.setState({state: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.motherName}
                        onChangeText={text => this.setState({motherName: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.cpf}
                        onChangeText={text => this.setState({cpf: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.preferredDate}
                        onChangeText={text => this.setState({preferredDate: text})}
                    />
                    <Button title="Save"  onPress={this.formSubmit.bind(this)}>
						
					</Button>
                </>
        )
    }
}
