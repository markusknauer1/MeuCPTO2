import React, { useState } from 'react'
import '../../../../styles/pages/SubMenuPages/SubMenuTipoDeObservação/modal-tiposDeobservaçoes/modalNovoGrupoDeQuestoes.css'

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
      <button onClick={toggleModal} className="buttonModalPadrao">
        Novo Grupo
      </button>

      {modal && (
        <div className="modalNovoGrupoDeQuestoes">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modalNovoGrupoDeQuestoes-content">
            <h2 className="titleModal">Novo Grupo De Questões</h2>

            <input
              className="NGQCod"
              placeholder="Cód"
              type="text"
              id="fname"
              name="fname"
            ></input>

            <input
              className="NGQDescricao"
              placeholder="Descrição"
              type="text"
              id="fname"
              name="fname"
            ></input>

            <textarea
              className="NGQObservacao"
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
