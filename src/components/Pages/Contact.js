import React, { Component } from 'react';
import Field from '../common/Field';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const fields = {
  sections: [
    [
      {
        name: 'name',
        elementType: 'input',
        type: 'text',
        placeholder: 'Your Name *'
      },
      {
        name: 'email',
        elementType: 'input',
        type: 'email',
        placeholder: 'Your Email *'
      },
      {
        name: 'phone',
        elementType: 'input',
        type: 'text',
        placeholder: 'Type Your Phone *'
      }
    ],
    [
      {
        name: 'message',
        elementType: 'textarea',
        type: 'text',
        placeholder: 'Type Your Message *'
      }
    ]
  ]
};

class Contact extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     email: '',
  //     phone: '',
  //     message: ''
  //   };
  // }

  submitForm = e => {
    e.preventDefault();
    alert('thank you verry much');
  };
  render() {
    console.log('contact', this.props);

    return (
      // <!-- Contact -->
      <section className='page-section' id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading text-uppercase'>
                {this.props.title}
              </h2>
              <h3 className='section-subheading text-muted'>
                {this.props.subTitle}
              </h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <form
                name='sentMessage'
                noValidate='novalidate'
                onSubmit={this.props.handleSubmit}
              >
                <div className='row'>
                  {fields.sections.map((section, sectionIndex) => {
                    console.log(
                      'Rendering Section',
                      sectionIndex,
                      'with',
                      section
                    );

                    return (
                      <div className='col-md-6' key={sectionIndex}>
                        {section.map((field, index) => {
                          // console.log('field', field);

                          return (
                            <Field
                              {...field}
                              key={index}
                              value={this.props.values[field.name]}
                              name={field.name}
                              onChange={this.props.handleChange}
                              onBlur={this.props.handleBlur}
                              touched={this.props.touched[field.name]}
                              errors={this.props.errors[field.name]}
                              // value={this.state[field.name]}
                              // onChange={e =>
                              //   this.setState({ [field.name]: e.target.value })
                              // }
                            />
                          );
                        })}
                      </div>
                    );
                  })}
                  <div className='clearfix'></div>
                  <div className='col-lg-12 text-center'>
                    <div id='success'></div>
                    <button
                      className='btn btn-primary btn-xl text-uppercase'
                      type='submit'
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    phone: '',
    message: ''
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, 'Come on bro, your name is longer than that.')
      .required('You must give us your name.'),
    email: Yup.string()
      .email('You need to give us a valid email')
      .required('wee need your email!'),
    phone: Yup.string()
      .min(10, 'Please Provide your 10 digit phone number')
      .max(15, 'Your phone number is too long')
      .required('Wee need a phone number to reach you at.'),
    message: Yup.string()
      .min(500, 'You need to provide us more detailed information')
      .required('message is Required.')
  }),
  handleSubmit: (value, { setSubmitting }) => {
    console.log('handlesubmit', value);

    alert("You've Submitted the Form" + JSON.stringify(value));
  }
})(Contact);
