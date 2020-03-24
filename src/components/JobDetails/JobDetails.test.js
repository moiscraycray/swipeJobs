import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import sinon from 'sinon';

import JobDetails from './index';

configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());
const expect = chai.expect;

configure({ adapter: new Adapter() });

const defaultProps = {
  currentMatch: {
    shifts: [],
    company: {
      address: '',
      reportTo: ''
    },
    requirements: [],
    jobTitle: '',
    milesToTravel: 0
  },
  strings: {
    distance: '',
  }
};

const wrapper = shallow(<JobDetails {...defaultProps} />);

describe('<JobDetails /> basic component structure', () => {
  it('should render one HeroImage', () => {
    expect(wrapper.find('HeroImage').length).to.equal(1);
  });

  it('should render one JobTitle', () => {
    expect(wrapper.find('JobTitle').length).to.equal(1);
  });

  it('should render one ColorBack', () => {
    expect(wrapper.find('ColorBack').length).to.equal(1);
  });

  it('should render one DetailBlock', () => {
    expect(wrapper.find('DetailBlock').length).to.equal(4);
  });
});