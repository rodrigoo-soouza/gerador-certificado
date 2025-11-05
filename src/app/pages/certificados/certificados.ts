import { Component } from '@angular/core';

import { ItemCertificado } from "../../_components/item-certificado/item-certificado";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecondaryButton, RouterLink],
  templateUrl: './certificados.html',
  styleUrls: ['./certificados.css'],
})
export class CertificadosComponent {

}
