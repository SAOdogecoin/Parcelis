export interface StatePenaltyData {
  stateName: string;
  stateCode: string;
  penaltyPerViolation: number;
  description: string;
  statuteCode: string;
}

export interface CalculationResult {
  daily: number;
  monthly: number;
  yearly: number;
}
