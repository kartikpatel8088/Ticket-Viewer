

import React,{useEffect, useState} from 'react';
import Home from './Home'
import './App.css';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Overlay from 'react-bootstrap/Overlay';

import StarRatingComponent from 'react-star-rating-component';
import moment from 'moment';


/// TicketDetails Class based Component - Stateful

class TicketDetails extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      details: [],
	      loading: true
	    };
	}
	componentDidMount() {
    	// Runs after the first render() lifecycle
    	const url = "http://localhost:3000/api/v1/ticket/"+this.props.id;
	    	fetch(url, {
			  "method": "GET",
			})
			.then(response => response.json())
			.then(response => {
				this.setState({ details: response.ticket });
				this.setState({ loading: false });
			  	
			  
			})
			.catch(err => { console.log(err); 
			})
	};

  	render() {
    	
    	const popover = (
			  <Popover id="popover-basic">
			    <Popover.Header as="h3">Information</Popover.Header>
			    <Popover.Body>
			      Requested By: {this.state.details.requester_id}<br />
			      Submitted By: {this.state.details.submitter_id} <br />
			      Assigned: {this.state.details.assignee_id} <br />
			      Group: {this.state.details.group_id} <br />
			    </Popover.Body>
			  </Popover>
		);

		const Info = () => (
			  <OverlayTrigger trigger="click" placement="right" overlay={popover}>

			    <Button variant="outline-info"  text="light" size="sm" className="float-right info">Info</Button>
			  </OverlayTrigger>
		);

    	return (
		!this.state.loading ? 
		
			<Modal
		      {...this.props}
		      size="lg"
		      aria-labelledby="contained-modal-title-vcenter"
		      centered
		    >
		    
		      <Modal.Header>
		        <Modal.Title id="contained-modal-title-vcenter">
		          {this.state.details.id}.  {this.state.details.subject}
		          {" "}{this.state.details.status == "open" && <Badge bg="danger" text="light">{this.state.details.status}</Badge>}
		          
		        </Modal.Title>
		        <br />
		        <p className="float-right via">via: {this.state.details.via.channel.toUpperCase()}</p>
		          

		      </Modal.Header>
		      <Modal.Body>
		        <h5>Description</h5>
		        <p className="description">
		          {this.state.details.description}
		        </p>
		        <StarRatingComponent 
		          name="rate1" 
		          editing={false}
		        
		          starCount={5}
		          value={this.state.details.satisfaction_rating}
		        />
		        <br />

		        <Badge pill bg="secondary" text="light">{this.state.details.tags[0]} </Badge>
		        <Badge pill bg="secondary" text="light">{this.state.details.tags[1]} </Badge>
		        <Badge pill bg="secondary" text="light">{this.state.details.tags[2]} </Badge>

		        <Info />
		      </Modal.Body>
		      <Modal.Footer>
		      	<p className="mr-auto">Created On: {moment(this.state.details.created_at).format("LLL")}</p>
		        <Button onClick={this.props.onHide}>Close</Button>
		      </Modal.Footer>
		    </Modal>
		
		:
		<>
		</>
	)
  	}
}


/// TicketDetails Functional based Component - Stateless 

// function TicketDetails(props){
// 	const [details,setDetails]=React.useState([]);
// 	const [loading, setLoading] = React.useState(true);


// 	useEffect(()=>{

// 		const url = "http://localhost:3000/api/v1/ticket/"+props.id;
// 	    	fetch(url, {
// 			  "method": "GET",
// 			})
// 			.then(response => response.json())
// 			.then(response => {
// 			  setDetails(response.ticket); 
// 			  setLoading(false);
// 			})
// 			.catch(err => { console.log(err); 
// 			})

// 	}, []);

// 	const popover = (
// 		  <Popover id="popover-basic">
// 		    <Popover.Header as="h3">Information</Popover.Header>
// 		    <Popover.Body>
// 		      Requested By: {details.requester_id}<br />
// 		      Submitted By: {details.submitter_id} <br />
// 		      Assigned: {details.assignee_id} <br />
// 		      Group: {details.group_id} <br />
// 		    </Popover.Body>
// 		  </Popover>
// 	);

// 	const Example = () => (
// 		  <OverlayTrigger trigger="click" placement="right" overlay={popover}>

// 		    <Button variant="outline-info"  text="light" size="sm" className="float-right">Info</Button>
// 		  </OverlayTrigger>
// 	);

	
	
// 	return (
// 		!loading ? 
		
// 			<Modal
// 		      {...props}
// 		      size="lg"
// 		      aria-labelledby="contained-modal-title-vcenter"
// 		      centered
// 		    >
		    
// 		      <Modal.Header>
// 		        <Modal.Title id="contained-modal-title-vcenter">
// 		          {details.id}.  {details.subject}
// 		          {" "}{details.status == "open" && <Badge bg="danger" text="light">{details.status}</Badge>}
		          
// 		        </Modal.Title>
// 		        <br />
// 		        <p className="float-right via">via: {details.via.channel.toUpperCase()}</p>
		          

// 		      </Modal.Header>
// 		      <Modal.Body>
// 		        <h5>Description</h5>
// 		        <p>
// 		          {details.description}
// 		        </p>
// 		        <StarRatingComponent 
// 		          name="rate1" 
// 		          editing={false}
		        
// 		          starCount={5}
// 		          value={details.satisfaction_rating}
// 		        />
// 		        <br />

// 		        <Badge pill bg="secondary" text="light">{details.tags[0]} </Badge>
// 		        <Badge pill bg="secondary" text="light">{details.tags[1]} </Badge>
// 		        <Badge pill bg="secondary" text="light">{details.tags[2]} </Badge>

// 		        <Example />
// 		      </Modal.Body>
// 		      <Modal.Footer>
// 		      	<p className="mr-auto">Created On: {moment(details.created_at).format("LLL")}</p>
// 		        <Button onClick={props.onHide}>Close</Button>
// 		      </Modal.Footer>
// 		    </Modal>
		
// 		:
// 		<>
// 		</>
// 	)
// }

export default TicketDetails