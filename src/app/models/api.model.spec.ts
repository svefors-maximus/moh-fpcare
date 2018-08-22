import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ServerPayload, PayloadInterface, BenefitYearInterface, RegStatusCode, StatusCheckRegNum } from './api.model';


const regNumberSuccess: StatusCheckRegNum = {
    'uuid' : '6b063557-6933-f303-e643-fd9da84b1feb',
    'clientName' : 'ppiwebuser',
    'benefitYear' : '2018',
    'famNumber' : 'A50056603',
    'regStatusCode' : RegStatusCode.SUCCESS,
    'regStatusMsg' : 'We haven\'t received your consent to check your income with the Canada Revenue Agency. Your Fair PharmaCare coverage is in place, but it will expire if we do not receive your signed consent form. If you need a new form, please call PharmaCare at 1-800-663-7100 or request it at <link to Request New Consent Form>.'
}

const regNumberFail: StatusCheckRegNum = {
    'uuid' : '2ada40bb-e5de-406e-044e-4ac0534374fb',
    'clientName' : 'ppiwebuser',
    'benefitYear' : '2018',
    'famNumber' : 'A99999999',
    'regStatusCode' : RegStatusCode.ERROR,
    'regStatusMsg' : 'We could not find an account with the information you have entered.\n\nPlease call PharmaCare at 1-800-663-7100 to register for a new Fair PharmaCare account or visit <link to Registration Page>'
  }

describe('API Models - ServerPayload', () => {
    let model: ServerPayload;
    let response: BenefitYearInterface;

  beforeEach(() => {
      response = {
        'uuid' : '7b116864-5977-7ff1-a7dd-a6dda86c181f',
        'clientName' : 'ppiwebuser',
        'processDate' : '20180816',
        'benefitYear' : '2018',
        'taxYear' : '2016',
        'regStatusCode' : RegStatusCode.SUCCESS,
        'regStatusMsg' : ''
      };
      model = new ServerPayload(response);
  });

  it('should create', () => {
    expect(model).toBeTruthy();
  });

  it('should process regStatusCode into .error and .success', () => {
    const regFail = new ServerPayload(regNumberFail);
    const regModel = new ServerPayload(regNumberSuccess);
    expect(model.success).toBeTruthy();
    expect(regModel.success).toBeTruthy();
    expect(regFail.error).toBeTruthy();
    expect(model.error).toBeFalsy();
    expect(regModel.error).toBeFalsy();
    expect(regFail.success).toBeFalsy();
  });
});
