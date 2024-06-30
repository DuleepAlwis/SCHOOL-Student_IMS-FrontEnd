export const roles = {
    SYS_ADMIN: 'SYSTEM_ADMIN',
    SYS_MANAGER:'SYSTEM_MANAGER',
    ORG_ADMIN: 'ORGANIZATION_ADMIN',
    USER_TUTOR:'ORGANIZATION_TUTOR',
    USER_STUDENT:'ORGANIZATION_STUDENT',
    ORG_MANAGER:'ORGANIZATION_MANAGER'
  };
  
  export const permissions = {
    VIEW_SYS_DASHBOARD: 'VIEW_SYSTEM_DASHBOARD',
    VIEW_SYS_USERS:'VIEW_SYSTEM_USERS',
    CREATE_SYS_USERS:'CREATE_SYSTEM_USERS',
    EDIT_SYS_USERS:'EDIT_SYSTEM_USERS',
    DISABLE_SYS_USERS:'DELETE_SYSTEM_USERS',
    SEND_NOTIFICATION_EMAILS:'SEND_NOTIFICATION_EMAILS',
    VIEW_SYS_ORG:'VIEW_SYSTEM_ORGANIZATIONS',
    CREATE_ORG:'CREATE_ORGANIZATION',
    EDIT_ORG:'EDIT_ORGANIZATION',
    DISABLE_ORG:'DISABLE_ORGANIZATION',
    CREATE_ROLES:'CREATE_ROLES',
    EDIT_ROLES:'EDIT_ROLES',
    DISABLE_ROLES:'DISABLE_ROLES',
    CREATE_PERMISSIONS:'CREATE_PERMISSIONS',
    EDIT_PERMISSION:'EDIT_PERMISSION',
    DISABLE_PERMISSIONS:'DISABLE_PERMISSIONS',
    ASSIGN_PERMISSIONS:'ASSIGN_PERMISSIONS',
    ASSIGN_ROLES:'ASSIGN_ROLES',
    VIEW_PAYMENT_DETAILS:'VIEW_PAYMENT_DETAILS',
    USER_REPORT_GEN:'GENERATE_USER_REPORT',
    ORG_REPORT_GEN:'GENETATE_ORGANIZATION_REPORT',
    PAYMENT_DATA_REPORT:'GENERATE_PAYMENT_DATA_REPORT',

    VIEW_ORG_DASHBOARD: 'VIEW_ORGANIZATION_DASHBOARD',
    VIEW_TUTOR_DATA:'VIEW_TUTOR_DATA',
    EDIT_TUTOR_DATA:'EDIT_TUTOR_DATA',
    DISABLE_TUTOR_USER:'DISABLE_TUTOR_USER',
    VIEW_STUDENT_DATA:'VIEW_STUDENT_DATA',
    EDIT_STUDENT_DATA:'EDIT_STUDENT_DATA',
    DISABLE_STUDENT_USER:'DISABLE_STUDENT_USER',
    MARK_STUDENT_ATTENDANCE:'MARK_STUDENT_ATTENDACE',
    MARK_STAFF_ATTENDANCE:'MARK_STAFF_ATTENDANCE',
    VIEW_STUDENT_ATTENDANCE:'VIEW_STUDENT_ATTENDANCE',
    EDIT_STUDENT_ATTENDANCE:'EDIT_STUDENT_ATTENDANCE',
    VIEW_STAFF_ATTENDANCE:'VIEW_STAFF_ATTENDANCE',
    EDIT_STAFF_ATTENDANCE:'EDIT_STAFF_ATTENDANCE',

    CREATE_EXAM_RESULT:'CREATE_STUDENT_EXAM_RESULT',
    EDIT_EXAM_RESULT:'EDIT_STUDENT_EXAM_RESULT',
    GENERATE_STUDENT_REPORT:'GENERATE_STUDENT_REPORT',

    EDIT_PROFILE:'EDIT_PROFILE_DATA'
  };
  
  export const rolePermissions = {
    [roles.SYS_ADMIN]: [ permissions.EDIT_PROFILE,permissions.VIEW_SYS_DASHBOARD, permissions.VIEW_SYSTEM_USERS,permissions.CREATE_SYS_USERS,permissions.EDIT_SYS_USERS,permissions.DISABLE_SYS_USERS,
      permissions.SEND_NOTIFICATION_EMAILS,permissions.VIEW_SYS_ORG,permissions.CREATE_ORG,permissions.EDIT_ORG,permissions.DISABLE_ORG,permissions.CREATE_ROLES,permissions.EDIT_ROLES,permissions.DISABLE_ROLES,permissions.CREATE_PERMISSIONS,
      permissions.EDIT_PERMISSION,permissions.DISABLE_PERMISSIONS,permissions.ASSIGN_PERMISSIONS,permissions.ASSIGN_ROLES,
    ],
    [roles.ORG_MANAGER]:[permissions.EDIT_PROFILE,permissions.VIEW_PAYMENT_DETAILS,permissions.USER_REPORT_GEN,permissions.ORG_REPORT_GEN,permissions.PAYMENT_DATA_REPORT,
      permissions.VIEW_SYS_DASHBOARD,permissions.VIEW_SYS_USERS,permissions.VIEW_SYS_ORG
    ],
    [roles.ORG_ADMIN]: [permissions.EDIT_PROFILE,permissions.VIEW_ORG_DASHBOARD,permissions.VIEW_TUTOR_DATA,permissions.EDIT_TUTOR_DATA,permissions.DISABLE_TUTOR_USER,permissions.VIEW_STUDENT_DATA,
      permissions.EDIT_STUDENT_DATA,permissions.DISABLE_STUDENT_USER,permissions.MARK_STAFF_ATTENDANCE,permissions.VIEW_STAFF_ATTENDANCE,permissions.EDIT_STAFF_ATTENDANCE
    ],
    [roles.USER_TUTOR]:[permissions.EDIT_PROFILE,permissions.MARK_STUDENT_ATTENDANCE,permissions.EDIT_STUDENT_ATTENDANCE,permissions.VIEW_STUDENT_ATTENDANCE]
    
  };