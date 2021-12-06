import React, { useState } from 'react'
import '../../../styles/modalPageSidebarDireita.css'

export default function ModalObservacoes() {
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
      <button onClick={toggleModal} className="buttonModalPadrao">
        Nova Observação
      </button>

      {modal && (
        <div className="modalObservacoes">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modalPadrao-content">
            <h2 className="titleModal">Nova Observação</h2>
            <hr className="hrTitleModal4" />

            <input
              className="fDescObservaçoes"
              placeholder="Nova Observação"
              type="text"
              id="fname"
              name="fname"
              autoComplete="none"
            ></input>

            <textarea
              className="fObsObservaçoes"
              placeholder="Observações"
              type="text"
              id="fname"
              name="fname"
              row="none"
              maxLength="500"
              autoComplete="none"
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
