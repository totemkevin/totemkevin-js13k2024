const BOARD_ROW = 16;
const BOARD_COL = 16;
let showLabe = false;
const IS_FOG = true;

const boardDiv = document.getElementById('board');
const controlDiv = document.getElementById('control');
const debugDiv = document.getElementById('debug');
const cells = document.getElementsByClassName('fieldCell');
const searchDiv = document.getElementById('search');
const buildDiv = document.getElementById('build');
const deployDiv = document.getElementById('deploy');
let fieldData = [];
let gameData = {
  selected: { position: [14, 14] },
};
const pollutionPosition = [
  [1, 1],
  [2, 3],
  [3, 3],
  [4, 2],
  [5, 10],
  [3, 10],
  [15, 4],
  [12, 10],
  [14, 3],
  [2, 14],
  [10, 4],
  [6, 12],
];
const playerBaseSetting = [[14, 14]];
const treeCount = 9;
const treePos = renderPos(treeCount).push([10, 14]);
const rockCount = 5;
const RockePos = renderPos(rockCount);

const fieldSettings = {
  tree: {},
  rock: {},
  wasteland: {},
  pollution: {},
};

function initFieldData() {
  for (let i = 0; i < BOARD_ROW; i++) {
    const row = [];
    for (let j = 0; j < BOARD_COL; j++) {
      row.push({
        name: `fieldCell_${i}_${j}`,
        type: 'wasteland',
        isFog: true,
        pollute: { level: 0 },
        bio: { level: 0 },
        mineral: { level: 0 },
      });
    }
    fieldData.push(row);
  }
}
