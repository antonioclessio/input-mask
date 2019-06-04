import { Component, Renderer2, ElementRef, ViewChild, OnInit } from '@angular/core';
import { StringLibrary } from './string.library';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ StringLibrary ]
})
export class AppComponent implements OnInit {

  form: FormGroup;
  showError: boolean = false;
  showSuccess: boolean = false;

  @ViewChild('cpf') elCPF: ElementRef;
  @ViewChild('phone') elPhone: ElementRef;

  constructor(
    private stringLibrary: StringLibrary,
    private formBuilder: FormBuilder,
    private renderer: Renderer2
  ) {
    this.form = this.formBuilder.group({
      CPF: [null, Validators.required],
      Phone: [null, Validators.required],
      Email: [null, [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.configureMask();
  }

  configureMask(): void {
    this.renderer.listen(this.elCPF.nativeElement, 'keyup', (response: KeyboardEvent) => {
      const MASK: any[] = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
      this.setMask(response.target, MASK);
    });

    this.renderer.listen(this.elPhone.nativeElement, 'keyup', (response: KeyboardEvent) => {
      const MASK: any[] = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
      this.setMask(response.target, MASK);
    });
  }

  setMask(element: any, mask: any): void {
    element.value = this.stringLibrary.applyInputMask(element.value, mask);
  }

  submit(): void {
    if (!this.form.valid) {
      this.showError = true;
      this.showSuccess = false;
      return;
    }
    
    this.showSuccess = true;
    this.showError = false;
  }
}
