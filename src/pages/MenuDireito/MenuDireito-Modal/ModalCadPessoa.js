import { useState } from 'react'
import '../../../styles/modalPageSidebarDireita.css'

export default function ModalPessoa() {
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
        Nova Pessoa
      </button>

      {modal && (
        <div className="modalPessoa">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modalPessoa-content">
            <h2 className="titleModal">Nova Pessoa</h2>
            <hr className="hrTitleModal" />

            <div className="formCadModal">
              <input
                className="fcadastroPessoa1"
                placeholder="Nome"
                type="text"
                id="fname"
                autoComplete="none"
              />

              <select className="fcadastroPessoa2">
                <option value="">Sexo</option>
                <option value="">Feminino</option>
                <option value="">Masculino</option>
              </select>

              <input className="fcadastroPessoa3" id="date" type="date" />

              <select name="Função" className="fcadastroPessoa4" id="fcontexto">
                <option value="">Função - Teste 1</option>
                <option value="">Função - Teste 2</option>
                <option value="">Função - Teste 3</option>
              </select>

              <input
                className="fcadastroPessoa5"
                placeholder="E-Mail"
                type="text"
                id="mail"
                autoComplete="none"
              />
              <input
                className="fcadastroPessoa6"
                placeholder="Telefone"
                type="text"
                id="fname"
                autoComplete="none"
              />
              <input
                className="fcadastroPessoa7"
                placeholder="Celular"
                type="text"
                id="fname"
                autoComplete="none"
              />
              <input
                className="fcadastroPessoa8"
                placeholder="CEP"
                type="text"
                id="cep"
                name="cep"
                autoComplete="none"
              />
              <button className="consultaCep" type="button">
                <i class="fas fa-search"></i>
              </button>
              <input
                className="fcadastroPessoa9"
                placeholder="Endereço"
                type="text"
                id="fname"
                autoComplete="none"
              />
              <input
                className="fcadastroPessoa10"
                placeholder="Número"
                type="text"
                id="fname"
                autoComplete="none"
              />
              <input
                className="fcadastroPessoa11"
                placeholder="Complemento"
                type="text"
                id="fname"
                autoComplete="none"
              />
              <input
                className="fcadastroPessoa12"
                placeholder="Bairro"
                type="text"
                id="fname"
                autoComplete="none"
              />
              <input
                className="fcadastroPessoa13"
                placeholder="Cidade"
                type="text"
                id="fname"
                autoComplete="none"
              />
              <input
                className="fcadastroPessoa14"
                placeholder="Estado"
                type="text"
                id="fname"
                autoComplete="none"
              />
              <textarea
                className="fcadastroPessoa15"
                placeholder="Observações"
                type="text"
                id="fname"
                name="fname"
                row="none"
                maxLength="500"
                autoComplete="none"
              />
              <input
                className="fcadastroPessoa16"
                placeholder="Senha"
                type="password"
                id="fname"
                autoComplete="none"
              />
              <input
                className="fcadastroPessoa17"
                placeholder="Confirmar Senha"
                type="password"
                id="fname"
                autoComplete="none"
              />
              <input
                className="fcadastroPessoa18"
                placeholder="Grupo"
                type="text"
                id="fname"
                autoComplete="none"
              />
            </div>
            <div className="InputAuthorization1">
              <label>
                <input
                  className="CheckAcess1"
                  type="checkbox"
                  defaultChecked={false}
                />

                <span className="checkText">Acesso ao APP</span>
              </label>{' '}
            </div>
            <br />
            <div className="InputAuthorization2">
              <label>
                <input
                  className="CheckAcess2"
                  type="checkbox"
                  defaultChecked={false}
                />
                <span className="checkText">Acesso Web</span>
              </label>
            </div>

            <button className="close-modal" onClick={toggleModal}>
              X
            </button>

            <button
              onClick={toggleModal}
              type="submit"
              className="gravar-modal"
            >
              Salvar Registro
            </button>
          </div>
        </div>
      )}
    </>
  )
}
