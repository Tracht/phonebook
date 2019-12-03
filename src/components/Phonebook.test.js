import React from 'react';
import { shallow } from "enzyme";

// relative imports
import PhoneBook from './phoneBook'

describe('Phonebook Component', () => {
    it('Phonebook Component Rendering', () => {
        const PhonebookComponent = shallow(<PhoneBook />);
        expect(PhonebookComponent.exists()).toBe(true);
    });

    it('Phonebook Form Should have 1 Form', () => {
        const PhonebookComponent = shallow(<PhoneBook />);
        expect(PhonebookComponent.find("form")).toHaveLength(1);
    });

    it('Phonebook Form Should have 3 Input Fields', () => {
        const PhonebookComponent = shallow(<PhoneBook />);
        expect(PhonebookComponent.find("input")).toHaveLength(3);
    });

    it('Phonebook Form Should have 1 Button', () => {
        const PhonebookComponent = shallow(<PhoneBook />);
        expect(PhonebookComponent.find("button")).toHaveLength(1);
    });

})