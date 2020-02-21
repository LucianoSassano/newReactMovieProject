import React from 'react'
import NavBar from '../components/NavBar'
import MovieContent from '../components/MoviesContent'

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    

    render(){
        return(
        <>
        
        <NavBar />
        <h1>home</h1>
        <MovieContent/>
        </>
        )
    }
}

export default Home