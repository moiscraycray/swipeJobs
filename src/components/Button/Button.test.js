import React from 'react';
import { configure, shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Button from './index';

configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());
const expect = chai.expect;

configure({ adapter: new Adapter() });

const defaultProps = {
  reject: false,
  text: '',
  onHandleClick: sinon.spy()
}

const wrapper = shallow(<Button {...defaultProps} />);

describe('<Button /> basic component structure', () => {
  it('should render button element', () => {
    expect(wrapper.find('button').length).to.equal(1);
  });
});

describe('<Button /> props update component structure', () => {
  it('should render cancel style', () => {
    wrapper.setProps({ reject: true });
    expect(wrapper.find('.cancel').length).to.equal(1);
  });

  it('should render some button text', () => {
    wrapper.setProps({ text: 'Finish' });
    expect(wrapper.text()).to.equal('Finish');
  });
});

describe('<Button /> props functions', () => {
  it('should simulate click and call onClick()', () => {
    wrapper.find('button').simulate('click');
    expect(defaultProps.onHandleClick.callCount).to.equal(1);
  });
});
