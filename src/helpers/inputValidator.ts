export enum EInputValidation {
  NUMBERS,
  NO_SPEC_SYMBOL,
}

export const inputValidator = (
  text: string,
  validation: EInputValidation = EInputValidation.NO_SPEC_SYMBOL
): boolean => {
  switch (validation) {
    case EInputValidation.NO_SPEC_SYMBOL:
      return !text.match(/[!$%^&*()_+|~=`{}[:;<>?.@#\]]/g);
    case EInputValidation.NUMBERS:
      return !!text.match(/^\d+$/);
    default:
      return false;
  }
};
