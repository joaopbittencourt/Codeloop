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
    };
    
    onlyNumber = (  numberVal ) => {
        return numberVal.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '');
    };

    render() {

        return (
                <>
                
                    <TextInput style={this.styles.bg}
                        value={this.state.name}
                        placeholder="Nome do estudante"
                        maxLength={100}
                        onChangeText={text => this.setState({name: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.dateOfBirth}
                        placeholder="Data de nascimento"
                        onChangeText={text => this.setState({dateOfBirth: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.schoolLevel}
                        placeholder="Serie de ingresso"
                        onChangeText={text => this.setState({schoolLevel: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.codeZip}
                        placeholder="CEP"
                        textContentType="postalCode"
                        onChangeText={text => this.setState({codeZip: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.publicPlace}
                        placeholder="Rua"
                        maxLength={120}
                        onChangeText={text => this.setState({publicPlace: text})}
                    />
    
                    <TextInput style={this.styles.bg}
                        value={this.state.number}
                        placeholder="Numero"
                        keyboardType="numeric"
                        onChangeText={number => {
                                this.setState({number: this.onlyNumber(number)});
                                value = this.state.number
                            }
                        
                        }
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.complement}
                        placeholder="Complemento"
                        maxLength={50}
                        onChangeText={text => this.setState({complement: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.neighborhood}
                        placeholder="Bairro"
                        maxLength={100}
                        onChangeText={text => this.setState({neighborhood: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.city}
                        placeholder="Cidade"
                        onChangeText={text => this.setState({city: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.state}
                        placeholder="Estado"
                        onChangeText={text => this.setState({state: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.motherName}
                        placeholder="Nome da mãe"
                        maxLength={100}
                        onChangeText={text => this.setState({motherName: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.cpf}
                        placeholder="CPF"
                        onChangeText={text => this.setState({cpf: text})}
                    />

                    <TextInput style={this.styles.bg}
                        value={this.state.preferredDate}
                        placeholder="Vencimento de mensalidade"
                        onChangeText={text => this.setState({preferredDate: text})}
                    />
                    <Button title="Save"  onPress={this.formSubmit}>
						
					</Button>
                </>
        )
    }
}
