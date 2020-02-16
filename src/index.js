import React from 'react';

import FormStudent from './components/FormStudent';

const student = {
    name: 'Jooa',
    dateOfBirth: '25/08/2005',
    schoolLevel: '4'
};

const address = {
    codeZip: "85852222",
    publicPlace: "Rua guilhermina",
    number: "5485",
    complement: "Casa",
    neighborhood: "Centro",
    city: "Foz",
    state: "Parana"
}

const mother = {
    motherName: "Maria",
    cpf: "585255",
    preferredDate: "5"
}

const index = () => (
  <>
    <FormStudent
        student = {student}
        address = {address}
        mother = {mother}
     />
  </>
);

export default index;