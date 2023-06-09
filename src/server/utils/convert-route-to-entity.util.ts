const mapping: Record<string, string> = {
  academies: 'academy',
  notes: 'note',
  'parent-requests': 'parent_request',
  players: 'player',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
