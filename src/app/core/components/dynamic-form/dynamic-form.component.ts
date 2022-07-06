import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicForm } from 'src/app/shared/models/dynamic-form.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  // type!: 'text' | 'select';
  dynamicForm!: DynamicForm;
  myForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      dynamicField: null,
    });
    this.dynamicForm = {
      type: 'text',
      label: 'This is a label',
    };
  }
}
