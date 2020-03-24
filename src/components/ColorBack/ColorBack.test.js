import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import ColorBack from './index';

configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());
const expect = chai.expect;

configure({ adapter: new Adapter() });

const defaultProps = { children: [] };

const wrapper = shallow(<ColorBack {...defaultProps} />);

describe('<ColorBack /> basic component structure', () => {
  it('should render parent div element', () => {
    expect(wrapper.find('.color-back-container').length).to.equal(1);
  });
});

describe('<ColorBack /> props update component structure', () => {
  wrapper.setProps({ children: [<p key="hello">hello</p>, <p key="world">world</p>] });
  it('should render two p tags', () => {
    expect(wrapper.find('p').length).to.equal(2);
  });

  it('should render hello', () => {
    expect(wrapper.find('p').first().text()).to.equal('hello');
  });

  it('should render world', () => {
    expect(wrapper.find('p').last().text()).to.equal('world');
  });
});