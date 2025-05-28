import { MembershipLevelEnum } from "../common/enums/membership-level.enum";

export class Customer {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  membershipLevel: MembershipLevelEnum;

  constructor(
    id: string,
    name: string,
    email: string,
    address: string,
    phone: string,
    membershipLevel: MembershipLevelEnum
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.membershipLevel = membershipLevel;
  }
}
