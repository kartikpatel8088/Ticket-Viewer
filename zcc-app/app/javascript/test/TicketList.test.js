
import React from "react";
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM, {unmountComponentAtNode}from 'react-dom';

import TicketList from './../components/TicketList';

import Modal from 'react-bootstrap/Modal';

import 'isomorphic-fetch';

configure({ adapter: new Adapter() });



describe('<TicketList />', () => {

  //--------------------------------  Snapshot TESTING: Conditional based component rendering and Integrity Testing ------------------------------------------//
  
  it('should render initial elements when data is not loaded', () => {
    const testData = [
        {
            "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/1.json",
            "id": 1,
            "external_id": null,
            "via": {
                "channel": "sample_ticket",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-11-20T05:22:37Z",
            "updated_at": "2021-11-20T05:22:37Z",
            "type": "incident",
            "subject": "Sample ticket: Meet the ticket",
            "raw_subject": "Sample ticket: Meet the ticket",
            "description": "Hi there,\n\nI’m sending an email because I’m having a problem setting up your new product. Can you help me troubleshoot?\n\nThanks,\n The Customer\n\n",
            "priority": "normal",
            "status": "open",
            "recipient": null,
            "requester_id": 1909844122125,
            "submitter_id": 1523617346642,
            "assignee_id": 1523617346642,
            "organization_id": null,
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
                "sample",
                "support",
                "zendesk"
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
        },
        {
            "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/2.json",
            "id": 2,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-11-20T06:22:33Z",
            "updated_at": "2021-11-20T06:22:33Z",
            "type": null,
            "subject": "velit eiusmod reprehenderit officia cupidatat",
            "raw_subject": "velit eiusmod reprehenderit officia cupidatat",
            "description": "Aute ex sunt culpa ex ea esse sint cupidatat aliqua ex consequat sit reprehenderit. Velit labore proident quis culpa ad duis adipisicing laboris voluptate velit incididunt minim consequat nulla. Laboris adipisicing reprehenderit minim tempor officia ullamco occaecat ut laborum.\n\nAliquip velit adipisicing exercitation irure aliqua qui. Commodo eu laborum cillum nostrud eu. Mollit duis qui non ea deserunt est est et officia ut excepteur Lorem pariatur deserunt.",
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
                "est",
                "incididunt",
                "nisi"
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
        },
        {
            "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/3.json",
            "id": 3,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-11-20T06:22:34Z",
            "updated_at": "2021-11-20T06:22:34Z",
            "type": null,
            "subject": "excepteur laborum ex occaecat Lorem",
            "raw_subject": "excepteur laborum ex occaecat Lorem",
            "description": "Exercitation amet in laborum minim. Nulla et veniam laboris dolore fugiat aliqua et sit mollit. Dolor proident nulla mollit culpa in officia pariatur officia magna eu commodo duis.\n\nAliqua reprehenderit aute qui voluptate dolor deserunt enim aute tempor ad dolor fugiat. Mollit aliquip elit aliqua eiusmod. Ex et anim non exercitation consequat elit dolore excepteur. Aliqua reprehenderit non culpa sit consequat cupidatat elit.",
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
                "amet",
                "labore",
                "voluptate"
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
        },
        {
            "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/4.json",
            "id": 4,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-11-20T06:22:34Z",
            "updated_at": "2021-11-20T06:22:34Z",
            "type": null,
            "subject": "ad sunt qui aute ullamco",
            "raw_subject": "ad sunt qui aute ullamco",
            "description": "Sunt incididunt officia proident elit anim ullamco reprehenderit ut. Aliqua sint amet aliquip cillum minim magna consequat excepteur fugiat exercitation est exercitation. Adipisicing occaecat nisi aliqua exercitation.\n\nAute Lorem aute tempor sunt mollit dolor in consequat non cillum irure reprehenderit. Nulla deserunt qui aliquip officia duis incididunt et est velit nulla irure in fugiat in. Deserunt proident est in dolore culpa mollit exercitation ea anim consequat incididunt. Mollit et occaecat ullamco ut id incididunt laboris occaecat qui.",
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
                "laborum",
                "mollit",
                "proident"
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
        },
        {
            "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/5.json",
            "id": 5,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-11-20T06:22:35Z",
            "updated_at": "2021-11-20T06:22:35Z",
            "type": null,
            "subject": "aliquip mollit quis laborum incididunt",
            "raw_subject": "aliquip mollit quis laborum incididunt",
            "description": "Pariatur voluptate laborum voluptate sunt ad magna exercitation nulla. In in Lorem minim dolor laboris reprehenderit ad Lorem. Cupidatat laborum qui mollit nostrud magna ullamco. Tempor nisi ex ipsum fugiat dolor proident qui consectetur anim sunt. Dolore consectetur in ex esse et aliqua fugiat enim Lorem ea Lorem incididunt. Non amet elit pariatur commodo labore officia esse anim. In do mollit commodo nulla ullamco culpa cillum incididunt.\n\nEt nostrud aute fugiat voluptate tempor ad labore in elit et sunt. Enim quis nulla eu ut sit. Pariatur irure officia occaecat non dolor est excepteur anim incididunt commodo ea cupidatat minim excepteur. Cillum proident tempor laborum amet est ipsum ipsum aliqua sit sunt reprehenderit fugiat aliqua ea.",
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
                "consectetur",
                "mollit",
                "sit"
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
        },
    ];

    const props = {}
    const wrapper = shallow(<TicketList {...props} />);

    wrapper.setState({loading:true, data: testData, show: false, ticketid:''});
   
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it('should render updated elements when data is loaded', async () => {
    
    const props = {}
    const wrapper = await shallow(<TicketList {...props}/>);

    const testData = [
        {
            "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/1.json",
            "id": 1,
            "external_id": null,
            "via": {
                "channel": "sample_ticket",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-11-20T05:22:37Z",
            "updated_at": "2021-11-20T05:22:37Z",
            "type": "incident",
            "subject": "Sample ticket: Meet the ticket",
            "raw_subject": "Sample ticket: Meet the ticket",
            "description": "Hi there,\n\nI’m sending an email because I’m having a problem setting up your new product. Can you help me troubleshoot?\n\nThanks,\n The Customer\n\n",
            "priority": "normal",
            "status": "open",
            "recipient": null,
            "requester_id": 1909844122125,
            "submitter_id": 1523617346642,
            "assignee_id": 1523617346642,
            "organization_id": null,
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
                "sample",
                "support",
                "zendesk"
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
        },
        {
            "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/2.json",
            "id": 2,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-11-20T06:22:33Z",
            "updated_at": "2021-11-20T06:22:33Z",
            "type": null,
            "subject": "velit eiusmod reprehenderit officia cupidatat",
            "raw_subject": "velit eiusmod reprehenderit officia cupidatat",
            "description": "Aute ex sunt culpa ex ea esse sint cupidatat aliqua ex consequat sit reprehenderit. Velit labore proident quis culpa ad duis adipisicing laboris voluptate velit incididunt minim consequat nulla. Laboris adipisicing reprehenderit minim tempor officia ullamco occaecat ut laborum.\n\nAliquip velit adipisicing exercitation irure aliqua qui. Commodo eu laborum cillum nostrud eu. Mollit duis qui non ea deserunt est est et officia ut excepteur Lorem pariatur deserunt.",
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
                "est",
                "incididunt",
                "nisi"
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
        },
        {
            "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/3.json",
            "id": 3,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-11-20T06:22:34Z",
            "updated_at": "2021-11-20T06:22:34Z",
            "type": null,
            "subject": "excepteur laborum ex occaecat Lorem",
            "raw_subject": "excepteur laborum ex occaecat Lorem",
            "description": "Exercitation amet in laborum minim. Nulla et veniam laboris dolore fugiat aliqua et sit mollit. Dolor proident nulla mollit culpa in officia pariatur officia magna eu commodo duis.\n\nAliqua reprehenderit aute qui voluptate dolor deserunt enim aute tempor ad dolor fugiat. Mollit aliquip elit aliqua eiusmod. Ex et anim non exercitation consequat elit dolore excepteur. Aliqua reprehenderit non culpa sit consequat cupidatat elit.",
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
                "amet",
                "labore",
                "voluptate"
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
        },
        {
            "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/4.json",
            "id": 4,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-11-20T06:22:34Z",
            "updated_at": "2021-11-20T06:22:34Z",
            "type": null,
            "subject": "ad sunt qui aute ullamco",
            "raw_subject": "ad sunt qui aute ullamco",
            "description": "Sunt incididunt officia proident elit anim ullamco reprehenderit ut. Aliqua sint amet aliquip cillum minim magna consequat excepteur fugiat exercitation est exercitation. Adipisicing occaecat nisi aliqua exercitation.\n\nAute Lorem aute tempor sunt mollit dolor in consequat non cillum irure reprehenderit. Nulla deserunt qui aliquip officia duis incididunt et est velit nulla irure in fugiat in. Deserunt proident est in dolore culpa mollit exercitation ea anim consequat incididunt. Mollit et occaecat ullamco ut id incididunt laboris occaecat qui.",
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
                "laborum",
                "mollit",
                "proident"
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
        },
        {
            "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/5.json",
            "id": 5,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-11-20T06:22:35Z",
            "updated_at": "2021-11-20T06:22:35Z",
            "type": null,
            "subject": "aliquip mollit quis laborum incididunt",
            "raw_subject": "aliquip mollit quis laborum incididunt",
            "description": "Pariatur voluptate laborum voluptate sunt ad magna exercitation nulla. In in Lorem minim dolor laboris reprehenderit ad Lorem. Cupidatat laborum qui mollit nostrud magna ullamco. Tempor nisi ex ipsum fugiat dolor proident qui consectetur anim sunt. Dolore consectetur in ex esse et aliqua fugiat enim Lorem ea Lorem incididunt. Non amet elit pariatur commodo labore officia esse anim. In do mollit commodo nulla ullamco culpa cillum incididunt.\n\nEt nostrud aute fugiat voluptate tempor ad labore in elit et sunt. Enim quis nulla eu ut sit. Pariatur irure officia occaecat non dolor est excepteur anim incididunt commodo ea cupidatat minim excepteur. Cillum proident tempor laborum amet est ipsum ipsum aliqua sit sunt reprehenderit fugiat aliqua ea.",
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
                "consectetur",
                "mollit",
                "sit"
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
        },
    ];

    wrapper.setState({loading: false, data: testData, show: false, ticketid:''});
   
    expect(wrapper.getElements()).toMatchSnapshot();
  });


  //-------------------------------- Unit TESTING: Key Feature Testing ------------------------------------------//

  it('should check Table element exist', async () => {
     
    const props = {}
    const wrapper = await shallow(<TicketList {...props}/>);

    const testData = [
        {
            "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/1.json",
            "id": 1,
            "external_id": null,
            "via": {
                "channel": "sample_ticket",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-11-20T05:22:37Z",
            "updated_at": "2021-11-20T05:22:37Z",
            "type": "incident",
            "subject": "Sample ticket: Meet the ticket",
            "raw_subject": "Sample ticket: Meet the ticket",
            "description": "Hi there,\n\nI’m sending an email because I’m having a problem setting up your new product. Can you help me troubleshoot?\n\nThanks,\n The Customer\n\n",
            "priority": "normal",
            "status": "open",
            "recipient": null,
            "requester_id": 1909844122125,
            "submitter_id": 1523617346642,
            "assignee_id": 1523617346642,
            "organization_id": null,
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
                "sample",
                "support",
                "zendesk"
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
        },
        {
            "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/2.json",
            "id": 2,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-11-20T06:22:33Z",
            "updated_at": "2021-11-20T06:22:33Z",
            "type": null,
            "subject": "velit eiusmod reprehenderit officia cupidatat",
            "raw_subject": "velit eiusmod reprehenderit officia cupidatat",
            "description": "Aute ex sunt culpa ex ea esse sint cupidatat aliqua ex consequat sit reprehenderit. Velit labore proident quis culpa ad duis adipisicing laboris voluptate velit incididunt minim consequat nulla. Laboris adipisicing reprehenderit minim tempor officia ullamco occaecat ut laborum.\n\nAliquip velit adipisicing exercitation irure aliqua qui. Commodo eu laborum cillum nostrud eu. Mollit duis qui non ea deserunt est est et officia ut excepteur Lorem pariatur deserunt.",
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
                "est",
                "incididunt",
                "nisi"
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
        },
        {
            "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/3.json",
            "id": 3,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-11-20T06:22:34Z",
            "updated_at": "2021-11-20T06:22:34Z",
            "type": null,
            "subject": "excepteur laborum ex occaecat Lorem",
            "raw_subject": "excepteur laborum ex occaecat Lorem",
            "description": "Exercitation amet in laborum minim. Nulla et veniam laboris dolore fugiat aliqua et sit mollit. Dolor proident nulla mollit culpa in officia pariatur officia magna eu commodo duis.\n\nAliqua reprehenderit aute qui voluptate dolor deserunt enim aute tempor ad dolor fugiat. Mollit aliquip elit aliqua eiusmod. Ex et anim non exercitation consequat elit dolore excepteur. Aliqua reprehenderit non culpa sit consequat cupidatat elit.",
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
                "amet",
                "labore",
                "voluptate"
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
        },
        {
            "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/4.json",
            "id": 4,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-11-20T06:22:34Z",
            "updated_at": "2021-11-20T06:22:34Z",
            "type": null,
            "subject": "ad sunt qui aute ullamco",
            "raw_subject": "ad sunt qui aute ullamco",
            "description": "Sunt incididunt officia proident elit anim ullamco reprehenderit ut. Aliqua sint amet aliquip cillum minim magna consequat excepteur fugiat exercitation est exercitation. Adipisicing occaecat nisi aliqua exercitation.\n\nAute Lorem aute tempor sunt mollit dolor in consequat non cillum irure reprehenderit. Nulla deserunt qui aliquip officia duis incididunt et est velit nulla irure in fugiat in. Deserunt proident est in dolore culpa mollit exercitation ea anim consequat incididunt. Mollit et occaecat ullamco ut id incididunt laboris occaecat qui.",
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
                "laborum",
                "mollit",
                "proident"
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
        },
        {
            "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/5.json",
            "id": 5,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-11-20T06:22:35Z",
            "updated_at": "2021-11-20T06:22:35Z",
            "type": null,
            "subject": "aliquip mollit quis laborum incididunt",
            "raw_subject": "aliquip mollit quis laborum incididunt",
            "description": "Pariatur voluptate laborum voluptate sunt ad magna exercitation nulla. In in Lorem minim dolor laboris reprehenderit ad Lorem. Cupidatat laborum qui mollit nostrud magna ullamco. Tempor nisi ex ipsum fugiat dolor proident qui consectetur anim sunt. Dolore consectetur in ex esse et aliqua fugiat enim Lorem ea Lorem incididunt. Non amet elit pariatur commodo labore officia esse anim. In do mollit commodo nulla ullamco culpa cillum incididunt.\n\nEt nostrud aute fugiat voluptate tempor ad labore in elit et sunt. Enim quis nulla eu ut sit. Pariatur irure officia occaecat non dolor est excepteur anim incididunt commodo ea cupidatat minim excepteur. Cillum proident tempor laborum amet est ipsum ipsum aliqua sit sunt reprehenderit fugiat aliqua ea.",
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
                "consectetur",
                "mollit",
                "sit"
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
        },
    ];

    wrapper.setState({loading: false, data: testData, show: false, ticketid:''});

    expect(wrapper.find('BootstrapTableContainer').length).toEqual(1) ; 
  });

  it('should check pagination of table element', async () => {
     
    const props = {}
    const wrapper = await shallow(<TicketList {...props}/>);

    const testData = [
        {
            "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/1.json",
            "id": 1,
            "external_id": null,
            "via": {
                "channel": "sample_ticket",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-11-20T05:22:37Z",
            "updated_at": "2021-11-20T05:22:37Z",
            "type": "incident",
            "subject": "Sample ticket: Meet the ticket",
            "raw_subject": "Sample ticket: Meet the ticket",
            "description": "Hi there,\n\nI’m sending an email because I’m having a problem setting up your new product. Can you help me troubleshoot?\n\nThanks,\n The Customer\n\n",
            "priority": "normal",
            "status": "open",
            "recipient": null,
            "requester_id": 1909844122125,
            "submitter_id": 1523617346642,
            "assignee_id": 1523617346642,
            "organization_id": null,
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
                "sample",
                "support",
                "zendesk"
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
        },
        {
            "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/2.json",
            "id": 2,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-11-20T06:22:33Z",
            "updated_at": "2021-11-20T06:22:33Z",
            "type": null,
            "subject": "velit eiusmod reprehenderit officia cupidatat",
            "raw_subject": "velit eiusmod reprehenderit officia cupidatat",
            "description": "Aute ex sunt culpa ex ea esse sint cupidatat aliqua ex consequat sit reprehenderit. Velit labore proident quis culpa ad duis adipisicing laboris voluptate velit incididunt minim consequat nulla. Laboris adipisicing reprehenderit minim tempor officia ullamco occaecat ut laborum.\n\nAliquip velit adipisicing exercitation irure aliqua qui. Commodo eu laborum cillum nostrud eu. Mollit duis qui non ea deserunt est est et officia ut excepteur Lorem pariatur deserunt.",
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
                "est",
                "incididunt",
                "nisi"
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
        },
        {
            "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/3.json",
            "id": 3,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-11-20T06:22:34Z",
            "updated_at": "2021-11-20T06:22:34Z",
            "type": null,
            "subject": "excepteur laborum ex occaecat Lorem",
            "raw_subject": "excepteur laborum ex occaecat Lorem",
            "description": "Exercitation amet in laborum minim. Nulla et veniam laboris dolore fugiat aliqua et sit mollit. Dolor proident nulla mollit culpa in officia pariatur officia magna eu commodo duis.\n\nAliqua reprehenderit aute qui voluptate dolor deserunt enim aute tempor ad dolor fugiat. Mollit aliquip elit aliqua eiusmod. Ex et anim non exercitation consequat elit dolore excepteur. Aliqua reprehenderit non culpa sit consequat cupidatat elit.",
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
                "amet",
                "labore",
                "voluptate"
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
        },
        {
            "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/4.json",
            "id": 4,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-11-20T06:22:34Z",
            "updated_at": "2021-11-20T06:22:34Z",
            "type": null,
            "subject": "ad sunt qui aute ullamco",
            "raw_subject": "ad sunt qui aute ullamco",
            "description": "Sunt incididunt officia proident elit anim ullamco reprehenderit ut. Aliqua sint amet aliquip cillum minim magna consequat excepteur fugiat exercitation est exercitation. Adipisicing occaecat nisi aliqua exercitation.\n\nAute Lorem aute tempor sunt mollit dolor in consequat non cillum irure reprehenderit. Nulla deserunt qui aliquip officia duis incididunt et est velit nulla irure in fugiat in. Deserunt proident est in dolore culpa mollit exercitation ea anim consequat incididunt. Mollit et occaecat ullamco ut id incididunt laboris occaecat qui.",
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
                "laborum",
                "mollit",
                "proident"
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
        },
        {
            "url": "https://zccstudentskartik.zendesk.com/api/v2/tickets/5.json",
            "id": 5,
            "external_id": null,
            "via": {
                "channel": "api",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-11-20T06:22:35Z",
            "updated_at": "2021-11-20T06:22:35Z",
            "type": null,
            "subject": "aliquip mollit quis laborum incididunt",
            "raw_subject": "aliquip mollit quis laborum incididunt",
            "description": "Pariatur voluptate laborum voluptate sunt ad magna exercitation nulla. In in Lorem minim dolor laboris reprehenderit ad Lorem. Cupidatat laborum qui mollit nostrud magna ullamco. Tempor nisi ex ipsum fugiat dolor proident qui consectetur anim sunt. Dolore consectetur in ex esse et aliqua fugiat enim Lorem ea Lorem incididunt. Non amet elit pariatur commodo labore officia esse anim. In do mollit commodo nulla ullamco culpa cillum incididunt.\n\nEt nostrud aute fugiat voluptate tempor ad labore in elit et sunt. Enim quis nulla eu ut sit. Pariatur irure officia occaecat non dolor est excepteur anim incididunt commodo ea cupidatat minim excepteur. Cillum proident tempor laborum amet est ipsum ipsum aliqua sit sunt reprehenderit fugiat aliqua ea.",
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
                "consectetur",
                "mollit",
                "sit"
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
        },
    ];
  

    wrapper.setState({loading: false, data: testData, show: false, ticketid:''});
   
    expect(wrapper.find('BootstrapTableContainer').prop('pagination')).toBeTruthy(); 
  });
  
});
