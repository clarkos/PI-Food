import React from 'react'
import { useSelector } from 'react-redux'
import Head from '../../../Styles/Head'


const NoResultsSearch = () => {
    const reference = useSelector(state => state.reference)

    return (
        <Head>

            <h1>No {reference} recipes found </h1>
        </Head>
    )
}

export default NoResultsSearch
