import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { withFormik } from 'formik';

export default class FormStudent extends Component {
   
    render() {
        return (
            <View>
                <TextInput
                value={this.props.student.name}
                onChangeText={text => this.setState('name', text)}
                />

                <TextInput
                value={this.props.student.dateOfBirth}
                />

                <TextInput
                value={this.props.student.schoolLevel}
                />

                <TextInput
                value={this.props.address.codeZip}
                />

                <TextInput
                value={this.props.address.publicPlace}
                />

                <TextInput
                value={this.props.address.number}
                />

                <TextInput
                value={this.props.address.complement}
                />

                <TextInput
                value={this.props.address.neighborhood}
                />

                <TextInput
                value={this.props.address.city}
                />

                <TextInput
                value={this.props.address.state}
                />

                <TextInput
                value={this.props.mother.motherName}
                />

                <TextInput
                value={this.props.mother.cpf}
                />

                <TextInput
                value={this.props.mother.preferredDate}
                />
            </View>
        )
    }
}