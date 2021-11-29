import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Logo from '../../assets/images/zendesk_logo.png';


import './App.css';

function Home(){

	return	(
			
			<Container className="p-4">
			    <Container className="p-5 mb-4 bg-light rounded-3">
			    	<Container>
			    	<Row className="justify-content-md-center">
			      	<Image src={Logo} rounded className="logo" />
			      	</Row>
			      	</Container>
			      	<br />	
			      <h5 className="header">Welcome to the Zendesk Coding Challenge - Ticket Viewer</h5>
			      <p className=""><u>Technologies</u> <br />Frontend-<b>React</b><br /> Backend- <b>Ruby on Rails</b><br /> VCS- <b>Github</b><br /> Responsive- <b>Bootstrap</b> </p>


			    </Container>
			  	
			</Container>	
			
		)


}


export default Home;
