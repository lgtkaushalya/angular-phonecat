import React from 'react';
import { react2angular } from 'react2angular';
import PhoneDetailComponent from './components/PhoneDetailComponent';
import PhoneListComponent from './components/PhoneListComponent';

var app = angular.module('phonecatApp');
app.component('phoneDetailComponent', react2angular(PhoneDetailComponent, ['phoneId'], ['Phone', '$filter']));
app.component('phoneListComponent', react2angular(PhoneListComponent, [], ['Phone', '$filter']));


