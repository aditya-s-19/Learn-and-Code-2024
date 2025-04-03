import { MembershipLevelEnum } from "../common/enums/membership-level.enum";

export interface ICustomer {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  membershipLevel: MembershipLevelEnum;
}
