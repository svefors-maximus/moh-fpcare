import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {SimpleDate} from '../modules/core/components/date/simple-date.interface';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  constructor() { }

  /**
   * Converts date to a data string of a specified format (e.g. YYYY/MM/DD)
   * @param {Date} date
   * @param {string} dateFormat
   * @returns {string}
   */
  formatDate( date: Date, dateFormat: string = 'yyyy/mm/dd' ): string {
    return moment(date).format( dateFormat.toUpperCase() );
  }

  // Formatting functions
  formatSimpleDate(  dt: SimpleDate ): string {
    const dtObj = new Date( dt.year, dt.month, dt.day );
    return this.formatDate( dtObj );
  }
}
