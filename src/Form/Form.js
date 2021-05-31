import React, { Component } from 'react';
import axios from 'axios';
import Address from './Address';
import { PersonalDetails } from './PersonalDetails';

export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            address: {
                houseNo: 0,
                street: '',
                addressLine1: '',
                addressLine2: '',
                addressLine3: ''
            },
            guardianDetails: {
                guardianName: '',
                relation: '',
                address: ''
            },
            PersonalDetails: {
                phoneNo: '',
                age: '',
                adharNo: '',
                mother: '',
                father: ''
            }

        }
    }

    submit = (e) => {
        console.log(e)
        e.preventDefault();
        // axios.post('saveUser',{data:{...this.state}}).then(res=>{
        //     alert('success')
        // }).catch(err=>{
        //     alert('Something went wrong')
        // })
    }

    inputOnChangeHandler = (event) => {
        let a = {}
        let key = event.target.name;
        a[key] = event.target.value;
        this.setState({ ...a })
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            console.log(res);
        }).catch(err => {
            alert('Something went wrong')
        })
    }

    render() {
        { console.log(this.state) }
        return (
            <div>
                <form onSubmit={this.submit}>
                    <input type="text" name="name" onChange={this.inputOnChangeHandler} value={this.state.name} /><br />
                    <input type="text" name="phoneNo" onChange={this.inputOnChangeHandler} value={this.state.phoneNo} /><br />
                    <input type="text" name="age" onChange={this.inputOnChangeHandler} /><br />
                    <input type="text" name="adharNo" onChange={this.inputOnChangeHandler} />
                    <br />
                    <input type="password" name="password" onChange={this.inputOnChangeHandler} />
                    <br />
                    <input type="submit" name="click here" />
                </form>
                <Address {...this.state.Address} inputOnChangeHandler={this.inputOnChangeHandler} />
                <PersonalDetails {...this.state.PersonalDetails} inputOnChangeHandler={this.inputOnChangeHandler} />
            </div>
        )
    }
}

export default Form
