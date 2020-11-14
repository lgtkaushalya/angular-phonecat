import React from 'react';
import { react2angular } from 'react2angular';
import PhoneDetailComponent from './components/PhoneDetailComponent';

var app = angular.module('phonecatApp');
app.component('phoneDetailComponent', react2angular(PhoneDetailComponent, ['phoneId'], ['$injector', 'Phone', '$filter']));


