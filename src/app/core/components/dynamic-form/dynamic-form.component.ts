import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicForm } from 'src/app/shared/models/dynamic-form.model';
import Inputs from 'dynamic-form.json';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  // type!: 'text' | 'select';
  dynamicForm: DynamicForm[] = Object.assign(Inputs.inputs);
  myForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({});

    this.dynamicForm.forEach((formItem) => {
      this.myForm.addControl(
        formItem.controlName,
        this.fb.control(
          formItem.value,
          formItem.required ? Validators.required : null
        )
      );
    });
  }
  onSubmit() {
    console.log(this.myForm.value);
  }
  change(event: any) {
    console.log(event.target.value);

    !event.target.checked
      ? this.myForm.get('checkbox')?.setErrors({ incorrect: true })
      : null;
  }
  hello(event: any) {
    console.log(event.target.value);
  }
}
