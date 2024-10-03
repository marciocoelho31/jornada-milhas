import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuscaService } from '../../core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBuscaComponent {
  constructor(
    public dialog: MatDialog, 
    public formBuscaService: FormBuscaService
  ) {}

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
