import React, { Component } from 'react';
import { Content, View, TextInput, Text, StyleSheet, Form, Button, Icon } from 'react-native';
import { withFormik } from 'formik';
import {AsyncStorage} from 'react-native';

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
       
        let data = [{
            student : {
                name: this.state.name,
                dateOfBirth: this.state.dateOfBirth,
                schoolLevel: this.state.schoolLevel
            },
            address : {
                codeZip: this.state.codeZip,
                publicPlace: this.state.publicPlace,
                number: this.state.number,
                complement: this.state.complement,
                neighborhood: this.state.neighborhood,
                city: this.state.city,
                state: this.state.state
            },
            mother : {
                motherName: this.state.motherName,
                cpf: this.state.cpf,
                preferredDate: this.state.preferredDate
            }
        }]
        this.saveData(data);
    }

    async saveData(data)  {
        console.log("Salvar");
        
        try {
            await AsyncStorage.setItem('data', JSON.stringify(data));
        } catch (error) {
            console.log(error.message);
        }
        console.log("Salvo");

    };

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
                    <Button title="Save"  onPress={this.formSubmit}>
						
					</Button>
                </>
        )
    }
}
