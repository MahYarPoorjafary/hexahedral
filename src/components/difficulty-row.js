import { h } from 'virtual-dom';
import LevelButton from '../components/level-button';
import { levelNumbersInDifficulty } from '../util';

export default function DifficultyRow ({
  currentDifficulty,
  currentLevelNumber,
  loadLevel,
}) {
  const levelNumbers = levelNumbersInDifficulty(currentDifficulty);

  return h('div.difficulty-row', levelNumbers.map(
    levelNumber => LevelButton({ currentLevelNumber, levelNumber, loadLevel })
  ));
}
