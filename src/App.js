import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Search from './Search'
import ListBooks from './ListBooks'



class App extends React.Component
{ 

    state = {
        allBooks : []
      } 
    componentDidMount() 
    {
      BooksAPI.getAll()
        .then((allBooks)=> { 
        this.setState(() => ({allBooks}))
      });
    }

    render() {
        return (
          <div>
            <Route exact path='/' render={() => (
              <ListBooks
                allBooks ={this.state.allBooks}
                />
            )} />
            <Route path='/search' render={({ history }) => (
              <Search
              />
            )} />
          </div>
        )

    }
}

export default App