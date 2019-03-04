import React from 'react';
import Input from '../Input/Input';
import Form from '../Form/Form';
import validator from 'validator';
import toastr from 'toastr';



class PickupForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            fields: {
                name: '',
                telephone: '',
            },
            errors: {
                nameError: '',
                telephoneError: '',
            }

        }
    }

    onInput(e) {
        this.setState({
          fields: {
            ...this.state.fields,
            [e.target.name]: e.target.value }
        });
      };


      validateForm() {
        const { name, address, telephone, city, postal } = this.state.fields;
        const errors = {};
        if (name === '') { errors.nameError = 'Name name is required'; }
        if (telephone === '') { errors.cityError = 'Telephone is required'}
        if (!validator.isMobilePhone(telephone)) { errors.telephoneError = 'Telephone is not propper: Try 354 first'}
    
        if (Object.keys(errors).length > 0) {
          this.setState({ ...this.state.errors, errors });
          return false;
        }
        return true;
      };

    submitForm(e) {
        e.preventDefault();
        // TODO: Validate form
        if (this.validateForm()) {
            console.log(this.props);
            localStorage.setItem('number', e.target.telephone.value);
            this.props.changeVal(this.state.fields);
          } else {
            toastr.error('The form was not successfully submitted!', 'Failed!');
          }
      }

    render(){
        const { name, address, telephone, city, postal } = this.state.fields;
        const { nameError, addressError, cityError, telephoneError, postalError} = this.state.errors;
        return (
            <div className="pickUp">
                <h1>Enter Shipping Info</h1>
                <Form onSubmit={ e => this.submitForm(e)}>
                    <Input
                        type="text"
                        name="name"
                        value={ name }
                        htmlId="name"
                        label="Enter name"
                        errorMessage={ nameError }
                        onInput={e => this.onInput(e)}  />
                    <Input
                        type="text"
                        name="telephone"
                        value= { telephone }
                        htmlId="telephone"
                        label="Enter Phone number"
                        errorMessage={ telephoneError }
                        onInput={e => this.onInput(e)} />
                    <input type="submit" value="Send" className="btn btn-success" />
                </Form>
            </div>
        )
    }

}

export default PickupForm;