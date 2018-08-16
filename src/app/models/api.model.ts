enum RegStatusCode {
    SUCCESS = '0',
    ERROR = '1'
}

export interface PayloadInterface {
    regStatusCode: RegStatusCode;
    regStatusMsg: string;
    uuid: string;
}

export interface BenefitYearInterface extends PayloadInterface {
    benefitYear: string;
    taxYear: string;
}

export class ServerPayload implements PayloadInterface {
    regStatusCode: RegStatusCode;
    regStatusMsg: string;
    uuid: string;

    constructor(payload: PayloadInterface) {
        this.regStatusCode = payload.regStatusCode;
        this.regStatusMsg = payload.regStatusMsg;
        this.uuid = payload.uuid;
    }

    get success(): boolean {
        return this.regStatusCode === RegStatusCode.SUCCESS;
    }

    get error(): boolean {
        return this.regStatusCode === RegStatusCode.ERROR;
    }

    // TODO: In the future will have to convert links and parse the message.
    // Message should always display what we we want to the user.
    get message(): string {
        // if (this.success) return this.regStatusMsg;
        return this.regStatusMsg;
    }

    // get errorMessage(): string {
    //     if (this.error) return this.regStatusMsg;
    // }
}

export class BenefitYearPayload extends ServerPayload implements BenefitYearInterface {
    benefitYear: string;
    taxYear: string;
    constructor(payload: BenefitYearInterface) {
        super(payload);
        this.benefitYear = payload.benefitYear;
        this.taxYear = payload.taxYear;
    }
}

export class StatusCheckRegNumberPayload extends ServerPayload {
    //Corresponds to famNumber from API
    regNumber: string;

    constructor(payload) {
        super(payload);
        this.regNumber = payload.famNumber;
    }
}

export class StatusCheckPHNPayload extends ServerPayload {
    phn: string;

    constructor(payload){
        super(payload);
        this.phn = payload.phn;
    }
}
