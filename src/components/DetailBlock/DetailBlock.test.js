import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTools,
  FaUserCircle,
  FaChevronRight
} from "react-icons/fa";

import DetailBlock from './index';

configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());
const expect = chai.expect;

configure({ adapter: new Adapter() });

const defaultProps = {
  strings: {},
  shifts: [],
  address: {},
  requirements: [],
  name: '',
  phone: '',
  milesToTravel: 0,
  branchPhoneNumber: '',
  zoneId: ''
};

const wrapper = shallow(<DetailBlock {...defaultProps} />);

describe('<DetailBlock /> basic component structure', () => {
  it('should render parent container', () => {
    expect(wrapper.find('.detail-block-container').length).to.equal(1);
  });

  it('should render one h3', () => {
    expect(wrapper.find('h3').length).to.equal(1);
  });
});

describe('<DetailBlock /> props update component structure', () => {
  it('should render one FaCalendarAlt icon', () => {
    wrapper.setProps({
      shifts: [{
        startDate: "2019-09-04T21:00:00Z",
        endDate: "2019-09-05T05:00:00Z"
      }],
      zoneId: 'America/Chicago'
    });
    expect(wrapper.find(FaCalendarAlt).length).to.equal(1);
  });

  it('should render a list of shifts', () => {
    expect(wrapper.find('ul').length).to.equal(1);
    expect(wrapper.find('li').length).to.equal(1);
  });

  it('should render correct formatted shift text', () => {
    expect(wrapper.find('li').first()).text().to.equal('SEP 4, WED 04:00 PM - 12:00 AM CDT');
  });

  it('should render one <FaMapMarkerAlt /> icon', () => {
    wrapper.setProps({
      shifts: null,
      address: { formattedAddress: "123 Main Street, Chicago, IL 60654" }
    });
    expect(wrapper.find(FaMapMarkerAlt).length).to.equal(1);
  });

  it('should render one "a" container', () => {
    expect(wrapper.find('a').hasClass('detail-block-container')).to.equal(true);
  });

  it('should render heading text as "Location"', () => {
    wrapper.setProps({
      strings: {
        location: "Location"
      }
    });
    expect(wrapper.find('h3')).text().to.equal('Location');
  });

  it('should render the correct formatted address', () => {
    expect(wrapper.find('p')).text().to.equal('123 Main Street, Chicago, IL 60654');
  });

  it('should render the distance info', () => {
    wrapper.setProps({
      milesToTravel: 3.434,
      strings: {
        milesFromYourJobSearchLocation: 'miles from here'
      }
    });
    expect(wrapper.find('span')).text().to.equal('3.43 miles from here');
  });

  it('should render one <FaTools /> icon', () => {
    wrapper.setProps({
      address: null,
      requirements: ['brush', 'ladder'],
      strings: {
        requirements: "Requirements"
      }
    });
    expect(wrapper.find(FaTools).length).to.equal(1);
  });

  it('should render heading text as "Requirements', () => {
    expect(wrapper.find('h3')).text().to.equal('Requirements');
  });

  it('should render a list of requirements', () => {
    expect(wrapper.find('li').length).to.equal(2);
  });

  it('should render one <FaUserCircle />', () => {
    wrapper.setProps({
      requirements: null,
      name: 'Judy',
      phone: '1234567890'
    });
    expect(wrapper.find(FaUserCircle).length).to.equal(1);
  });

  it('should render contact name and phone number', () => {
    expect(wrapper.find('p').length).to.equal(1);
    expect(wrapper.find('p')).text().to.equal('Judy (123) 456 7890');
  });
});
