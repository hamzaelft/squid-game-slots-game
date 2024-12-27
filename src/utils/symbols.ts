import { Circle, Square, Triangle, Skull, Target, Crown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Symbol {
  icon: LucideIcon;
  name: string;
  color: string;
}

export const symbols: Symbol[] = [
  { icon: Circle, name: 'circle', color: 'text-pink-500' },
  { icon: Square, name: 'square', color: 'text-blue-400' },
  { icon: Triangle, name: 'triangle', color: 'text-green-400' },
  { icon: Skull, name: 'skull', color: 'text-red-500' },
  { icon: Target, name: 'target', color: 'text-yellow-400' },
  { icon: Crown, name: 'crown', color: 'text-purple-400' },
];