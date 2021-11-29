
import React from "react";
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './../components/Home';
import TicketList from './../components/TicketList';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Logo from '../../assets/images/zendesk_logo.png';
import 'isomorphic-fetch';

configure({ adapter: new Adapter() });



describe('<Home />', () => {
  it('should renders initial <Home /> components', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.getElements()).toMatchSnapshot();
  });



});


