import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Observable } from 'rxjs/Rx'

const socket$ = Observable.webSocket('ws://localhost:3000')
  .retryWhen(error => error.delay(200));

socket$.subscribe(e => console.log(e))

socket$.next('location');

