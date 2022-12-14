import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'


const Home = () => {
  return (
    <>
        <Main />
        <Row title='Up Coming' fetchURL={requests.requestUpComing}/>
        <Row title='Popular' fetchURL={requests.requestPopular}/>
        <Row title='Horror' fetchURL={requests.requestHorror}/>
        <Row title='Top Rated' fetchURL={requests.requestTopRated}/>

    </>
  )
}

export default Home