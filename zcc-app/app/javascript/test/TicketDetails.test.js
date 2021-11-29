
import React from "react";
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';
import ReactDOM, {unmountComponentAtNode}from 'react-dom';

import StarRatingComponent from 'react-star-rating-component';
import 'isomorphic-fetch';



import TicketDetails from './../components/TicketDetails';

import Modal from 'react-bootstrap/Modal';

configure({ adapter: new Adapter() });


describe('<TicketDetails />', () => {

	//--------------------------------  Snapshot TESTING: Conditional based component rendering and Integrity Testing ------------------------------------------// 
	
	it('should render initial elements when data is not loaded', () => {
	    const testDetails = {
	      "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/12.json",
	        "id": 12,
	        "external_id": null,
	        "via": {
	            "channel": "api",
	            "source": {
	                "from": {},
	                "to": {},
	                "rel": null
	            }
	        },
	        "created_at": "2021-11-20T06:22:39Z",
	        "updated_at": "2021-11-20T06:22:39Z",
	        "type": null,
	        "subject": "tempor aliquip sint dolore incididunt",
	        "raw_subject": "tempor aliquip sint dolore incididunt",
	        "description": "Amet sint ea minim excepteur amet. Eiusmod duis ad ea ad aliquip occaecat ea voluptate sunt cillum duis aute. Esse in duis tempor et. Est duis nulla irure ullamco amet sit esse Lorem eu aliqua ullamco sunt. In sint dolore id eu ea.\n\nIrure proident nulla deserunt officia laboris culpa. Qui est adipisicing elit tempor cupidatat minim laborum ea est nostrud nulla mollit id dolore. Aute amet amet deserunt incididunt magna ipsum exercitation nostrud incididunt ea qui anim. Adipisicing irure commodo consectetur Lorem ad excepteur nulla eiusmod aliquip irure occaecat. Id sint fugiat proident Lorem est minim ea sint irure. Veniam sint ex minim duis est.",
	        "priority": null,
	        "status": "open",
	        "recipient": null,
	        "requester_id": 1523617346642,
	        "submitter_id": 1523617346642,
	        "assignee_id": 1523617346642,
	        "organization_id": 1900146445865,
	        "group_id": 1900001551265,
	        "collaborator_ids": [],
	        "follower_ids": [],
	        "email_cc_ids": [],
	        "forum_topic_id": null,
	        "problem_id": null,
	        "has_incidents": false,
	        "is_public": true,
	        "due_at": null,
	        "tags": [
	            "ad",
	            "minim",
	            "non"
	        ],
	        "custom_fields": [],
	        "satisfaction_rating": null,
	        "sharing_agreement_ids": [],
	        "fields": [],
	        "followup_ids": [],
	        "ticket_form_id": 1900000972265,
	        "brand_id": 1900000502145,
	        "allow_channelback": false,
	        "allow_attachments": true
	    };

	    const props = {id: 12, show: true}
	    const wrapper = shallow(<TicketDetails {...props} />);
	    
	    wrapper.setState({loading:true, details: testDetails});

	    expect(wrapper.getElements()).toMatchSnapshot();  
  	});
    
	it('should render updated elements when data is loaded', async () => {
	   
	    const props = {id: 12, show: true}

	    const wrapper = await shallow(<TicketDetails {...props} />);

	    const testDetails = {
	        "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/12.json",
	          "id": 12,
	          "external_id": null,
	          "via": {
	              "channel": "api",
	              "source": {
	                  "from": {},
	                  "to": {},
	                  "rel": null
	              }
	          },
	          "created_at": "2021-11-20T06:22:39Z",
	          "updated_at": "2021-11-20T06:22:39Z",
	          "type": null,
	          "subject": "tempor aliquip sint dolore incididunt",
	          "raw_subject": "tempor aliquip sint dolore incididunt",
	          "description": "Amet sint ea minim excepteur amet. Eiusmod duis ad ea ad aliquip occaecat ea voluptate sunt cillum duis aute. Esse in duis tempor et. Est duis nulla irure ullamco amet sit esse Lorem eu aliqua ullamco sunt. In sint dolore id eu ea.\n\nIrure proident nulla deserunt officia laboris culpa. Qui est adipisicing elit tempor cupidatat minim laborum ea est nostrud nulla mollit id dolore. Aute amet amet deserunt incididunt magna ipsum exercitation nostrud incididunt ea qui anim. Adipisicing irure commodo consectetur Lorem ad excepteur nulla eiusmod aliquip irure occaecat. Id sint fugiat proident Lorem est minim ea sint irure. Veniam sint ex minim duis est.",
	          "priority": null,
	          "status": "open",
	          "recipient": null,
	          "requester_id": 1523617346642,
	          "submitter_id": 1523617346642,
	          "assignee_id": 1523617346642,
	          "organization_id": 1900146445865,
	          "group_id": 1900001551265,
	          "collaborator_ids": [],
	          "follower_ids": [],
	          "email_cc_ids": [],
	          "forum_topic_id": null,
	          "problem_id": null,
	          "has_incidents": false,
	          "is_public": true,
	          "due_at": null,
	          "tags": [
	              "ad",
	              "minim",
	              "non"
	          ],
	          "custom_fields": [],
	          "satisfaction_rating": null,
	          "sharing_agreement_ids": [],
	          "fields": [],
	          "followup_ids": [],
	          "ticket_form_id": 1900000972265,
	          "brand_id": 1900000502145,
	          "allow_channelback": false,
	          "allow_attachments": true
	    };

	    wrapper.setState({loading: false, details: testDetails});

	    expect(wrapper.getElements()).toMatchSnapshot();  
	});


  	//-------------------------------- Unit TESTING: Key Feature Testing ------------------------------------------// 

  	it('should check Title contains ticket id and ticket subject', async () => {
	   
	    const props = {id: 12, show: true}

	    const wrapper = await shallow(<TicketDetails {...props} />);

	    const testDetails = {
	        "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/12.json",
	          "id": 12,
	          "external_id": null,
	          "via": {
	              "channel": "api",
	              "source": {
	                  "from": {},
	                  "to": {},
	                  "rel": null
	              }
	          },
	          "created_at": "2021-11-20T06:22:39Z",
	          "updated_at": "2021-11-20T06:22:39Z",
	          "type": null,
	          "subject": "tempor aliquip sint dolore incididunt",
	          "raw_subject": "tempor aliquip sint dolore incididunt",
	          "description": "Amet sint ea minim excepteur amet. Eiusmod duis ad ea ad aliquip occaecat ea voluptate sunt cillum duis aute. Esse in duis tempor et. Est duis nulla irure ullamco amet sit esse Lorem eu aliqua ullamco sunt. In sint dolore id eu ea.\n\nIrure proident nulla deserunt officia laboris culpa. Qui est adipisicing elit tempor cupidatat minim laborum ea est nostrud nulla mollit id dolore. Aute amet amet deserunt incididunt magna ipsum exercitation nostrud incididunt ea qui anim. Adipisicing irure commodo consectetur Lorem ad excepteur nulla eiusmod aliquip irure occaecat. Id sint fugiat proident Lorem est minim ea sint irure. Veniam sint ex minim duis est.",
	          "priority": null,
	          "status": "open",
	          "recipient": null,
	          "requester_id": 1523617346642,
	          "submitter_id": 1523617346642,
	          "assignee_id": 1523617346642,
	          "organization_id": 1900146445865,
	          "group_id": 1900001551265,
	          "collaborator_ids": [],
	          "follower_ids": [],
	          "email_cc_ids": [],
	          "forum_topic_id": null,
	          "problem_id": null,
	          "has_incidents": false,
	          "is_public": true,
	          "due_at": null,
	          "tags": [
	              "ad",
	              "minim",
	              "non"
	          ],
	          "custom_fields": [],
	          "satisfaction_rating": null,
	          "sharing_agreement_ids": [],
	          "fields": [],
	          "followup_ids": [],
	          "ticket_form_id": 1900000972265,
	          "brand_id": 1900000502145,
	          "allow_channelback": false,
	          "allow_attachments": true
	    };

	    wrapper.setState({loading: false, details: testDetails});

	    // console.log(wrapper.find('#contained-modal-title-vcenter'))
	    expect(wrapper.find('ModalTitle').text()).toMatch('12.  tempor aliquip sint dolore incididunt open');  
	});

	it('should check Body contains ticket description', async () => {
	   
	    const props = {id: 12, show: true}

	    const wrapper = await shallow(<TicketDetails {...props} />);

	    const testDetails = {
	        "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/12.json",
	          "id": 12,
	          "external_id": null,
	          "via": {
	              "channel": "api",
	              "source": {
	                  "from": {},
	                  "to": {},
	                  "rel": null
	              }
	          },
	          "created_at": "2021-11-20T06:22:39Z",
	          "updated_at": "2021-11-20T06:22:39Z",
	          "type": null,
	          "subject": "tempor aliquip sint dolore incididunt",
	          "raw_subject": "tempor aliquip sint dolore incididunt",
	          "description": "Amet sint ea minim excepteur amet. Eiusmod duis ad ea ad aliquip occaecat ea voluptate sunt cillum duis aute. Esse in duis tempor et. Est duis nulla irure ullamco amet sit esse Lorem eu aliqua ullamco sunt. In sint dolore id eu ea.\n\nIrure proident nulla deserunt officia laboris culpa. Qui est adipisicing elit tempor cupidatat minim laborum ea est nostrud nulla mollit id dolore. Aute amet amet deserunt incididunt magna ipsum exercitation nostrud incididunt ea qui anim. Adipisicing irure commodo consectetur Lorem ad excepteur nulla eiusmod aliquip irure occaecat. Id sint fugiat proident Lorem est minim ea sint irure. Veniam sint ex minim duis est.",
	          "priority": null,
	          "status": "open",
	          "recipient": null,
	          "requester_id": 1523617346642,
	          "submitter_id": 1523617346642,
	          "assignee_id": 1523617346642,
	          "organization_id": 1900146445865,
	          "group_id": 1900001551265,
	          "collaborator_ids": [],
	          "follower_ids": [],
	          "email_cc_ids": [],
	          "forum_topic_id": null,
	          "problem_id": null,
	          "has_incidents": false,
	          "is_public": true,
	          "due_at": null,
	          "tags": [
	              "ad",
	              "minim",
	              "non"
	          ],
	          "custom_fields": [],
	          "satisfaction_rating": null,
	          "sharing_agreement_ids": [],
	          "fields": [],
	          "followup_ids": [],
	          "ticket_form_id": 1900000972265,
	          "brand_id": 1900000502145,
	          "allow_channelback": false,
	          "allow_attachments": true
	    };

	    wrapper.setState({loading: false, details: testDetails});

	    
	    expect(wrapper.find('.description').text()).toMatch(/Amet sint ea minim excepteur amet. Eiusmod duis ad ea ad aliquip/);  
	});


  	it('should check info element exist', async () => {
	   
	    const props = {id: 12, show: true}

	    const wrapper = await shallow(<TicketDetails {...props} />);

	    const testDetails = {
	        "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/12.json",
	          "id": 12,
	          "external_id": null,
	          "via": {
	              "channel": "api",
	              "source": {
	                  "from": {},
	                  "to": {},
	                  "rel": null
	              }
	          },
	          "created_at": "2021-11-20T06:22:39Z",
	          "updated_at": "2021-11-20T06:22:39Z",
	          "type": null,
	          "subject": "tempor aliquip sint dolore incididunt",
	          "raw_subject": "tempor aliquip sint dolore incididunt",
	          "description": "Amet sint ea minim excepteur amet. Eiusmod duis ad ea ad aliquip occaecat ea voluptate sunt cillum duis aute. Esse in duis tempor et. Est duis nulla irure ullamco amet sit esse Lorem eu aliqua ullamco sunt. In sint dolore id eu ea.\n\nIrure proident nulla deserunt officia laboris culpa. Qui est adipisicing elit tempor cupidatat minim laborum ea est nostrud nulla mollit id dolore. Aute amet amet deserunt incididunt magna ipsum exercitation nostrud incididunt ea qui anim. Adipisicing irure commodo consectetur Lorem ad excepteur nulla eiusmod aliquip irure occaecat. Id sint fugiat proident Lorem est minim ea sint irure. Veniam sint ex minim duis est.",
	          "priority": null,
	          "status": "open",
	          "recipient": null,
	          "requester_id": 1523617346642,
	          "submitter_id": 1523617346642,
	          "assignee_id": 1523617346642,
	          "organization_id": 1900146445865,
	          "group_id": 1900001551265,
	          "collaborator_ids": [],
	          "follower_ids": [],
	          "email_cc_ids": [],
	          "forum_topic_id": null,
	          "problem_id": null,
	          "has_incidents": false,
	          "is_public": true,
	          "due_at": null,
	          "tags": [
	              "ad",
	              "minim",
	              "non"
	          ],
	          "custom_fields": [],
	          "satisfaction_rating": null,
	          "sharing_agreement_ids": [],
	          "fields": [],
	          "followup_ids": [],
	          "ticket_form_id": 1900000972265,
	          "brand_id": 1900000502145,
	          "allow_channelback": false,
	          "allow_attachments": true
	    };

	    wrapper.setState({loading: false, details: testDetails});

	    expect(wrapper.find('Info').length).toEqual(1) ;  
	});

	




});


