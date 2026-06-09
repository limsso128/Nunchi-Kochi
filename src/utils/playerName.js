export function getPlayerName() {
  const name = localStorage.getItem('playerName');
  console.log('[playerName] get:', name);
  return name || 'user';
}

export function setPlayerName(name) {
  const trimmed = name.trim() || 'user';
  console.log('[playerName] set:', trimmed);
  localStorage.setItem('playerName', trimmed);
}
