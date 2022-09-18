import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';
import { Cep } from 'src/app/models/cep';
import { IStudent } from 'src/app/models/student';
import { CepService } from 'src/app/services/cep.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.scss'],
})

export class FormStudentComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'Este campo é obrigatório';

  constructor(private formBuilder: FormBuilder, private http: HttpClient,
    private studentService: StudentService, private cepService: CepService,
    private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.createForm();
  }

  public student: IStudent = {} as IStudent;
  public cep:Cep|undefined = {} as Cep;

  success = 'Salvo com sucesso!';
  action = 'fechar';

  countrySelected = [
    {
      value: 'Brasil',
      viewValue: 'Brasil'
    },
  ];

  createForm() {
    let emailregex: RegExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let phoneregex: RegExp =
      /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;
    let nameregex: RegExp = /^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/;
    let postalcode: RegExp = /^(\d{0,5}|\d{5}\d{0,3})$/;
    let numberRegex: RegExp = /^\d+$/;
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(nameregex)]],
      phone: [null, [Validators.required, Validators.pattern(phoneregex)]],
      email: [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      fee: [null, [Validators.required, Validators.min(10.0)]],
      postalcode: [null, [Validators.required, Validators.pattern(postalcode)]],
      street: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      country: [null, Validators.required],
      number: [null, [Validators.required, Validators.pattern(numberRegex)]]
    });
  }

  get phone() {
    return this.formGroup.get('phone') as FormControl;
  }

  get postalcode() {
    return this.formGroup.get('postalcode') as FormControl;
  }

  get street() {
    return this.formGroup.get('street') as FormControl;
  }

  get city() {
    return this.formGroup.get('city') as FormControl;
  }

  get state() {
    return this.formGroup.get('state') as FormControl;
  }

  get country() {
    return this.formGroup.get('country') as FormControl;
  }

  checkInUseEmail(control: { value: string }) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    return new Observable((observer) => {
      setTimeout(() => {
        let result =
          db.indexOf(control.value) !== -1 ? { alreadyInUse: true } : null;
        observer.next(result);
        observer.complete();
      }, 4000);
    });
  }

  getErrorEmail() {
    return this.formGroup.get('email')?.hasError('required')
      ? 'Este campo é obrigatório'
      : this.formGroup.get('email')?.hasError('pattern')
      ? 'Não é um endereço de e-mail válido'
      : this.formGroup.get('email')?.hasError('alreadyInUse')
      ? 'Este endereço de e-mail já está em uso'
      : '';
  }

  getErrorName() {
    return this.formGroup.get('name')?.hasError('required')
      ? 'Este campo é obrigatório'
      : this.formGroup.get('name')?.hasError('pattern')
      ? 'Não é um nome válido'
      : '';
  }

  getErrorFee() {
    return this.formGroup.get('fee')?.hasError('required')
      ? 'Este campo é obrigatório'
      : this.formGroup.get('fee')?.hasError('min')
      ? 'Mensalidade mínima de R$10.00'
      : '';
  }

  getErrorPhone() {
    return this.formGroup.get('phone')?.hasError('required')
      ? 'Este campo é obrigatório'
      : this.formGroup.get('phone')?.hasError('pattern')
      ? 'Não é um número de telefone válido'
      : '';
  }

  getErrorNumber() {
    return this.formGroup.get('number')?.hasError('required')
      ? 'Este campo é obrigatório'
      : this.formGroup.get('number')?.hasError('pattern')
      ? 'Não é um número de endereço válido'
      : '';
  }

  public async findPostalCode(){
    this.cep = await this.cepService.getViaCep(this.student.postalCode);
    if(this.cep){
      this.student.street = this.cep.logradouro
      this.student.city = this.cep.localidade
      this.student.state = this.cep.uf
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

  public async postStudent(){
    try{
        await this.studentService.postStudent(this.formGroup.getRawValue());
        this.formGroup.reset();
        this.openSnackBar(this.success, this.action);
      }
    catch(e:any){
      this.openSnackBar('Error', this.action);
      console.log('error');
      console.log(this.student);
    }
  }

}
