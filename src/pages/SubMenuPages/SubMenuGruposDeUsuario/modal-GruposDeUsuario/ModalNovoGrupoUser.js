import React, { useState } from 'react'
import '../../../../styles/SubMenuPages/SubMenuGruposUsuarios/pages-GruposDeUsuario/modalNovoGrupoUser.css'

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
        <div className="ModalNovoGrupoUser">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modalPadrao-content">
            <h2 className="titleModal">Novo Grupo De Usuários</h2>

            <input
              className="NGUDesc"
              placeholder="Descrição"
              type="text"
              id="fname"
              name="fname"
            ></input>

            <textarea
              className="NGUObs"
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
