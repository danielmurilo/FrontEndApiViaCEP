import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Endereco } from './interfaces/endereco';
import { ViacepApiService } from './services/viacep.api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buscacepForm: FormGroup = this.fb.group({
    cep: ['', [Validators.required]]
  })

  endereco!: Endereco

  constructor(
    private fb: FormBuilder,
    private viacepService: ViacepApiService,
    private snackBar: MatSnackBar
  ) {}

  procurarCEP(){
    let cep = this.buscacepForm.get('cep')?.value
    this.viacepService.procurarCEP(cep).subscribe(
      (json) => {
        this.endereco = json
      }
    )
  }
}

