export enum UserRoles {
  ADMIN,
  FINANCE,
  PATIENT,
}

export type LoggedInUser = {
  role: UserRoles;
  orgKey: string;
  approvals?: Array<string>;
};
