import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/menu/menu.component';
import {  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [MenuComponent,ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  registrationForm: FormGroup;

  cities: string[] = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla'];



  constructor(private formBuilder: FormBuilder) { 
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: [''],
      address2: [''],
      city: ['', Validators.required],
      state: [''],
      zip: [''],
      agree: [false, Validators.requiredTrue]
    });
  }
  onSubmit(): void {
    if (this.registrationForm.invalid) {
      // Mostrar mensaje de advertencia si el formulario es inválido
      alert('Por favor, complete todos los campos requeridos correctamente.');
      return;
    }

    alert('Formulario enviado:\n' + JSON.stringify(this.registrationForm.value, null, 2));
  }

  onReset(): void {
    // Resetear el formulario
    this.registrationForm.reset();
  }


}
