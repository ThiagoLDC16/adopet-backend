export class AppError extends Error {
  public readonly statusCode: number;
  public readonly messageCode: string;
  public readonly data?: any;

  constructor(messageCode: string, statusCode = 422, data?: any) {
    super(messageCode);
    this.statusCode = statusCode;
    this.messageCode = messageCode;
    this.data = data;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}
