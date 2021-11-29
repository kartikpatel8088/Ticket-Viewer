import React,{useEffect, useState} from 'react'
import Home from './Home'
import TicketDetails from './TicketDetails'
import './App.css'

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import moment from 'moment';

// TicketList Class based Component - Stateful

class TicketList extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      data: [],
	      ticketid: '',
	      show: false,
	      loading: true
	    };
	}

	componentDidMount() {
    	// Runs after the first render() lifecycle
    	const url = "http://localhost:3000/api/v1/base";
	    	fetch(url, {
			  "method": "GET",
			})
			.then(response => response.json())
			.then(response => {
			  this.setState({data: response.tickets}); 
			  this.setState({loading: false});
			})
			.catch(err => { console.log(err); 
			})
	};

	render(){
		function TagFormatter(cell, row){


			
			var tag = [];
			for (var j = 0; j < cell.length; j++) {
				
				
				tag.push(<Badge pill bg="secondary" text="light"> { cell[j] } </Badge>);
				/// 
			     
			}
			// console.log(tag)
			return (
				tag 
				
			);
		};

		function DateFormatter(cell, row){

			return	(
				moment(cell).format("MMM Do YYYY, h:mm:ss a")
			)
		};

		const columns = [
			{
				dataField: "id",
				text:"ID",
				sort: true	
			},
			{
				dataField: "subject",
				text:"Subject",
				sort: true
			},
			{
				dataField: "status",
				text:"Status",
				sort: true
			},
			{
				dataField: "tags",
				text:"Tags",
				sort: true,
				formatter: TagFormatter,
			},
			{
				dataField: "created_at",
				text:"Created",
				sort: true,
				formatter: DateFormatter,
			},
			{
				dataField: "updated_at",
				text:"Updated",
				sort: true,
				formatter: DateFormatter,
			},
		];

		const sizePerPageList = [
			{
			  text: '5', value: 5
			}, {
			  text: '15', value: 15
			}, {
			  text: '25', value: 25
			},
			{
			  text: 'All', value: this.state.data.length
			}  
		];

		const ticketEvent = {

			onClick: (e, row, rowIndex) => {
			     this.setState({ticketid: row.id});
			     this.setState({show: true});
			 

			},
		};

		const fromTicketDetail = (childdata) => {
		    this.setState({show: childdata});
		 }
		

		return (
			!this.state.loading ? 
				<>
					
					<Container>	
					 <BootstrapTable hover
				        bootstrap4
				        keyField="id"
				        data={this.state.data}
				        columns={columns}
				        rowEvents={ ticketEvent }
				        pagination={paginationFactory({ sizePerPage: 25 , sizePerPageList: sizePerPageList})}
				      />
					
					</Container>

					{this.state.show && <TicketDetails id={this.state.ticketid} show={this.state.show} onHide={() => this.setState({show: false})}/>}	
				</>
				:

				<Container className="header">
					<Button variant="primary" disabled>
				    <Spinner
				      as="span"
				      animation="grow"
				      size="sm"
				      role="status"
				      aria-hidden="true"
				    />
				    {" "}
				    Loading...
				  </Button>
					
				</Container>


		)
	}
}


/// TicketDetails Functional based Component - Stateless 

// function TicketList() {
// 	const [loading, setLoading] = React.useState(true);
// 	const [show, setShow] = React.useState(false);
// 	const [data, setData] = React.useState([]);
// 	const [ticketid, setId] = React.useState();

// 	function TagFormatter(cell, row) {

// 		var tag = []
// 		for (var i = 0; i < cell.length; i++) {
// 		    tag.push(<Badge pill bg="secondary" text="light">{ cell[i] } </Badge> );
// 		}
// 		return (
// 			tag
// 		);
// 	}

// 	function DateFormatter(cell, row) {

// 		return	(
// 			moment(cell).format("MMM Do YYYY, h:mm:ss a")
// 		)
// 	}

// 	const columns = [
// 		{
// 			dataField: "id",
// 			text:"ID",
// 			sort: true	
// 		},
// 		{
// 			dataField: "subject",
// 			text:"Subject",
// 			sort: true
// 		},
// 		{
// 			dataField: "status",
// 			text:"Status",
// 			sort: true
// 		},
// 		{
// 			dataField: "tags",
// 			text:"Tags",
// 			sort: true,
// 			formatter: TagFormatter,
// 		},
// 		{
// 			dataField: "created_at",
// 			text:"Created",
// 			sort: true,
// 			formatter: DateFormatter,
// 		},
// 		{
// 			dataField: "updated_at",
// 			text:"Updated",
// 			sort: true,
// 			formatter: DateFormatter,
// 		},

// 	]

// 	const sizePerPageList = [
// 		{
// 		  text: '5', value: 5
// 		}, {
// 		  text: '15', value: 15
// 		}, {
// 		  text: '25', value: 25
// 		},
// 		{
// 		  text: 'All', value: data.length
// 		}  
// 	]

// 	const ticketEvent = {

// 		onClick: (e, row, rowIndex) => {
// 		     // console.log(`clicked on row with index: ${row.id}`);
// 		     setId(row.id);
// 		     setShow(true);

// 		},
// 	}

// 	const fromTicketDetail = (childdata) => {
// 	    setShow(childdata);
// 	 }

// 	useEffect(()=>{

// 		const url = "http://localhost:3000/api/v1/base";
// 	    	fetch(url, {
// 			  "method": "GET",
// 			})
// 			.then(response => response.json())
// 			.then(response => {
// 			  setData(response.tickets); 
// 			  setLoading(false);
// 			})
// 			.catch(err => { console.log(err); 
// 			})

// 	}, []);

// 	return	!loading ? 
// 			<>
				
// 				<Container>	
// 				 <BootstrapTable hover
// 			        bootstrap4
// 			        keyField="id"
// 			        data={data}
// 			        columns={columns}
// 			        rowEvents={ ticketEvent }
// 			        pagination={paginationFactory({ sizePerPage: 25 , sizePerPageList: sizePerPageList})}
// 			      />
				
// 				</Container>

// 				{show && <TicketDetails id={ticketid} show={show} onHide={() => setShow(false)}/>}	
// 			</>
// 			:

// 			<Container className="header">
// 				<Button variant="primary" disabled>
// 			    <Spinner
// 			      as="span"
// 			      animation="grow"
// 			      size="sm"
// 			      role="status"
// 			      aria-hidden="true"
// 			    />
// 			    {" "}
// 			    Loading...
// 			  </Button>
				
// 			</Container>

// }


export default TicketList