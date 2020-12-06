import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EncomendasService } from '../core/encomendas.service';
import { Encomenda } from '../shared/models/encomendas'

@Component({

  templateUrl: './encomendas.component.html',
  styleUrls: ['./encomendas.component.css']
})
export class EncomendasComponent implements OnInit {

  opcoes: string[] = ['Bolo', 'Salgado', 'Doce']

  cadastro!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private encomendasService: EncomendasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cadastro = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(256)]],
      telefone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      tipoEncomenda: ['', [Validators.required]],
      descricao: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(550)]],
      quantidade: ['', [Validators.required, Validators.min(1), Validators.max(10)]]

    })
  }

  submit(): void {
    this.cadastro.markAllAsTouched();
    if (this.cadastro.invalid) {
      return alert('Campo requerido nao preenchido ou preenchido de forma incorreta')
    }

    const encomenda = this.cadastro.getRawValue() as Encomenda;
    this.save(encomenda);

  }

  reiniciarForm(): void {
    this.cadastro.reset();
  }

  save(encomenda: Encomenda): void {
    this.encomendasService.save(encomenda).subscribe({
      next: encomenda => console.log('Saved with success', encomenda),
      error: err => console.log('Error', err)
    });
    this.router.navigateByUrl('modal');
  }

}