import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import React, { useState } from 'react'; 
import {useLocalStorage} from './useLocalStorage'

const Index = () => {

  const [value, setValue] = useLocalStorage("value","")

  function logValue() {
    console.log(value);
  }
  /*function setSubject (n){
    try {
      //setValue(n);
      window.localStorage.setItem("value",n);
    }catch (error) {
      console.error(error);
    }
    console.log(window.localStorage.getItem("value"));
  }*/

  return(
    <div className="App">
      <Layout></Layout>
      <header className="App-header">
        <Image
          src="/images/2130-removebg-preview.png"
          height={400} // Desired size with correct aspect ratio
          width={400} // Desired size with correct aspect ratio
          alt="ojo"
        />
        <h1 className="title3">SELECCIONE EL RAMO QUE DESEA BUSCAR</h1>
        <label className="custom-select" for="styledSelect1">
        
          <select 
            value={value}
            onChange={(e) => {
            setValue(e.target.value);
            }}
            id="styledSelect1" name="options"
            onClick={logValue}
            >
              <option aria-disabled>CLICK AQUI PARA VER RAMOS</option>
              <optgroup label="PRIMER SEMESTRE">
              <option value="1">ÁLGEBRA PARA INGENIERÍA</option>
              <option value="2">GEOMETRÍA PARA INGENIERÍA</option>
              </optgroup>
              
              <optgroup label="SEGUNDO SEMESTRE">
                  <option value="3">ÁLGEBRA LINEAL PARA INGENIERÍA</option>
                  <option value="4">CÁLCULO EN UNA VARIABLE</option>
              </optgroup>
              
              <optgroup label="TERCER SEMESTRE">
                  <option value="5">FÍSICA: MECÁNICA</option>
                  <option value="6"> 	ECUACIONES DIFERENCIALES PARA INGENIERÍA</option>
                  <option value="7">CÁLCULO EN VARIAS VARIABLES</option>
                  <option value="8">ESTRUCTURA DE DATOS Y ALGORITMOS</option>
              </optgroup>
              
              <optgroup label="CUARTO SEMESTRE">
                  <option value="9">FÍSICA: ONDAS Y ELECTROMAGNETISMO</option>
                  <option value="10">MÉTODOS NUMÉRICOS PARA INGENIERÍA</option>
                  <option value="11">CÁLCULO EN UNA VARIABLE</option>
                  <option value="12">FÍSICA: MECÁNICA</option>
                  <option value="13">ECUACIONES DIFERENCIALES PARA INGENIERÍA</option>
                  <option value="14">ESTRUCTURAS DISCRETAS</option>
              </optgroup>
              
              <optgroup label="QUINTO SEMESTRE">
                  <option value="9">ARQUITECTURA DE COMPUTADORES </option>
                  <option value="10">TEORÍA DE AUTÓMATAS</option>
                  <option value="11">DISEÑO Y ANÁLISIS DE ALGORITMOS</option>
              </optgroup>
              
              <optgroup label="SEXTO SEMESTRE">
                  <option value="9">PROGRAMACIÓN EN PARADIGMAS FUNCIONAL Y PARALELO</option>
              </optgroup>

              <optgroup label="SEPTIMO SEMESTRE">
                  <option value="9">COMUNICACIONES</option>
                  <option value="10">INTELIGENCIA ARTIFICIAL</option>
              </optgroup>

              <optgroup label="OCTAVO SEMESTRE">
                  <option value="9">REDES</option>
                  <option value="10">TALLER DE INGENIERÍA DE SOFTWARE</option>
              </optgroup>

              <optgroup label="NOVENO SEMESTRE">
                  <option value="9">SISTEMAS DISTRIBUIDOS</option>
              </optgroup>
          </select>
        </label>
        <a
          className="btn-neonb" 
          href="material" 
          rel="noopener noreferrer"
          >
            <span id="spansb1"></span>
            <span id="spansb2"></span>
            <span id="spansb3"></span>
            <span id="spansb4"></span>
            🔍︎
        </a>

        <a className="btn-neon" href="/respuesta" rel="noopener noreferrer">
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>
          QUIENES SOMOS
        </a>
      </header>
      <footer>
            <a className="title2" href="https://siveducmd.uach.cl/" target="_blank">
                Si deseas que la pagina te rediriga a la pagina oficial de SIVEDUCMD Haz click Aqui!
            </a>
        </footer>
    </div>
  );
};
export default Index;