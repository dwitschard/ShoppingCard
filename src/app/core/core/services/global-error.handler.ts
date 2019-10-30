import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {Store} from '@ngrx/store';

import {addError} from '../state/core/actions';


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {
  }

  handleError(error) {
    if (error.rejection) {
      this.injector.get(Store).dispatch(addError(error.rejection));
    } else {
      throw error;
    }
  }
}

