# Zendesk-Coding-Challenge

* A GUI application of Zendesk-Coding-Challenge that is written in Node JS(React) as Frontend and Ruby on Rails as Backend. The app makes HTTP requests to the Zendesk API to retrieve account tickets displayed in either a summary table or full details format.

## Standard Tests Implemented 
### Snapshot Testing
* App Component
* Home Componet
* TicketList Component before data is loaded
* TicketList Component after data is loaded
* TicketDetails Component before data is loaded
* TicketDetails Component after data is loaded

### Unit Testing
* TicketList Component contains table element
* TicketList Component has pagination attribute of table element
* TicketDetails Component title contains ticket id and subject
* TicketDetails Component body contains ticket description
* TicketDetails Component contains Info element

## Technologies Used: 
* Frontend - React
* Backend - Ruby on Rails
* Responsive - Bootstrap 
* Version Control - Github 
* Features - Third party libraries like moment, react-bootstrap-table

## Prerequisite Installations
* Node JS(React) - 17.0.2
* Rails - 6.1.4.1
* Ruby - 2.6.3


## Please Install Ruby, Rails and React via MacOS Brew.
### Ruby Installation
```
$ brew install ruby
$ rvm install "ruby-2.6.3"
```

### Rails Installation	
```
$ sudo gem install rails
```

### Node Installation
```
$ brew install node
```

## How to run (MacOS)
1. Download the repository to your local machine with the following code.
```
$ gh repo clone kartikpatel8088/Ticket-Viewer
```
#### OR
```
$ git clone https://github.com/kartikpatel8088/Ticket-Viewer
```

2. Navigate to the repository directory in your MacOS Terminal or equivalent command line application.

3. Module Configurations
```
$ bundle install 
$ npm i
```

4. Run the application with the following command in the terminal.
```
$ rails s
```

5. For GUI Application: Open the web-browser 
```
$ https://localhost:3000/
```

6. For Snapshot Testing and Unit Testing: Open a new tab in terminal and keep the server on.
```
$ yarn test
```

7. To stop rails server
```
$ press control + 'C'
```