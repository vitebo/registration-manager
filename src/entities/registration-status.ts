import { Registration } from './registration.ts';

export enum RegistrationStatusEnum {
  APPROVED = 'APPROVED',
  REPROVED = 'REPROVED',
  REVIEW = 'REVIEW'
}

export abstract class RegistrationStatus {
  abstract value: RegistrationStatusEnum;

  protected constructor(readonly registation: Registration) {}

  abstract approve(): void;
  abstract reprove(): void;
  abstract review(): void;
  abstract canUpdate(status: RegistrationStatusEnum): boolean;
}

export class ApprovedStatus extends RegistrationStatus {
  value = RegistrationStatusEnum.APPROVED;

  constructor(registation: Registration) {
    super(registation);
  }

  approve(): void {
    throw new Error('Invalid status');
  }

  reprove(): void {
    throw new Error('Invalid status');
  }

  review(): void {
    this.registation.status = new ReviewStatus(this.registation);
  }

  canUpdate(status: RegistrationStatusEnum): boolean {
    return status === RegistrationStatusEnum.REVIEW;
  }
}

export class ReprovedStatus extends RegistrationStatus {
  value = RegistrationStatusEnum.REPROVED;

  constructor(registation: Registration) {
    super(registation);
  }

  approve(): void {
    throw new Error('Invalid status');
  }

  reprove(): void {
    throw new Error('Invalid status');
  }

  review(): void {
    this.registation.status = new ReviewStatus(this.registation);
  }

  canUpdate(status: RegistrationStatusEnum): boolean {
    return status === RegistrationStatusEnum.REVIEW;
  }
}

export class ReviewStatus extends RegistrationStatus {
  value = RegistrationStatusEnum.REVIEW;

  constructor(registation: Registration) {
    super(registation);
  }

  approve(): void {
    this.registation.status = new ApprovedStatus(this.registation);
  }

  reprove(): void {
    this.registation.status = new ReprovedStatus(this.registation);
  }

  review(): void {
    throw new Error('Invalid status');
  }

  canUpdate(status: RegistrationStatusEnum): boolean {
    return [RegistrationStatusEnum.APPROVED, RegistrationStatusEnum.REPROVED].includes(status);
  }
}

export class RegistrationStatusFactory {
  static create(type: keyof typeof RegistrationStatusEnum, registration: Registration) {
    const status = RegistrationStatusEnum[type];
    if (status === RegistrationStatusEnum.APPROVED) return new ApprovedStatus(registration);
    if (status === RegistrationStatusEnum.REPROVED) return new ReprovedStatus(registration);
    if (status === RegistrationStatusEnum.REVIEW) return new ReviewStatus(registration);
    throw new Error('Invalid status');
  }
}
