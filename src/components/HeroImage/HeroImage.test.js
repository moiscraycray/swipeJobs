import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import HeroImage from './index';

configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());
const expect = chai.expect;

configure({ adapter: new Adapter() });

const defaultProps = {
  jobImage: {
    imageUrl: 'bit.ly/test',
    name: 'Construction worker'
  }
};

const wrapper = shallow(<HeroImage {...defaultProps} />);

describe('<Header /> basic component structure', () => {
  it('should render one img element', () => {
    expect(wrapper.find('img').length).to.equal(1);
  });

  it('should have correct image path', () => {
    expect(wrapper.find('img').prop('src')).to.equal('bit.ly/test');
  });

  it('should have an alt text', () => {
    expect(wrapper.find('img').prop('alt')).to.equal('Construction worker');
  });
});