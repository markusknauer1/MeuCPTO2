import React, { useState } from 'react'
import AlterarInfo from '../.././../../Images/pen.svg'

export default function Modal() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="AlterarInfo">
        <img src={AlterarInfo} alt="" />
      </button>

      {modal && (
        <div className="modalAltObservacoes">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modalAltObservacoes-content">
            <h2 className="titleModal">
              Alterar Observação
              <hr className="hrTitleModal" />
            </h2>

            <input
              className="fDescObservaçoes"
              placeholder="Nova Observação"
              type="text"
              id="fname"
              name="fname"
            ></input>

            <textarea
              className="fObsObservaçoes"
              placeholder="Observações"
              type="text"
              id="fname"
              name="fname"
              row="none"
              maxLength="500"
            ></textarea>

            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
            <button onClick={toggleModal} className="gravar-modal">
              Salvar Registro
            </button>
          </div>
        </div>
      )}
    </>
  )
}
