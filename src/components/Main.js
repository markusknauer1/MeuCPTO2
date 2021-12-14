import styled from 'styled-components'

export const ContainerPage = styled.div`
  position: fixed;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 10%;
  width: 60%;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  z-index: 0;
  @media screen and (max-width: 820px) {
    position: fixed;
    bottom: 20%;
    display: flex;
    left: 0;
    width: 100%;
    height: 60vh;
    background-color: rgb(255, 255, 255);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0px;
    z-index: 9;
  }
  @media screen and (max-width: 500px) {
    position: fixed;
    bottom: 20%;
    display: fixed;
    left: 0;
    width: 100%;
    height: 60%;
    background-color: rgb(255, 255, 255);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0px;
    z-index: 9;
  }
`
export const TitlePage1 = styled.h5`
  position: absolute;
  top: 20%;
  left: 10%;
  border-radius: 20px;
  display: block;
  font: clamp(0.2em, 0.2em + 0.9vw, 0.9em) BalooBhaina2-Medium;
  color: #adadad;
  z-index: 1;
  @media screen and (max-width: 820px) {
    position: fixed;
    top: 16%;
    left: 5%;
    border-radius: 20px;
    display: block;
    font: clamp(0.2em, 0.2em + 1vw, 1em) BalooBhaina2-Medium;
    color: #fff;
    z-index: 1;
  }
  @media screen and (max-width: 500px) {
    position: fixed;
    top: 16%;
    left: 5%;
    border-radius: 20px;
    display: block;
    font-family: BalooBhaina2-SemiBold;
    font-size: clamp(0.2em, 0.2em + 1.5vw, 1.5em);
    color: #fff;
    z-index: 1;
  }
`
export const TitlePage2 = styled.h5`
  position: absolute;
  top: 22%;
  left: 10%;
  font: clamp(0.1em, 0.1em + 2vw, 2em) BalooBhaina2-bold;
  border-style: none;
  background: transparent;
  color: #172d52;
  z-index: 2;
  @media screen and (max-width: 820px) {
    position: fixed;
    top: 20%;
    left: 5%;
    font: clamp(0.4em, 0.4em + 2vw, 2em) BalooBhaina2-bold;
    border-style: none;
    background: transparent;
    color: #172d52;
    z-index: 2;
  }
  @media screen and (max-width: 500px) {
    position: absolute;
    top: 1%;
    left: 5%;
    border-radius: 20px;
    display: block;
    font-family: BalooBhaina2-SemiBold;
    font-size: clamp(0.4em, 0.4em + 2vw, 2em);
    color: #172d52;
    z-index: 2;
  }
`
export const TitlePage3 = styled.h5`
  position: absolute;
  top: 28%;
  left: 10%;
  font: clamp(0.01em, 0.01em + 2vw, 2em) BalooBhaina2-Regular;
  border-style: none;
  background: transparent;
  color: #172d52;
  z-index: 2;
  @media screen and (max-width: 820px) {
    position: fixed;
    top: 24%;
    left: 5%;
    font: clamp(0.6em, 0.6em + 1.5vw, 1.5em) BalooBhaina2-Medium;
    border-style: none;
    background: transparent;
    color: #172d52;
    z-index: 2;
  }
  @media screen and (max-width: 500px) {
    position: fixed;
    top: 24%;
    left: 5%;
    font: clamp(0.6em, 0.6em + 1.5vw, 1.5em) BalooBhaina2-Medium;
    border-style: none;
    background: transparent;
    color: #172d52;
    z-index: 2;
  }
`

export const TitlePage4 = styled.h5`
  position: absolute;
  top: 22%;
  left: 10%;
  font: clamp(0.1em, 0.1em + 2vw, 2em) BalooBhaina2-bold;
  border-style: none;
  background: transparent;
  color: #172d52;
  z-index: 2;
  letter-spacing: -1px;
  @media screen and (max-width: 820px) {
    position: fixed;
    top: 20%;
    left: 5%;
    font: clamp(0.4em, 0.4em + 2vw, 2em) BalooBhaina2-bold;
    border-style: none;
    background: transparent;
    color: #172d52;
    z-index: 2;
  }
  @media screen and (max-width: 500px) {
    position: fixed;
    top: 20%;
    left: 5%;
    font: clamp(0.4em, 0.4em + 2vw, 2em) BalooBhaina2-bold;
    border-style: none;
    background: transparent;
    color: #172d52;
    z-index: 2;
  }
`
