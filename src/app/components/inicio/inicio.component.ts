import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  edad = 25;
  peso = 65;
  altura = 170;
  sexo = 'Masculino'

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cambiarAltura(event: any) {
    //console.log(event.target.value);
    this.altura = event.target.value;
  }

  masculino() {
    this.sexo = 'Masculino';
  }

  femenino() {
    this.sexo = 'Femenino';
  }

  calcularBMI() {
    //Vamos a realizar los calculos
    const BMI = this.peso / Math.pow(this.altura / 100, 2);
    console.log(BMI.toFixed(1))

    //Redireccionamiento
    this.router.navigate(['/resultado', BMI.toFixed(1)])
  }
}
