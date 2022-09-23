import { async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  isEdit: boolean = false;
  id: number;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,
    private studentService: StudentService, private cepService: CepService,
    private _snackBar: MatSnackBar, private activeRouter: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.createForm();
    this.fillStudentForm();
  }

  public student: IStudent = {} as IStudent;
  public cepApi:Cep|undefined = {} as Cep;

  success = 'Salvo com sucesso!';
  action = 'fechar';



  createForm() {
    let emailRegex: RegExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let phoneRegex: RegExp =
      /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;
    let nameRegex: RegExp = /^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/;
    let cepRegex: RegExp = /^(\d{0,5}|\d{5}\d{0,3})$/;
    let numberRegex: RegExp = /^\d+$/;
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(nameRegex)]],
      phone: [null, [Validators.required, Validators.pattern(phoneRegex)]],
      email: [null, [Validators.required, Validators.pattern(emailRegex)]],
      fees: [null, [Validators.required, Validators.min(10.0)]],
      cep: [null, [Validators.required, Validators.pattern(cepRegex)]],
      street: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      country: (this.student.country = 'Brasil'),
      number: [null, [Validators.required, Validators.pattern(numberRegex)]],
      district: [null, [Validators.required, Validators.pattern(nameRegex)]]
    });
  }

  get phone() {
    return this.formGroup.get('phone') as FormControl;
  }

  get cep() {
    return this.formGroup.get('cep') as FormControl;
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

  get district() {
    return this.formGroup.get('district') as FormControl;
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
      }, 3000);
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

  getErrorFees() {
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

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

  public async findPostalCode(){
    this.cepApi = await this.cepService.getViaCep(this.student.cep);
    if(this.cepApi){
      this.student.street = this.cepApi.logradouro
      this.student.city = this.cepApi.localidade
      this.student.state = this.cepApi.uf
      this.student.district = this.cepApi.bairro
    }
  }

  public async saveStudent() {
    try {
      if (this.isEdit) {
        await this.studentService.updateStudent(this.id, this.student);
        this.formGroup.reset();
        this.openSnackBar(this.success, this.action);
      } else {
        await this.studentService.postStudent(this.student);
        this.formGroup.reset();
        this.openSnackBar(this.success, this.action);
      }
    } catch (e: any) {
      console.log('error');
      console.log(this.student);
      this.openSnackBar('Error', this.action);
    }
    setTimeout(() => {
      this.router.navigateByUrl('/main/students')
    }, 3000);
  }

  private fillStudentForm() {
    if (this.activeRouter.snapshot.paramMap.get('id')) {
      this.isEdit = true;
      this.id = Number.parseInt(this.activeRouter.snapshot.paramMap.get('id')!);
      this.studentService.findStudentsById(this.id).subscribe({
        next: (res) => {
          this.formGroup.patchValue(res);
        },
        error: (ex) => {
          console.log(ex);
        },
      });
    }
  }

  delete() {
    if (confirm('Você está prestes a apagar esse registro, esta ação não pode ser desfeita!'))
     {
      this.studentService.delete(this.id).subscribe({
        next: (n) => {
          this.openSnackBar('Registro apagado com sucesso', 'fechar');
          this.router.navigateByUrl('/main/students');
        },
        error: (e) => {
          alert('erro aconteceu: ' + e)
        }
      });
    } else {
      alert('cancelado!')
    }
  }
}
