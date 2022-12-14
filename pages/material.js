import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import React, {useState} from 'react';
import Image from "next/image";
import {useLocalStorage} from './useLocalStorage'


const Material = () => {
    const [value, setValue] = useLocalStorage("value","");
    

    return(
        <div className="App">
            <Layout></Layout>
            <header className="App-header"></header>
        </div>

    );
}
export default Material;