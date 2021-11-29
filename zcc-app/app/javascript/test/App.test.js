
import React from "react";
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import App from "./../components/App";
import Home from './../components/Home';
import TicketList from './../components/TicketList';
import 'isomorphic-fetch';

configure({ adapter: new Adapter() });



describe('<App />', () => {
  it('should renders initial <App /> components', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.getElements()).toMatchSnapshot();

  });

  it('<App /> component renders <Home /> component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toContainReact(<Home />);
  });

  it('<App /> component renders <TicketList /> component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toContainReact(<TicketList />);
  });

});


