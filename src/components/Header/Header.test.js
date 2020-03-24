import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Header from './index';

configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());
const expect = chai.expect;

configure({ adapter: new Adapter() });

const defaultProps = {
  user: {},
  strings: {}
};

const wrapper = shallow(<Header {...defaultProps} />);

describe('<Header /> basic component structure', () => {
  it('should render parent header wrapper', () => {
    expect(wrapper.find('header').length).to.equal(1);
  });

  it('should render one wrapper with header container class', () => {
    expect(wrapper.find('div').hasClass('header-container')).to.equal(true);
  });

  it('should render one h1 with "swipejobs"', () => {
    wrapper.setProps({
      user: {
        firstName: "Alice",
        lastName: "Le"
      },
      strings: {
        swipejobs: 'swipejobs'
      }
    });
    expect(wrapper.find('h1').length).to.equal(1);
    expect(wrapper.find('h1').text()).to.equal('swipejobs');
  });

  it('should render one p', () => {
    expect(wrapper.find('p').length).to.equal(1);
    expect(wrapper.find('p').text()).to.equal('Alice Le');
  });
});