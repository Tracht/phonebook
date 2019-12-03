// absolute imports
import React from 'react';
import { shallow } from "enzyme";

// relative imports
import GenericTable from './GenericTable';


describe('Table View', () => {
    it('Table View Rendering', () => {
        const TableView = shallow(<GenericTable data={[]} />);
        expect(TableView.exists()).toBe(true);
    });

})