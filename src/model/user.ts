export enum UserRoles {
  ADMIN,
  FINANCE,
}

export type LoggedInUser = {
  role: UserRoles;
  orgKey: string;
  approvals?: Array<string>;
};
