import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cep } from 'src/app/models/cep';
import { ITeacher } from 'src/app/models/teacher';
import { CepService } from 'src/app/services/cep.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-form-teacher',
  templateUrl: './form-teacher.component.html',
  styleUrls: ['./form-teacher.component.scss'],
})
export class FormTeacherComponent implements OnInit {
  formGroup: FormGroup;
  titleAlert: string = 'Este campo é obrigatório';
  isEdit: boolean = false;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private teacherService: TeacherService,
    private cepService: CepService,
    private _snackBar: MatSnackBar,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.fillTeacherForm();
  }

  public teacher: ITeacher = {} as ITeacher;
  public cep: Cep | undefined = {} as Cep;

  success = 'Salvo com sucesso!';
  action = 'fechar';

  createForm() {
    let emailregex: RegExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let phoneregex: RegExp =
      /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;
    let nameregex: RegExp = /^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/;
    let cep: RegExp = /^(\d{0,5}|\d{5}\d{0,3})$/;
    let numberRegex: RegExp = /^\d+$/;
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(nameregex)]],
      phone: [null, [Validators.required, Validators.pattern(phoneregex)]],
      email: [null, [Validators.required, Validators.email]],
      salary: [null, [Validators.required, Validators.min(10.0)]],
      cep: [null, [Validators.required, Validators.pattern(cep)]],
      street: [null, Validators.required],
      district: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      country: (this.teacher.country = 'Brasil'),
      number: [null, [Validators.required, Validators.pattern(numberRegex)]],
    });
  }

  get phone() {
    return this.formGroup.get('phone') as FormControl;
  }

  get Cep() {
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

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  public async findCep() {
    this.cep = await this.cepService.getViaCep(this.teacher.cep);
    if (this.cep) {
      this.teacher.street = this.cep.logradouro;
      this.teacher.city = this.cep.localidade;
      this.teacher.state = this.cep.uf;
      this.teacher.district = this.cep.bairro;
    }
  }

  public async saveTeacher() {
    try {
      if (this.isEdit) {
        await this.teacherService.updateTeacher(this.id, this.teacher);
        this.formGroup.reset();
        this.openSnackBar(this.success, this.action);
      } else {
        await this.teacherService.postTeacher(this.teacher);
        this.formGroup.reset();
        this.openSnackBar(this.success, this.action);
      }
    } catch (e: any) {
      console.log('error');
      console.log(this.teacher);
      this.openSnackBar('Error', this.action);
    }
    setTimeout(() => {
      this.router.navigate(['/main/teachers'])
    }, 4000);
  }

  private fillTeacherForm() {
    if (this.activeRouter.snapshot.paramMap.get('id')) {
      this.isEdit = true;
      this.id = Number.parseInt(this.activeRouter.snapshot.paramMap.get('id')!);
      this.teacherService.findTeacherById(this.id).subscribe({
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
      this.teacherService.delete(this.id).subscribe({
        next: (n) => {
          this.openSnackBar('Registro apagado com sucesso', 'fechar');
          this.router.navigateByUrl('/main/teachers');
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
