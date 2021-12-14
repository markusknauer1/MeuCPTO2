import styled from 'styled-components'

export const AreaSidebar = styled.div`
  position: fixed;
  display: block;
  width: 10%;
  height: 100%;
  background-color: transparent;
  justify-content: center;
  .containerBackground {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 300px;
    float: left;
    top: 20%;
    left: -170px;
    width: 30%;
    height: 60%;
    z-index: -1;
  }
  .containerMenu {
    position: absolute;
    display: flex;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }
  ul {
    position: relative;
    text-align: center;
    justify-content: center;
    top: 10%;
    height: 100%;
  }
  li {
    list-style: none;
    width: 100%;
    margin-bottom: 30px;
    &:focus-within {
      filter: invert(0%) sepia(79%) saturate(2476%) hue-rotate(86deg);
    }
    &:hover {
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      transition: 0.3s;
      filter: invert(0%) sepia(79%) saturate(2476%) hue-rotate(86deg);
    }
  }

  @media screen and (max-width: 820px) {
    position: fixed;
    display: block;
    width: 100%;
    height: 20%;
    bottom: 6%;
    background-color: transparent;
    justify-content: center;
    .containerBackground {
      display: none;
    }

    ul {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      top: 10%;
      padding-top: 5%;
      left: 0;
      border-radius: 20px;
      background-color: transparent;
    }
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0%;
      left: 0;
      border-radius: 20px;
      background-color: transparent;
      &:focus-within {
        filter: invert(0%) sepia(79%) saturate(2476%) hue-rotate(86deg);
      }
      &:hover {
        filter: invert(0%) sepia(79%) saturate(2476%) hue-rotate(86deg);
      }
    }
  }
`
export const MenuProfileDireita = styled.div`
  position: fixed;
  display: fixed;
  align-items: center;
  top: 26%;
  left: 75%;
  width: 20%;
  height: 50%;
  border-radius: 20px;
  li {
    justify-content: center;
    align-items: center;
    list-style: none;
    text-align: center;
    &:focus-within {
      color: rgb(255, 255, 255);
      background-color: #0b9e82;
    }
    &:hover {
      color: rgb(255, 255, 255);
      background-color: #0b9e82;
      transition: 0.6s;
    }
  }
  /* nav ul li  */
  .tttlBtnNav1 {
    width: 100%;
    height: 12%;
    position: absolute;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    top: 0px;
    font: clamp(0.01em, 0.01em + 1.4vw, 2em) BalooBhaina2-Bold;
    background-color: #fff;
    color: rgb(0, 0, 0);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
  }
  .tttlBtnNav1:hover {
    color: rgb(255, 255, 255);
    background-color: #0b9e82;
    transition: 0.6s;
  }
  .tttlBtnNav2 {
    position: absolute;
    top: 16%;
    width: 100%;
    height: 12%;
    font: clamp(0.01em, 0.01em + 1.4vw, 2em) BalooBhaina2-Bold;
    padding-top: 1%;
    background-color: #fff;
    color: rgb(0, 0, 0);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .tttlBtnNav2:hover {
    color: rgb(255, 255, 255);
    background-color: #0b9e82;
    transition: 0.6s;
  }
  .tttlBtnNav3 {
    position: absolute;
    top: 32%;
    left: 0;
    width: 48%;
    height: 12%;
    font: clamp(0.01em, 0.01em + 1.4vw, 2em) BalooBhaina2-Bold;
    padding-top: 1%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #fff;
    color: rgb(0, 0, 0);
    border: none;
  }
  .tttlBtnNav3:hover {
    color: rgb(255, 255, 255);
    background-color: #0b9e82;
    transition: 0.6s;
  }
  .tttlBtnNav4 {
    position: absolute;
    top: 32%;
    right: 0px;
    width: 48%;
    height: 12%;
    font: clamp(0.01em, 0.01em + 1.4vw, 2em) BalooBhaina2-Bold;
    padding-top: 1%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #fff;
    color: rgb(0, 0, 0);
    border: none;
  }
  .tttlBtnNav4:hover {
    color: rgb(255, 255, 255);
    background-color: #0b9e82;
    transition: 0.6s;
  }
  .tttlBtnNav5 {
    position: absolute;
    top: 48%;
    left: 0px;
    width: 48%;
    height: 12%;
    font: clamp(0.01em, 0.01em + 1.4vw, 2em) BalooBhaina2-Bold;
    padding-top: 1%;
    border: none;
    margin-right: 10px;
    background-color: #fff;
    color: rgb(0, 0, 0);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .tttlBtnNav5:hover {
    color: rgb(255, 255, 255);
    background-color: #0b9e82;
    transition: 0.6s;
  }
  .tttlBtnNav6 {
    position: absolute;
    top: 48%;
    right: 0px;
    width: 48%;
    height: 12%;
    font: clamp(0.01em, 0.01em + 1.4vw, 2em) BalooBhaina2-Bold;
    padding-top: 1%;
    border: none;
    margin-bottom: 5px;
    background-color: #fff;
    color: rgb(0, 0, 0);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .tttlBtnNav6:hover {
    color: rgb(255, 255, 255);
    background-color: #0b9e82;
    transition: 0.6s;
  }
  .tttlBtnNav7 {
    position: absolute;
    top: 64%;
    left: 0px;
    width: 48%;
    height: 12%;
    font: clamp(0.01em, 0.01em + 1.4vw, 2em) BalooBhaina2-Bold;
    padding-top: 1%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
    background-color: #fff;
    color: rgb(0, 0, 0);
    border: none;
  }
  .tttlBtnNav7:hover {
    color: rgb(255, 255, 255);
    background-color: #0b9e82;
    transition: 0.6s;
  }
  .tttlBtnNav8 {
    position: absolute;
    top: 64%;
    right: 0px;
    width: 48%;
    height: 12%;
    font: clamp(0.01em, 0.01em + 1.4vw, 2em) BalooBhaina2-Bold;
    padding-top: 1%;
    border: none;
    margin-bottom: 10px;
    background-color: #fff;
    color: rgb(0, 0, 0);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .tttlBtnNav8:hover {
    color: rgb(255, 255, 255);
    background-color: #0b9e82;
    transition: 0.6s;
  }
  .tttlBtnNav9 {
    position: absolute;
    top: 81%;
    width: 100%;
    height: 12%;
    font: clamp(0.01em, 0.01em + 1.4vw, 2em) BalooBhaina2-Bold;
    padding-top: 1%;
    border: none;
    background-color: #fff;
    color: rgb(0, 0, 0);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .tttlBtnNav9:hover {
    color: rgb(255, 255, 255);
    background-color: #0b9e82;
    transition: 0.6s;
  }
  .tttlBtnNav1:focus-within {
    color: rgb(255, 255, 255);
    background-color: #0b9e82;
    transition: 0.6s;
  }
  .tttlBtnNav1:hover {
    color: rgb(255, 255, 255);
    background-color: #0b9e82;
    transition: 0.6s;
  }
  @media screen and (max-width: 820px) {
    position: fixed;
    display: fixed;
    align-items: center;
    top: 20%;
    left: 70%;
    width: 30%;
    height: 60%;
    border-radius: 0px;
    background: #e4e4e4;
    li {
      margin-top: 10%;
      justify-content: center;
      align-items: center;
      list-style: none;
      text-align: center;
      &:focus-within {
        color: rgb(255, 255, 255);
        background-color: #0b9e82;
      }
      &:hover {
        color: rgb(255, 255, 255);
        background-color: #0b9e82;
        transition: 0.6s;
      }
    }
    /* nav ul li  */
    .tttlBtnNav1 {
      width: 90%;
      height: 8%;
      position: absolute;
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
      top: 16%;
      left: 5%;
      font-size: clamp(0.01em, 0.01em + 1.6vw, 2em);
      font-family: BalooBhaina2-Bold;
      background-color: #fff;
      color: rgb(0, 0, 0);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      text-decoration: none;
    }
    .tttlBtnNav1:hover {
      color: rgb(255, 255, 255);
      background-color: #0b9e82;
      transition: 0.6s;
    }
    .tttlBtnNav2 {
      position: absolute;
      top: 26%;
      width: 90%;
      left: 5%;
      height: 8%;
      font-size: clamp(0.01em, 0.01em + 1.6vw, 2em);
      font-family: BalooBhaina2-Bold;
      padding-top: 1%;
      background-color: #fff;
      color: rgb(0, 0, 0);
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .tttlBtnNav2:hover {
      color: rgb(255, 255, 255);
      background-color: #0b9e82;
      transition: 0.6s;
    }
    .tttlBtnNav3 {
      position: absolute;
      top: 36%;
      left: 5%;
      width: 44%;
      height: 8%;
      font-size: clamp(0.01em, 0.01em + 1.6vw, 2em);
      font-family: BalooBhaina2-Bold;
      padding-top: 1%;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background-color: #fff;
      color: rgb(0, 0, 0);
      border: none;
    }
    .tttlBtnNav3:hover {
      color: rgb(255, 255, 255);
      background-color: #0b9e82;
      transition: 0.6s;
    }
    .tttlBtnNav4 {
      position: absolute;
      top: 36%;
      right: 5%;
      width: 44%;
      height: 8%;
      font-size: clamp(0.01em, 0.01em + 1.6vw, 2em);
      font-family: BalooBhaina2-Bold;
      padding-top: 1%;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background-color: #fff;
      color: rgb(0, 0, 0);
      border: none;
    }
    .tttlBtnNav4:hover {
      color: rgb(255, 255, 255);
      background-color: #0b9e82;
      transition: 0.6s;
    }
    .tttlBtnNav5 {
      position: absolute;
      top: 46%;
      left: 5%;
      width: 44%;
      height: 8%;
      font-size: clamp(0.01em, 0.01em + 1.6vw, 2em);
      font-family: BalooBhaina2-Bold;
      padding-top: 1%;
      border: none;
      margin-right: 10px;
      background-color: #fff;
      color: rgb(0, 0, 0);
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .tttlBtnNav5:hover {
      color: rgb(255, 255, 255);
      background-color: #0b9e82;
      transition: 0.6s;
    }
    .tttlBtnNav6 {
      position: absolute;
      top: 46%;
      right: 5%;
      width: 44%;
      height: 8%;
      font-size: clamp(0.01em, 0.01em + 1.6vw, 2em);
      font-family: BalooBhaina2-Bold;
      padding-top: 1%;
      border: none;
      margin-bottom: 5px;
      background-color: #fff;
      color: rgb(0, 0, 0);
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .tttlBtnNav6:hover {
      color: rgb(255, 255, 255);
      background-color: #0b9e82;
      transition: 0.6s;
    }
    .tttlBtnNav7 {
      position: absolute;
      top: 56%;
      left: 5%;
      width: 44%;
      height: 8%;
      font-size: clamp(0.01em, 0.01em + 1.6vw, 2em);
      font-family: BalooBhaina2-Bold;
      padding-top: 1%;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-bottom: 10px;
      background-color: #fff;
      color: rgb(0, 0, 0);
      border: none;
    }
    .tttlBtnNav7:hover {
      color: rgb(255, 255, 255);
      background-color: #0b9e82;
      transition: 0.6s;
    }
    .tttlBtnNav8 {
      position: absolute;
      top: 56%;
      right: 5%;
      width: 44%;
      height: 8%;
      font-size: clamp(0.01em, 0.01em + 1.6vw, 2em);
      font-family: BalooBhaina2-Bold;
      padding-top: 1%;
      border: none;
      margin-bottom: 10px;
      background-color: #fff;
      color: rgb(0, 0, 0);
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .tttlBtnNav8:hover {
      color: rgb(255, 255, 255);
      background-color: #0b9e82;
      transition: 0.6s;
    }
    .tttlBtnNav9 {
      position: absolute;
      top: 66%;
      left: 5%;
      width: 90%;
      height: 8%;
      font-size: clamp(0.01em, 0.01em + 1.6vw, 2em);
      padding-top: 1%;
      border: none;
      background-color: #fff;
      color: rgb(0, 0, 0);
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .tttlBtnNav9:hover {
      color: rgb(255, 255, 255);
      background-color: #0b9e82;
      transition: 0.6s;
    }
    .tttlBtnNav1:focus-within {
      color: rgb(255, 255, 255);
      background-color: #0b9e82;
      transition: 0.6s;
    }
    .tttlBtnNav1:hover {
      color: rgb(255, 255, 255);
      background-color: #0b9e82;
      transition: 0.6s;
    }
  }

  @media screen and (max-width: 620px) {
    display: none;
  }
`
