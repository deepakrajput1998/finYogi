export let personalDetailJson = {
    //CAR Insurance
    login : {
      jsonData: {
        metaData: {
          countryProductId: 1,
          metaTags: [
            {
              tag: 'title',
              attributes: null,
              value: 'International Tele-consultation Policybazaar',
            },
            {
              tag: 'meta',
              attributes: [
                {
                  key: 'name',
                  value: 'keywords',
                },
                {
                  key: 'content',
                  value: '',
                },
              ],
            },
            {
              tag: 'meta',
              attributes: [
                {
                  key: 'name',
                  value: 'description',
                },
                {
                  key: 'content',
                  value: '',
                },
              ],
            },
            {
              tag: 'link',
              attributes: [
                {
                  key: 'rel',
                  value: 'canonical',
                },
                {
                  key: 'href',
                  value:
                    'https://www.policybazaar.ae/international-tele-consultation/',
                },
              ],
            },
          ],
        },
        userForm: {
          key: '1',
          name: 'Login Form',
          mobileTitle: 'Hi, Welcome Back!',
          sections: [
            {
              key: 'section1',
              name: '',
              forms: [
                {
                  rows: [ 
                    {
                    fields: [
                      {
                        fieldId: 'email',
                        fieldType: 'input',
                        label: 'Email',
                        info: 'Email',
                        displayFormat: '',
                        attributes: {
                          type: 'email',
                          required: true,
                          disabled: false,
                          placeholder: 'Email',
                          keyboardType: 'email-address',
                          width: '100%',
                        },
                        validations: [
                          {
                            type: 'required',
                            errorMessage: 'Email is required',
                          },
                          {
                            type: 'regex',
                            pattern:
                              '^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
                            errorMessage: 'Email is invalid',
                          },
                        ],
                        constraints: null,
                      },
                    ],
                  },
                    {
                    fields: [
                      {
                        fieldId: 'password',
                        fieldType: 'input',
                        label: 'Password',
                        info: 'Password',
                        displayFormat: '',
                        attributes: {
                          type: 'password',
                          required: true,
                          disabled: false,
                          placeholder: 'Enter Password',
                          keyboardType: 'default',
                          width: '100%',
                        },
                        validations: [
                          {
                            type: 'required',
                            errorMessage: 'Email is required',
                          },
                          {
                            type: 'regex',
                            pattern:
                              '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$',
                            errorMessage: 'Password is invalid',
                          },
                        ],
                        constraints: null,
                      },
                    ],
                  },
                ],
                  multiple: false,
                  constraints: null,
                },
              ],
            },
          ],
          nextButton: {
            label: 'Login',
            action: {
              method: 'PUT',
              url: 'user/enquiry',
            },
            params: [],
          },
        },
        data: null,
      },
    },
    5: {
      jsonData: {
        metaData: {
          countryProductId: 5,
        },
        userForm: {
          key: '1',
          name: '<p>Smartest investment and life plans in UAE</p>',
          mobileTitle: 'Personal Details',
          headerText: 'Smartest investment and life plans in UAE',
          sections: [
            {
              key: 'section1',
              name: '',
              forms: [
                {
                  rows: [
                    {
                      fields: [
                        {
                          fieldId: 'gender',
                          trackingId: 'gender',
                          fieldType: 'selection',
                          label: 'Gender',
                          info: 'Please select your Gender',
                          fetch: true,
                          fetchOptions: {
                            url: `${Configs.BASE_URL}/user/genders`,
                            idKey: 'id',
                            valueKey: 'name',
                            async: false,
                          },
                          attributes: {
                            required: true,
                            notFormMember: false,
                          },
                          validations: [
                            {
                              type: 'required',
                              errorMessage: 'Please select your gender.',
                            },
                          ],
                          constraints: null,
                          options: [
                            {
                              name: 'Male',
                              id: 1,
                              img: '',
                            },
                            {
                              name: 'Female',
                              id: 2,
                              img: '',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'name',
                          fieldType: 'input',
                          label: 'Your Name',
                          info: 'your name',
                          displayFormat: '',
                          attributes: {
                            keyboardType: 'default',
                            required: true,
                            disabled: false,
                            placeholder: 'Your Name',
                            width: '100%',
                            maxlength: 70,
                          },
                          validations: [
                            {
                              type: 'required',
                              errorMessage: 'Name is required',
                            },
                            {
                              type: 'regex',
                              pattern: '^[a-zA-Z]+(\\s{0,1}[a-zA-Z ])*$',
                              errorMessage: 'Name is invalid',
                            },
                          ],
                          constraints: null,
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'smoker',
                          trackingId: 'smoker',
                          fieldType: 'selection',
                          label: 'Do You Smoke?',
                          info: 'Do You Smoke?',
                          attributes: {
                            placeholder: 'Do You Smoke?',
                            notFormMember: false,
                            required: true,
                            defaultError: 'required',
                          },
                          isSearchable: true,
                          fetch: true,
                          fetchOptions: {
                            url: `${Configs.BASE_URL}/user/smoker_meta`,
                            param: null,
                            idKey: 'id',
                            valueKey: 'name',
                            async: false,
                          },
                          validations: [
                            {
                              type: 'required',
                              errorMessage: 'error',
                            },
                          ],
                          constraints: null,
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'email',
                          fieldType: 'input',
                          label: 'Email',
                          info: 'Email',
                          displayFormat: '',
                          attributes: {
                            type: 'email',
                            required: true,
                            disabled: false,
                            placeholder: 'Email',
                            keyboardType: 'email-address',
                            width: '100%',
                          },
                          validations: [
                            {
                              type: 'required',
                              errorMessage: 'Email is required',
                            },
                            {
                              type: 'regex',
                              pattern:
                                '^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
                              errorMessage: 'Email is invalid',
                            },
                          ],
                          constraints: null,
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'income',
                          fieldType: 'input',
                          label: 'Monthly Income(AED)',
                          info: 'Monthly income',
                          displayFormat: '',
                          attributes: {
                            keyboardType: 'numeric',
                            required: true,
                            disabled: false,
                            placeholder: 'Monthly Income',
                            minlength: 1,
                            maxlength: 12,
                            pattern: 'numeric',
                            width: '100%',
                          },
                          validations: [
                            {
                              type: 'required',
                              errorMessage: 'Monthly income is required',
                            },
                            {
                              type: 'regex',
                              pattern: '^[0-9]+$',
                              errorMessage: 'Monthly income is invalid',
                            },
                            {
                              type: 'range',
                              min: 1000,
                              max: 100000,
                              errorMessage:
                                'Monthly income should be between 1000 to 100,000',
                            },
                          ],
                          constraints: null,
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'dateOfBirth',
                          fieldType: 'date',
                          label: 'Date of Birth (DD/MM/YYYY)',
                          info: 'Date of Birth (DD/MM/YYYY)',
                          displayFormat: '',
                          attributes: {
                            keyboardType: 'number-pad',
                            required: true,
                            disabled: false,
                            placeholder: 'DD/MM/YYYY',
                            type: 'text',
                            width: '100%',
                          },
                          validations: [
                            {
                              type: 'required',
                              errorMessage: 'Date of birth is required',
                            },
                            {
                              type: 'regex',
                              pattern: '^[0-9]{2}/{1}[0-9]{2}/[0-9]{4}',
                              errorMessage: 'Date of birth is invalid',
                            },
                            {
                              type: 'date',
                              pattern: 'DD/MM/YYYY',
                              errorMessage: 'Date of birth is invalid',
                            },
                            {
                              type: 'range',
                              subType: 'age',
                              min: 18,
                              max: 76,
                              errorMessage: 'Age should be between 18 to 75',
                            },
                          ],
                          constraints: null,
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'mobileNumber',
                          fieldType: 'mobile',
                          label: 'Mobile Number',
                          info: 'mobile number',
                          displayFormat: '',
                          fieldIcon:
                            'https://static.pbcdn.ae/pbuae/images/input-phone-field.svg',
                          attributes: {
                            type: 'text',
                            isCountryFixed: true,
                            countryCode: '+971',
                            required: true,
                            disabled: true,
                            placeholder: 'Mobile Number',
                            maxlength: 9,
                            pattern: 'numeric',
                            keyboardType: 'phone-pad',
                          },
                          validations: [
                            {
                              type: 'required',
                              errorMessage: 'Mobile number is required',
                            },
                            {
                              type: 'regex',
                              pattern: '(5){1}(0|2|4|5|6|8){1}[0-9]{7}$',
                              errorMessage: 'Mobile number is invalid',
                            },
                          ],
                          constraints: null,
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'field1',
                          fieldType: 'compound',
                          fields: [
                            {
                              attributes: {
                                type: 'text',
                                required: false,
                                disabled: false,
                                placeholder: '',
                                pattern: 'altNumber',
                                width: '80%',
                              },
                              constraints: null,
                              displayFormat: '',
                              fetchOptions: {
                                url:
                                  `${Configs.BASE_URL}` +
                                  '/user/countries/calling_codes',
                                async: false,
                                idKey: 'id',
                                param: [],
                                valueKey: 'name',
                              },
                              fieldId: 'altMobileNumber',
                              fieldType: 'altMobile',
                              info: '',
                              label: 'Get updates on WhatsApp',
                              validations: [],
                            },
                            {
                              fieldId: 'isWhatsappEnabled',
                              fieldType: 'switchButton',
                              displayFormat: '',
                              attributes: {
                                required: false,
                                notFormMember: false,
                                width: '20%',
                              },
                              validations: [],
                              constraints: null,
                            },
                          ],
                        },
                      ],
                    },
  
                    {
                      fields: [
                        {
                          fieldId: 'maritalStatus',
                          trackingId: 'maritalStatus',
                          fieldType: 'dropdown',
                          label: 'Marital Status (optional)',
                          info: 'Marital Status',
                          attributes: {
                            placeholder: 'Select Marital Status',
                            notFormMember: false,
                            required: false,
                            defaultError: 'Marital status is not required',
                          },
                          isSearchable: true,
                          fetch: true,
                          validations: [],
                          constraints: null,
                          fetchOptions: {
                            url: `${Configs.BASE_URL}/user/marital_status`,
                            param: null,
                            idKey: 'id',
                            valueKey: 'name',
                            async: false,
                          },
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'employmentType',
                          trackingId: 'employmentType',
                          fieldType: 'dropdown',
                          label: 'Employment Type (optional)',
                          info: 'Employment Type',
                          attributes: {
                            placeholder: 'Select Employment Type',
                            notFormMember: false,
                            required: false,
                            defaultError: 'Employment Type is not required',
                          },
                          isSearchable: true,
                          fetch: true,
                          validations: [],
                          constraints: null,
                          fetchOptions: {
                            url: `${Configs.BASE_URL}/user/employment_types`,
                            param: null,
                            idKey: 'id',
                            valueKey: 'name',
                            async: false,
                          },
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'homeCountry',
                          trackingId: 'homeCountry',
                          fieldType: 'dropdown',
                          label: 'Nationality (optional)',
                          info: 'Nationality Status',
                          attributes: {
                            placeholder: 'Select Nationality',
                            notFormMember: false,
                            required: false,
                            defaultError: 'Nationality is not required',
                          },
                          isSearchable: true,
                          fetch: true,
                          validations: [],
                          constraints: null,
                          fetchOptions: {
                            url: `${Configs.BASE_URL}/user/nationalities`,
                            param: null,
                            idKey: 'id',
                            valueKey: 'name',
                            async: false,
                          },
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'languageId',
                          trackingId: 'languageId',
                          fieldType: 'dropdown',
                          label: 'Language (optional)',
                          info: 'Language Id',
                          attributes: {
                            placeholder: 'Select Language Id',
                            notFormMember: false,
                            required: false,
                            defaultError: 'Language id is not required',
                          },
                          isSearchable: true,
                          fetch: true,
                          validations: [],
                          constraints: null,
                          fetchOptions: {
                            url: `${Configs.BASE_URL}/user/languages`,
                            param: null,
                            idKey: 'id',
                            valueKey: 'name',
                            async: false,
                          },
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'professionType',
                          trackingId: 'professionType',
                          fieldType: 'dropdown',
                          label: 'Profession Type (optional)',
                          info: 'Profession Type',
                          attributes: {
                            placeholder: 'Profession Type (optional)',
                            notFormMember: false,
                            required: false,
                            defaultError: 'Profession Type is not required',
                          },
                          isSearchable: true,
                          fetch: true,
                          validations: [],
                          constraints: null,
                          fetchOptions: {
                            url: `${Configs.BASE_URL}/user/profession_types`,
                            param: null,
                            idKey: 'id',
                            valueKey: 'name',
                            async: false,
                          },
                        },
                      ],
                    },
                  ],
                  multiple: false,
                  constraints: null,
                },
              ],
            },
          ],
          nextButton: {
            label: 'Save',
            action: {
              method: 'PUT',
              url: `${Configs.BASE_URL}/user/enquiry`,
              urlParams: [],
            },
            events: [],
          },
          showIndividualFields: false,
        },
      },
    },
    2: {
      jsonData: {
        metaData: {
          countryProductId: 2,
        },
        userForm: {
          key: '1',
          name: 'Personal Details',
          mobileTitle: 'Personal Details',
          sections: [
            {
              key: 'section1',
              name: '',
              forms: [
                {
                  rows: [
                    {
                      fields: [
                        {
                          fieldId: 'name',
                          fieldType: 'input',
                          label: 'Your Name',
                          info: 'your name',
                          displayFormat: '',
                          attributes: {
                            keyboardType: 'default',
                            required: true,
                            disabled: false,
                            placeholder: 'Your Name',
                            width: '100%',
                          },
                          validations: [
                            {
                              type: 'required',
                              errorMessage: 'Name is required',
                            },
                            {
                              type: 'regex',
                              pattern: '^[a-zA-Z]+(\\s{0,1}[a-zA-Z ])*$',
                              errorMessage: 'Name is invalid',
                            },
                          ],
                          constraints: null,
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'email',
                          fieldType: 'input',
                          label: 'Email',
                          info: 'Email',
                          displayFormat: '',
                          attributes: {
                            keyboardType: 'email-address',
                            type: 'email',
                            required: true,
                            disabled: false,
                            placeholder: 'Email',
                            width: '100%',
                          },
                          validations: [
                            {
                              type: 'required',
                              errorMessage: 'Email is required',
                            },
                            {
                              type: 'regex',
                              pattern:
                                '^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
                              errorMessage: 'Email is invalid',
                            },
                          ],
                          constraints: null,
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'mobileNumber',
                          fieldType: 'mobile',
                          label: 'Mobile Number',
                          info: 'mobile number',
                          displayFormat: '',
                          attributes: {
                            type: 'text',
                            isCountryFixed: true,
                            countryCode: '+971',
                            required: true,
                            disabled: true,
                            placeholder: 'Mobile Number',
                            maxlength: 9,
                            pattern: 'numeric',
                            keyboardType: 'phone-pad',
                            width: '100%',
                          },
                          validations: null,
                          constraints: null,
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'dateOfBirth',
                          fieldType: 'date',
                          label: 'Date of Birth (DD/MM/YYYY)(Optional)',
                          info: 'Date of Birth (DD/MM/YYYY)(Optional)',
                          displayFormat: '',
                          attributes: {
                            type: 'text',
                            required: false,
                            disabled: false,
                            placeholder: 'DD/MM/YYYY',
                            keyboardType: 'number-pad',
                            width: '100%',
                          },
                          validations: [
                            {
                              type: 'regex',
                              pattern: '^[0-9]{2}/{1}[0-9]{2}/[0-9]{4}',
                              errorMessage: 'Date of birth is invalid',
                            },
                            {
                              type: 'date',
                              pattern: 'DD/MM/YYYY',
                              errorMessage: 'Date of birth is invalid',
                            },
                            {
                              type: 'range',
                              subType: 'age',
                              min: 18,
                              max: 99,
                              errorMessage: 'Age should be between 18 to 99',
                            },
                          ],
                          constraints: null,
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'field1',
                          fieldType: 'compound',
                          fields: [
                            {
                              attributes: {
                                type: 'text',
                                required: true,
                                disabled: false,
                                placeholder: '',
                                pattern: 'altNumber',
                                width: '80%',
                              },
                              constraints: null,
                              displayFormat: '',
                              fetchOptions: {
                                url:
                                  `${Configs.BASE_URL}` +
                                  '/user/countries/calling_codes',
                                async: false,
                                idKey: 'id',
                                param: [],
                                valueKey: 'name',
                              },
                              fieldId: 'altMobileNumber',
                              fieldType: 'altMobile',
                              info: '',
                              label: 'Get updates on WhatsApp',
                              validations: [
                                {
                                  type: 'required',
                                  errorMessage:
                                    'WhatsApp mobile number is required',
                                },
                              ],
                            },
                            {
                              fieldId: 'isWhatsappEnabled',
                              fieldType: 'switchButton',
                              displayFormat: '',
                              attributes: {
                                required: false,
                                notFormMember: false,
                                width: '20%',
                              },
                              validations: [],
                              constraints: null,
                            },
                          ],
                        },
                      ],
                    },
                    // {
                    //   fields: [
                    //     {
                    //       fieldId: 'income',
                    //       fieldType: 'input',
                    //       label: 'Monthly Income',
                    //       info: 'Monthly income',
                    //       displayFormat: '',
                    //       attributes: {
                    //         required: true,
                    //         disabled: false,
                    //         placeholder: 'Monthly Income',
                    //         minlength: 1,
                    //         maxlength: 12,
                    //         pattern: 'numeric',
                    //         keyboardType: 'numeric',
                    //         width: '100%',
                    //       },
                    //       validations: [
                    //         {
                    //           type: 'required',
                    //           errorMessage: 'Monthly income is required',
                    //         },
                    //         {
                    //           type: 'regex',
                    //           pattern: '^[0-9]+$',
                    //           errorMessage: 'Monthly income is invalid',
                    //         },
                    //         {
                    //           type: 'range',
                    //           min: 100,
                    //           max: 999999,
                    //           errorMessage:
                    //             'Monthly income should be between AED 100 to AED 999,999',
                    //         },
                    //       ],
                    //       constraints: null,
                    //     },
                    //   ],
                    // },
                    // {
                    //   fields: [
                    //     {
                    //       fieldId: 'emiratesId',
                    //       fieldType: 'input',
                    //       label: 'Emirates ID Number',
                    //       content: null,
                    //       attributes: {
                    //         required: false,
                    //         disabled: false,
                    //         maxlength: 18,
                    //         pattern: 'emiratesId',
                    //         type: 'emiratesId',
                    //         img: 'https://cdn.policybazaar.ae/tooltip/emirates_id.png',
                    //       },
                    //       validations: [
                    //         {
                    //           type: 'regex',
                    //           pattern: '^784\\d{4}\\d{7}\\d{1}',
                    //           errorMessage: 'Emirates ID is invalid',
                    //         },
                    //         {
                    //           type: 'emiratesId',
                    //           errorMessage: 'Emirates ID is invalid',
                    //           subType: '',
                    //           minDate: '',
                    //         },
                    //         {
                    //           type: 'required',
                    //           errorMessage: 'Emirates ID is required',
                    //         },
                    //       ],
                    //       fieldDataType: 'number',
                    //       defaultValue: null,
                    //       fieldDataTypeId: 2,
                    //       constraints: null,
                    //     },
                    //   ],
                    // },
                    // {
                    //   fields: [
                    //     {
                    //       fieldId: 'designationIdDD',
                    //       fieldDataType: 'number',
                    //       fieldDataTypeId: 2,
                    //       fieldType: 'dropdown',
                    //       label: 'Select your Designation',
                    //       info: 'select designation',
                    //       attributes: {
                    //         placeholder: 'Select designation',
                    //         notFormMember: false,
                    //         required: false,
                    //         defaultError: 'Designation is required',
                    //         maxItems: 8,
                    //       },
                    //       isSearchable: true,
                    //       fetch: true,
                    //       fetchOptions: {
                    //         url: Configs.BASE_URL + '/' + 'user/designations',
                    //         param: null,
                    //         idKey: 'id',
                    //         valueKey: 'name',
                    //         async: false,
                    //       },
                    //       validations: [
                    //         {
                    //           type: 'required',
                    //           errorMessage: 'error',
                    //         },
                    //       ],
                    //       constraints: null,
                    //     },
                    //   ],
                    // },
                    // {
                    //   fields: [
                    //     {
                    //       fieldId: 'designationNameDD',
                    //       fieldType: 'input',
                    //       fieldDataType: 'string',
                    //       fieldDataTypeId: 1,
                    //       label: 'Please enter your Designation',
                    //       info: 'Please enter your Designation',
                    //       attributes: {
                    //         placeholder: 'Please enter your Designation',
                    //         notFormMember: false,
                    //         required: true,
                    //         defaultError: 'Designation is required',
                    //       },
                    //       isSearchable: true,
                    //       fetchOptions: null,
                    //       validations: [
                    //         {
                    //           type: 'required',
                    //           errorMessage: 'error',
                    //         },
                    //       ],
                    //       constraints: {
                    //         equations: [
                    //           {
                    //             equation: 'designationIdDD == 305',
                    //             keys: [
                    //               {
                    //                 type: 'number',
                    //                 key: 'designationIdDD',
                    //               },
                    //             ],
                    //             id: 'eq1',
                    //           },
                    //         ],
                    //         masterEquation: 'eq1',
                    //       },
                    //     },
                    //   ],
                    // },
                    // {
                    //   fields: [
                    //     {
                    //       fieldId: 'currentExperience',
                    //       fieldType: 'monthyear',
                    //       label:
                    //         'Since when have you been employed in the company?',
                    //       info: null,
                    //       content: null,
                    //       attributes: {
                    //         required: false,
                    //         notFormMember: false,
                    //         maxYear: '${CURRENT_YEAR}',
                    //         minYear: '1970',
                    //       },
                    //       validations: [
                    //         {
                    //           type: 'required',
                    //           errorMessage: 'Required',
                    //         },
                    //       ],
                    //       fieldDataType: 'dateString',
                    //       defaultValue: null,
                    //       fieldDataTypeId: 5,
                    //       constraints: null,
                    //     },
                    //   ],
                    // },
                    // {
                    //   fields: [
                    //     {
                    //       fieldId: 'companyEmail',
                    //       fieldType: 'input',
                    //       label: 'Official Email Address',
                    //       info: 'Official Email Address',
                    //       displayFormat: '',
                    //       attributes: {
                    //         keyboardType: 'email-address',
                    //         type: 'email',
                    //         required: false,
                    //         disabled: false,
                    //         placeholder: 'Email',
                    //       },
                    //       validations: [
                    //         {
                    //           type: 'required',
                    //           errorMessage: 'Official Email Address is required',
                    //         },
                    //         {
                    //           type: 'regex',
                    //           pattern:
                    //             '^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
                    //           errorMessage: 'Official Email Address is invalid',
                    //         },
                    //         {
                    //           type: 'omitEmail',
                    //           errorMessage: 'Official Email Address is invalid',
                    //         },
                    //       ],
                    //       constraints: null,
                    //     },
                    //   ],
                    // },
                  ],
                  multiple: false,
                  constraints: null,
                },
              ],
            },
          ],
          nextButton: {
            label: 'Update',
            action: {
              method: 'PUT',
              url: Configs.BASE_URL + '/' + 'user/enquiry',
            },
            params: [],
          },
        },
      },
    },
    //Health
    3: {
      jsonData: {
        metaData: {
          countryProductId: 3,
        },
        userForm: {
          key: '1',
          name: 'Personal Details',
          mobileTitle: 'Personal Details',
          sections: [
            {
              key: 'section1',
              name: '',
              forms: [
                {
                  rows: [
                    {
                      fields: [
                        {
                          fieldId: 'name',
                          fieldType: 'input',
                          label: 'Your Name',
                          info: 'your name',
                          displayFormat: '',
                          attributes: {
                            keyboardType: 'default',
                            required: true,
                            disabled: false,
                            placeholder: 'Your Name',
                            width: '100%',
                          },
                          validations: [
                            {
                              type: 'required',
                              errorMessage: 'Name is required',
                            },
                            {
                              type: 'regex',
                              pattern: '^[a-zA-Z]+(\\s{0,1}[a-zA-Z ])*$',
                              errorMessage: 'Name is invalid',
                            },
                          ],
                          constraints: null,
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'email',
                          fieldType: 'input',
                          label: 'Email',
                          info: 'Email',
                          displayFormat: '',
                          attributes: {
                            type: 'email',
                            required: true,
                            disabled: true,
                            placeholder: 'Email',
                            keyboardType: 'email-address',
                            width: '100%',
                          },
                          validations: [
                            {
                              type: 'required',
                              errorMessage: 'Email is required',
                            },
                            {
                              type: 'regex',
                              pattern:
                                '^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
                              errorMessage: 'Email is invalid',
                            },
                          ],
                          constraints: null,
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'mobileNumber',
                          fieldType: 'input',
                          label: 'Mobile Number',
                          info: 'mobile number',
                          displayFormat: '',
                          attributes: {
                            type: 'text',
                            isCountryFixed: true,
                            countryCode: '+971',
                            required: true,
                            disabled: true,
                            placeholder: 'Mobile Number',
                            maxlength: 9,
                            pattern: 'numeric',
                            keyboardType: 'phone-pad',
                            width: '100%',
                          },
                          validations: [
                            {
                              type: 'required',
                              errorMessage: 'Mobile number is required',
                            },
                            {
                              type: 'regex',
                              pattern: '(5){1}(0|2|4|5|6|8){1}[0-9]{7}$',
                              errorMessage: 'Mobile number is invalid',
                            },
                          ],
                          constraints: null,
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'field1',
                          fieldType: 'compound',
                          fields: [
                            {
                              attributes: {
                                type: 'text',
                                required: true,
                                disabled: false,
                                placeholder: '',
                                pattern: 'altNumber',
                                width: '80%',
                              },
                              constraints: null,
                              displayFormat: '',
                              fetchOptions: {
                                url:
                                  `${Configs.BASE_URL}` +
                                  '/user/countries/calling_codes',
                                async: false,
                                idKey: 'id',
                                param: [],
                                valueKey: 'name',
                              },
                              fieldId: 'altMobileNumber',
                              fieldType: 'altMobile',
                              info: '',
                              label: 'Get updates on WhatsApp',
                              validations: [
                                {
                                  type: 'required',
                                  errorMessage:
                                    'WhatsApp mobile number is required',
                                },
                              ],
                            },
                            {
                              fieldId: 'isWhatsappEnabled',
                              fieldType: 'switchButton',
                              displayFormat: '',
                              attributes: {
                                required: false,
                                notFormMember: false,
                                width: '20%',
                              },
                              validations: [],
                              constraints: null,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'income',
                          fieldType: 'dropdown',
                          label: 'Monthly Income',
                          info: 'Monthly income',
                          displayFormat: '',
                          isSearchable: true,
                          fetch: true,
                          fetchOptions: {
                            url: Configs.BASE_URL + '/' + 'user/salary',
                            param: null,
                            idKey: 'id',
                            valueKey: 'name',
                            async: false,
                          },
                          attributes: {
                            required: true,
                            disabled: false,
                            placeholder: 'Monthly Income',
                            minlength: 1,
                            maxlength: 12,
                            pattern: 'numeric',
                            keyboardType: 'numeric',
                            width: '100%',
                          },
                          validations: [
                            {
                              type: 'required',
                              errorMessage: 'Monthly income is required',
                            },
                            // {
                            //   type: 'regex',
                            //   pattern: '^[0-9]+$',
                            //   errorMessage: 'Monthly income is invalid',
                            // },
                          ],
                          constraints: null,
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'homeCountry',
                          fieldType: 'dropdown',
                          label: 'Nationality (Self)',
                          info: 'select nationality',
                          attributes: {
                            placeholder: 'Select Nationality',
                            notFormMember: false,
                            required: false,
                            defaultError: 'Nationality is required',
                            width: '100%',
                          },
                          isSearchable: true,
                          fetch: true,
                          fetchOptions: {
                            url: Configs.BASE_URL + '/' + 'user/nationalities',
                            param: null,
                            idKey: 'id',
                            valueKey: 'name',
                            async: false,
                          },
                          validations: [
                            {
                              type: 'required',
                              errorMessage: 'error',
                            },
                          ],
                          constraints: null,
                        },
                      ],
                    },
  
                    {
                      fields: [
                        {
                          fieldId: 'city',
                          fieldType: 'dropdown',
                          label: 'City (as per Visa)',
                          info: 'select City',
                          attributes: {
                            placeholder: 'Select City',
                            notFormMember: false,
                            required: true,
                            defaultError: 'City is required',
                            maxItems: 8,
                            width: '100%',
                          },
                          isSearchable: true,
                          fetch: true,
                          fetchOptions: {
                            url: Configs.BASE_URL + '/' + 'user/cities',
                            param: null,
                            idKey: 'id',
                            valueKey: 'name',
                            async: false,
                          },
                          validations: [
                            {
                              type: 'required',
                              errorMessage: 'error',
                            },
                          ],
                          constraints: null,
                        },
                      ],
                    },
  
                    {
                      fields: [
                        {
                          fieldId: 'dateOfBirth',
                          fieldType: 'date',
                          label: 'Date of Birth (Self)',
                          attributes: {
                            required: true,
                            disabled: false,
                            isConstraint: true,
                            placeholder: 'Self Date of birth',
                            notFormMember: false,
                            defaultError: '',
                            width: '100%',
                          },
                          validations: [
                            {
                              type: 'required',
                              errorMessage: 'error',
                            },
                          ],
                          constraints: {
                            equations: [
                              {
                                equation: 'healthSubCategory!=2',
                                keys: [
                                  {
                                    type: 'string',
                                    key: 'healthSubCategory',
                                  },
                                ],
                                id: 'eq1',
                              },
                            ],
                            masterEquation: 'eq1',
                          },
                          isSearchable: true,
                        },
                      ],
                    },
                    {
                      fields: [
                        {
                          fieldId: 'gender',
                          trackingId: 'gender',
                          fieldType: 'selection',
                          label: 'Gender (Self)',
                          attributes: {
                            required: true,
                            disabled: true,
                            isConstraint: true,
                            placeholder: 'Select Gender',
                            notFormMember: false,
                            defaultError: '',
                            width: '100%',
                          },
                          validations: [
                            {
                              type: 'required',
                              errorMessage: 'error',
                            },
                          ],
                          fetch: true,
                          fetchOptions: {
                            url: Configs.BASE_URL + '/' + 'user/genders',
                            param: null,
                            idKey: 'id',
                            valueKey: 'name',
                            async: false,
                          },
                          constraints: {
                            equations: [
                              {
                                equation: "`'gender'!='null'`",
                                keys: [
                                  {
                                    type: 'string',
                                    key: 'gender',
                                  },
                                ],
                                id: 'eq1',
                              },
                            ],
                            masterEquation: 'eq1',
                          },
                          isSearchable: true,
                        },
                      ],
                    },
                  ],
                  multiple: false,
                  constraints: null,
                },
              ],
            },
          ],
          nextButton: {
            label: 'Update',
            action: {
              method: 'PUT',
              url: Configs.BASE_URL + '/' + 'user/enquiry',
            },
            params: [],
          },
        },
      },
    },
  };