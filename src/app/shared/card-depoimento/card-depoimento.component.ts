import { Component, Input } from '@angular/core';
import { Depoimento } from '../../core/types/types';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrl: './card-depoimento.component.scss'
})
export class CardDepoimentoComponent {
  @Input() depoimento!: Depoimento;
}
