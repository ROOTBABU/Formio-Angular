import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'formio-demo';
  jsonForm = {
    components: [
      {
        "input": false,
        "key": "columns1",
        "tableView": false,
        "label": "Columns",
        "type": "columns",
        "columns": [
          {
            "components": [
              {
                type: 'textfield',
                label: 'FirstName',
                key: 'firstName',
                validate: {
                  "required": true,
                  "minLength": 2,
                  "maxLength": 10,
                  "pattern": "^[a-zA-Z0-9]{1,10}$",
                  "custom": "",
                  "customPrivate": false
                },
                input: true
              }
            ],
            "width": 6,
            "offset": 0,
            "push": 0,
            "pull": 0,
            "size": "md"
          },
          {
            "components": [
              {
                type: 'textfield',
                label: 'LastName',
                key: 'lastName',
                validate: {
                  "required": true,
                  "minLength": 2,
                  "maxLength": 10,
                  "pattern": "^[a-zA-Z0-9]{1,10}$",
                  "custom": "",
                  "customPrivate": false
                },
                input: true
              },
            ],
            "width": 6,
            "offset": 0,
            "push": 0,
            "pull": 0,
            "size": "md"
          }
        ],
        "validate": {
          "required": false,
          "custom": "",
          "customPrivate": false,
          "strictDateValidation": false,
          "multiple": false,
          "unique": false
        },
      
      
      },
      {
        type: 'email',
        label: 'Email',
        validate: {
          "required": true,
          "minLength": 4,
          "maxLength": 20,
          "pattern": "",
          "custom": "",
          "customPrivate": false
        },
        key: 'email',
        input: true
      },
      {
        type: 'password',
        label: 'Password',
        validate: {
          "required": true,
          "minLength": 7,
          "maxLength": 14,
          "pattern": "",
          "custom": "",
          "customPrivate": false
        },
        key: 'password',
        input: true
      },
      {
        type: 'radio',
        inline: true,
        values: [
          {
            "label": "male",
            "value": "male",
            "shortcut": ""
          },
          {
            "label": "female",
            "value": "female",
            "shortcut": ""
          }
        ],
        label: 'Gender',
        key: "gender",
        input: true,
        customClass: ""
      },

      {
        type: 'button',
        disableOnInvalid: true,
        action: 'submit',
        label: 'Submit',
        theme: 'primary',
        customClass: ""
      }
    ]
  }
  onSubmit(submission: any) {
    console.log(submission);
  }

}
