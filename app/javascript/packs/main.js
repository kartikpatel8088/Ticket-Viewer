// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Importing modules for Bootstrap, third party libraries react-bootstrap-table2
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

document.addEventListener('DOMContentLoaded', () => {
  

  ReactDOM.render(
   <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>,

    document.body.appendChild(document.createElement('div')),
  )
})
