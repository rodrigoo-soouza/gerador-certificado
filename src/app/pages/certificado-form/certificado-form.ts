import { Component } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css',
})
export class CertificadoFormComponent {

  certificado: Certificado = {
    listaAtividades: [],
    nome: ''
  }
  atividade: string = '';

  campoInvalido(control: NgModel){
    return control.invalid && control.touched
  }

  formValido(){
    return this.certificado.listaAtividades.length > 0 && this.certificado.nome.length > 0;
  }

  adicionarAtividade(){
    this.certificado.listaAtividades.push(this.atividade);
    this.atividade = '';
  }

  excluirAtividade(index: number){
    this.certificado.listaAtividades.splice(index, 1);
  }

  submit(){
    if (!this.formValido()) {
      return;
    }
    console.log(this.certificado)
  }
}

