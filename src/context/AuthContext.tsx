import React, { createContext, useContext, useState } from 'react';
import { EmployeeIdentity, RoleAssignment, RoleSwitchAuditEntry } from '../types/auth';

const INITIAL_EMPLOYEE: EmployeeIdentity = {
  id: 'EMP-MPM-1002',
  name: 'Dr. K. Narayanan',
  designation: 'Senior Veterinary Surgeon',
  primaryOffice: 'District Animal Husbandry Office, Malappuram',
  email: 'narayanan.adcp@kerala.gov.in',
  avatarText: 'DC',
};

const INITIAL_ROLES: RoleAssignment[] = [
  {
    id: 'role-dc-mpm',
    roleName: 'District Coordinator',
    institutionOrJurisdiction: 'ADCP Malappuram (District HQ)',
    scope: {
      type: 'district',
      name: 'Malappuram District',
      code: 'MPM-DIST',
    },
    isAdditionalCharge: false,
    permittedModules: [
      'dashboard',
      'stock',
      'finance',
      'purchase',
      'staff',
      'vehicles',
      'office',
      'documents',
      'field-reporting',
      'campaigns',
      'samples',
      'surveillance',
      'vaccination-reports',
      'reporting-centre',
      'users',
      'settings',
      'help',
    ],
  },
  {
    id: 'role-tc-pmna',
    roleName: 'Taluk Coordinator',
    institutionOrJurisdiction: 'Perinthalmanna Taluk',
    scope: {
      type: 'taluk',
      name: 'Perinthalmanna Taluk',
      code: 'PMNA-TALUK',
    },
    isAdditionalCharge: true,
    permittedModules: [
      'dashboard',
      'stock',
      'staff',
      'vehicles',
      'documents',
      'field-reporting',
      'campaigns',
      'samples',
      'surveillance',
      'vaccination-reports',
      'reporting-centre',
      'help',
    ],
  },
  {
    id: 'role-sup-poly',
    roleName: 'Supervisor',
    institutionOrJurisdiction: 'Veterinary Polyclinic Perinthalmanna',
    scope: {
      type: 'institution',
      name: 'Veterinary Polyclinic Perinthalmanna',
      code: 'INST-VPC-PMNA',
    },
    isAdditionalCharge: true,
    permittedModules: [
      'dashboard',
      'stock',
      'documents',
      'field-reporting',
      'samples',
      'vaccination-reports',
      'help',
    ],
  },
  {
    id: 'role-sup-mankada',
    roleName: 'Supervisor',
    institutionOrJurisdiction: 'Veterinary Dispensary Mankada',
    scope: {
      type: 'institution',
      name: 'Veterinary Dispensary Mankada',
      code: 'INST-VD-MANKADA',
    },
    isAdditionalCharge: true,
    permittedModules: [
      'dashboard',
      'stock',
      'documents',
      'field-reporting',
      'samples',
      'vaccination-reports',
      'help',
    ],
  },
];

interface AuthContextType {
  employee: EmployeeIdentity;
  roles: RoleAssignment[];
  activeRole: RoleAssignment;
  switchRole: (roleId: string) => boolean;
  roleSwitchAuditLogs: RoleSwitchAuditEntry[];
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  showLogoutConfirm: boolean;
  setShowLogoutConfirm: (show: boolean) => void;
  activeAccountModal: 'profile' | 'settings' | 'password' | null;
  setActiveAccountModal: (modal: 'profile' | 'settings' | 'password' | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [employee] = useState<EmployeeIdentity>(INITIAL_EMPLOYEE);
  const [roles] = useState<RoleAssignment[]>(INITIAL_ROLES);
  const [activeRole, setActiveRole] = useState<RoleAssignment>(INITIAL_ROLES[0]);
  const [roleSwitchAuditLogs, setRoleSwitchAuditLogs] = useState<RoleSwitchAuditEntry[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState<boolean>(false);
  const [activeAccountModal, setActiveAccountModal] = useState<'profile' | 'settings' | 'password' | null>(null);

  const switchRole = (roleId: string): boolean => {
    const targetRole = roles.find((r) => r.id === roleId);
    if (!targetRole || targetRole.id === activeRole.id) return false;

    const auditEntry: RoleSwitchAuditEntry = {
      id: `audit-${Date.now()}`,
      employeeId: employee.id,
      employeeName: employee.name,
      fromRoleId: activeRole.id,
      fromRoleName: activeRole.roleName,
      fromJurisdiction: activeRole.institutionOrJurisdiction,
      toRoleId: targetRole.id,
      toRoleName: targetRole.roleName,
      toJurisdiction: targetRole.institutionOrJurisdiction,
      timestamp: new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    };

    setRoleSwitchAuditLogs((prev) => [auditEntry, ...prev]);
    setActiveRole(targetRole);
    return true;
  };

  const login = () => {
    setIsAuthenticated(true);
    setShowLogoutConfirm(false);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setShowLogoutConfirm(false);
  };

  return (
    <AuthContext.Provider
      value={{
        employee,
        roles,
        activeRole,
        switchRole,
        roleSwitchAuditLogs,
        isAuthenticated,
        login,
        logout,
        showLogoutConfirm,
        setShowLogoutConfirm,
        activeAccountModal,
        setActiveAccountModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

