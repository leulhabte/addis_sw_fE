import React from 'react'
import Navbar from "../components/Navbar";
import Grid from "../components/Grid";
import GlobalStyle from "../styles/globalStyles";

export default function Home(): JSX.Element {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Grid />
        </>
    )
}
