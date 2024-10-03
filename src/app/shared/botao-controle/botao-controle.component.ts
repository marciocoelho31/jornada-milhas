import { Component, Input } from '@angular/core';
import { FormBuscaService } from '../../core/services/form-busca.service';

@Component({
  selector: 'app-botao-controle',
  templateUrl: './botao-controle.component.html',
  styleUrl: './botao-controle.component.scss'
})
export class BotaoControleComponent {
  @Input() operacao: string = '';
  @Input() controle: string = '';
  @Input() icone: string = '';
  @Input() alt: string = '';

  constructor(public formBuscaService: FormBuscaService) { }

}
