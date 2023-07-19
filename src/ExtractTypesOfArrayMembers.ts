// ============= https://www.youtube.com/watch?v=8HoOxOd86M4 ============= //

const roles = ['user', 'admin', 'superadmin'] as const;

type RolesArray = typeof roles;

type Roles = RolesArray[number];
