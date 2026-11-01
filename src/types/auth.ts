export interface EmployeeIdentity {
  id: string;
  name: string;
  designation: string;
  primaryOffice: string;
  email: string;
  avatarText: string;
}

export type ScopeType = 'district' | 'taluk' | 'institution';

export interface AdminScope {
  type: ScopeType;
  name: string;
  code: string;
}

export interface RoleAssignment {
  id: string;
  roleName: string;
  institutionOrJurisdiction: string;
  scope: AdminScope;
  isAdditionalCharge: boolean;
  permittedModules: string[];
}

export interface RoleSwitchAuditEntry {
  id: string;
  employeeId: string;
  employeeName: string;
  fromRoleId: string;
  fromRoleName: string;
  fromJurisdiction: string;
  toRoleId: string;
  toRoleName: string;
  toJurisdiction: string;
  timestamp: string;
}

