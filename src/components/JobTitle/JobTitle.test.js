import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import JobTitle from './index';

configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());
const expect = chai.expect;

configure({ adapter: new Adapter() });

const defaultProps = {
  jobTitle: 'Baker',
  companyName: 'Merlin Bakery'
};

const wrapper = shallow(<JobTitle {...defaultProps} />);

describe('<JobTitle /> basic component structure', () => {
  it('should render one wrapper div', () => {
    expect(wrapper.find('div').hasClass('job-title-container')).to.equal(true);
  });

  it('should render one h2 with correct text', () => {
    expect(wrapper.find('h2').text()).to.equal('Baker');
  });

  it('should render one p with correct text', () => {
    expect(wrapper.find('p').text()).to.equal('Merlin Bakery');
  });
});