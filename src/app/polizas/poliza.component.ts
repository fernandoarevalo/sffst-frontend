import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Poliza } from "./../models/polizas";
import { PolizaService } from "./poliza.service";

declare function toast(): any;

@Component({
  selector: 'app-poliza',
  templateUrl: './poliza.component.html',
  styleUrls: ['./poliza.component.css']
})
export class PolizaComponent implements OnInit {

  private polizaForm: FormGroup;
  private poliza: Poliza;
  private tiposPoliza: any;

  /**
   * PolizaComponent constructor   
   * @param formBuilder 
   * @param polizaService 
   */
  constructor(private formBuilder: FormBuilder,
    private polizaService: PolizaService) { }

  /**
   * NgOnInit implementation
   */
  ngOnInit() {
    this.form();
    this.getTipoPolizas();
  }

  getTipoPolizas(): void {
    this.polizaService.getTipoPolizas().subscribe(data => {
      this.tiposPoliza = data;
    });
  }

  /**
   * Set TipoPoliza value
   * @param $event 
   */
  setValorTipoPoliza(valorPoliza: number) {
    this.polizaForm.controls['valorPoliza'].setValue(valorPoliza);
  }

  /**
   * Add new poliza, call api
   */
  addPoliza(): void {
    if (this.polizaForm.valid) {
      this.poliza = undefined;
      this.poliza = new Poliza();
      this.poliza.cedula = this.polizaForm.controls['cedula'].value;
      this.poliza.nombre = this.polizaForm.controls['nombre'].value;
      this.poliza.tipo_poliza = this.polizaForm.controls['tipoPoliza'].value;
      this.poliza.numero_poliza = this.polizaForm.controls['valorPoliza'].value;

      this.polizaService.postPoliza(this.poliza)
        .subscribe(poliza => {
          this.form();
          toast();
        });
    }
  }

  /**
   * Set new form
   */
  form() {
    this.polizaForm = this.formBuilder.group({
      cedula: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      tipoPoliza: new FormControl('', [Validators.required]),
      valorPoliza: new FormControl(0, [Validators.required]),
    });
    this.polizaForm.get('valorPoliza').disable();
  }
}
