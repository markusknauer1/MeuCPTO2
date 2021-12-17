import React, { useState } from 'react'
import '../../../../styles/SubMenuPages/SubMenuTipoDeObservação/modal-tiposDeobservaçoes/modalNovaQuestao.css'

export default function ModalNovaQuestao() {
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
        Nova Questão
      </button>

      {modal && (
        <div className="modalNovaQuestao">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modalPadrao-content">
            <h2 className="titleModal">Nova Questão</h2>
            <hr className="hrTitleModal1" />

            <input
              className="NQCod"
              placeholder="Cód"
              type="text"
              id="fname"
              name="fname"
            ></input>

            <input
              className="NQDescricao"
              placeholder="Descrição"
              type="text"
              id="fname"
              name="fname"
            ></input>

            <input
              className="NQPontos"
              placeholder="Nota"
              type="text"
              id="fname"
              name="fname"
            ></input>

            <textarea
              className="NQObservacao"
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
