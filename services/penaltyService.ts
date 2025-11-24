import { StatePenaltyData } from '../types';

const MOCK_DATA: StatePenaltyData[] = [
  { stateName: "Alabama", stateCode: "AL", penaltyPerViolation: 1000, description: "Class A misdemeanor for unlicensed insurance", statuteCode: "Ala. Code §27-12A-5" },
  { stateName: "Alaska", stateCode: "AK", penaltyPerViolation: 25000, description: "Civil penalties for unlicensed insurance, possible felony", statuteCode: "Alaska Stat. §21.27.440" },
  { stateName: "Arizona", stateCode: "AZ", penaltyPerViolation: 15000, description: "Class 5 felony and civil fines for unlicensed insurance", statuteCode: "Ariz. Rev. Stat. §20-401.06" },
  { stateName: "Arkansas", stateCode: "AR", penaltyPerViolation: 10000, description: "Felony for aiding unauthorized insurer, civil penalties", statuteCode: "Ark. Code §23-64-407" },
  { stateName: "California", stateCode: "CA", penaltyPerViolation: 50000, description: "Misdemeanor and civil penalties for unlicensed insurance", statuteCode: "Cal. Ins. Code §1633" },
  { stateName: "Colorado", stateCode: "CO", penaltyPerViolation: 1000, description: "Class 2 misdemeanor for unauthorized insurance", statuteCode: "Colo. Rev. Stat. §10-3-104" },
  { stateName: "Connecticut", stateCode: "CT", penaltyPerViolation: 50000, description: "Fine for unauthorized insurance transactions", statuteCode: "Conn. Gen. Stat. §38a-272" },
  { stateName: "Delaware", stateCode: "DE", penaltyPerViolation: 5000, description: "Fine on unauthorized insurer", statuteCode: "Del. Code §2101(a)" },
  { stateName: "District of Columbia", stateCode: "DC", penaltyPerViolation: 1000, description: "Misdemeanor for aiding unauthorized insurer", statuteCode: "D.C. Code §31-2502.39" },
  { stateName: "Florida", stateCode: "FL", penaltyPerViolation: 10000, description: "Third-degree felony; civil penalties for agencies", statuteCode: "Fla. Stat. §626.112" },
  { stateName: "Georgia", stateCode: "GA", penaltyPerViolation: 1000, description: "Misdemeanor for unauthorized insurer activity", statuteCode: "Ga. Code §33-5-1" },
  { stateName: "Hawaii", stateCode: "HI", penaltyPerViolation: 10000, description: "Civil penalties for unauthorized insurance", statuteCode: "Haw. Rev. Stat. §431:8-201" },
  { stateName: "Idaho", stateCode: "ID", penaltyPerViolation: 2000, description: "Misdemeanor for unauthorized insurance", statuteCode: "Idaho Code §41-1201" },
  { stateName: "Illinois", stateCode: "IL", penaltyPerViolation: 1000, description: "Class A misdemeanor for unauthorized insurance", statuteCode: "215 ILCS 5/121" },
  { stateName: "Indiana", stateCode: "IN", penaltyPerViolation: 500, description: "Class A infraction for unauthorized insurance", statuteCode: "Ind. Code §27-4-5-2" },
  { stateName: "Iowa", stateCode: "IA", penaltyPerViolation: 5000, description: "Class D or C felony depending on amount", statuteCode: "Iowa Code §507A.10" },
  { stateName: "Kansas", stateCode: "KS", penaltyPerViolation: 100000, description: "Felony or misdemeanor based on amount", statuteCode: "Kan. Stat. §40-2,118" },
  { stateName: "Kentucky", stateCode: "KY", penaltyPerViolation: 100000, description: "Felony or misdemeanor under insurance fraud", statuteCode: "KRS §304.47-020" },
  { stateName: "Louisiana", stateCode: "LA", penaltyPerViolation: 50000, description: "Felony for aiding unauthorized insurer", statuteCode: "La. Rev. Stat. §22:12" },
  { stateName: "Maine", stateCode: "ME", penaltyPerViolation: 2000, description: "Class D crime for deceptive insurance practices", statuteCode: "Me. Rev. Stat. §901-A" },
  { stateName: "Maryland", stateCode: "MD", penaltyPerViolation: 10000, description: "Felony or misdemeanor depending on value", statuteCode: "Md. Code Ins. §27-406" },
  { stateName: "Massachusetts", stateCode: "MA", penaltyPerViolation: 10000, description: "Felony for unlicensed insurance (fraud statute)", statuteCode: "M.G.L. c.175" },
  { stateName: "Michigan", stateCode: "MI", penaltyPerViolation: 50000, description: "Felony for unauthorized insurance", statuteCode: "Mich. Comp. Laws §500.4503" },
  { stateName: "Minnesota", stateCode: "MN", penaltyPerViolation: 3000, description: "Gross misdemeanor for unauthorized insurance", statuteCode: "Minn. Stat. §72A.15" },
  { stateName: "Mississippi", stateCode: "MS", penaltyPerViolation: 500, description: "Misdemeanor; felony if fraudulent", statuteCode: "Miss. Code §83-21-17" },
  { stateName: "Missouri", stateCode: "MO", penaltyPerViolation: 10000, description: "Class E felony for unauthorized insurance", statuteCode: "Mo. Rev. Stat. §375.014" },
  { stateName: "Montana", stateCode: "MT", penaltyPerViolation: 5000, description: "Felony for unauthorized insurance", statuteCode: "Mont. Code Ann. §33-2-101" },
  { stateName: "Nebraska", stateCode: "NE", penaltyPerViolation: 1000, description: "Class I misdemeanor for unauthorized insurance", statuteCode: "Neb. Rev. Stat. §44-101" },
  { stateName: "Nevada", stateCode: "NV", penaltyPerViolation: 5000, description: "Category B felony for unauthorized insurance", statuteCode: "NRS §685B.080" },
  { stateName: "New Hampshire", stateCode: "NH", penaltyPerViolation: 2500, description: "Misdemeanor for unauthorized insurance", statuteCode: "N.H. Rev. Stat. §405:31" },
  { stateName: "New Jersey", stateCode: "NJ", penaltyPerViolation: 500, description: "Misdemeanor (disorderly persons offense)", statuteCode: "N.J. Stat. §17:22-6.37" },
  { stateName: "New Mexico", stateCode: "NM", penaltyPerViolation: 1000, description: "Misdemeanor for unauthorized insurance", statuteCode: "N.M. Stat. §59A-1-18" },
  { stateName: "New York", stateCode: "NY", penaltyPerViolation: 5000, description: "Class E felony for unauthorized insurance", statuteCode: "N.Y. Ins. Law §1102" },
  { stateName: "North Carolina", stateCode: "NC", penaltyPerViolation: 2500, description: "Class 1 misdemeanor / Class H felony", statuteCode: "N.C. Gen. Stat. §58-33-95" },
  { stateName: "North Dakota", stateCode: "ND", penaltyPerViolation: 1000, description: "Misdemeanor for unauthorized insurance", statuteCode: "N.D. Cent. Code §26.1-02-02" },
  { stateName: "Ohio", stateCode: "OH", penaltyPerViolation: 2500, description: "Felony for unauthorized insurance", statuteCode: "Ohio Rev. Code §3901.17" },
  { stateName: "Oklahoma", stateCode: "OK", penaltyPerViolation: 5000, description: "Felony for unauthorized insurance", statuteCode: "Okla. Stat. tit. 36, §211" },
  { stateName: "Oregon", stateCode: "OR", penaltyPerViolation: 25000, description: "Civil penalties for unauthorized insurance", statuteCode: "Or. Rev. Stat. §731.988" },
  { stateName: "Pennsylvania", stateCode: "PA", penaltyPerViolation: 1000, description: "Felony or misdemeanor based on amount", statuteCode: "40 Pa. Stat. §47" },
  { stateName: "Rhode Island", stateCode: "RI", penaltyPerViolation: 10000, description: "Felony for aiding unauthorized insurer", statuteCode: "R.I. Gen. Laws §27-16-2" },
  { stateName: "South Carolina", stateCode: "SC", penaltyPerViolation: 1000, description: "Misdemeanor for unauthorized insurance", statuteCode: "S.C. Code §38-25-540" },
  { stateName: "South Dakota", stateCode: "SD", penaltyPerViolation: 500, description: "Class 2 misdemeanor", statuteCode: "S.D. Codified Laws §58-8-2" },
  { stateName: "Tennessee", stateCode: "TN", penaltyPerViolation: 1000, description: "Felony or misdemeanor depending on amount", statuteCode: "Tenn. Code §56-2-407" },
  { stateName: "Texas", stateCode: "TX", penaltyPerViolation: 10000, description: "Third-degree felony for unauthorized insurance", statuteCode: "Tex. Ins. Code §101.102" },
  { stateName: "Utah", stateCode: "UT", penaltyPerViolation: 2500, description: "Felony or misdemeanor depending on amount", statuteCode: "Utah Code §31A-2-308" },
  { stateName: "Vermont", stateCode: "VT", penaltyPerViolation: 500, description: "Misdemeanor for unauthorized insurance", statuteCode: "Vt. Stat. §4793" },
  { stateName: "Virginia", stateCode: "VA", penaltyPerViolation: 2500, description: "Class 1 misdemeanor", statuteCode: "Va. Code §38.2-1802" },
  { stateName: "Washington", stateCode: "WA", penaltyPerViolation: 25000, description: "Class B felony for unauthorized insurance", statuteCode: "Wash. Rev. Code §48.15.020" },
  { stateName: "West Virginia", stateCode: "WV", penaltyPerViolation: 20000, description: "Felony for unauthorized insurance", statuteCode: "W. Va. Code §33-44-8" },
  { stateName: "Wisconsin", stateCode: "WI", penaltyPerViolation: 5000, description: "Misdemeanor for unauthorized insurance", statuteCode: "Wis. Stat. §618.39" },
  { stateName: "Wyoming", stateCode: "WY", penaltyPerViolation: 10000, description: "Felony for unauthorized insurance", statuteCode: "Wyo. Stat. §26-1-107" },
];

/**
 * Simulates a backend call to fetch penalty data.
 */
export async function getPenaltyData(): Promise<StatePenaltyData[]> {
  // Simulate network latency
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_DATA);
    }, 600);
  });
}