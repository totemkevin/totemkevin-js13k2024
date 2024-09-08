function renderPos(num) {
  const arr = [];
  let gen = 0;
  while (gen < num) {
    const posX = Math.floor(Math.random() * BOARD_ROW);
    const posY = Math.floor(Math.random() * BOARD_COL);
    const posStr = `${posX},${posY}`;
    const target = fieldData[posX][posY];
    if (target.type === 'wasteland' && !arr.includes(posStr)) {
      arr.push(posStr);
      gen++;
    }
  }
  const res = arr.map((posstr) => {
    return posstr.split(',');
  });
  return res;
}

function splitId(idStr) {
  const arr = idStr.split('_');
  return [Number(arr[1]), Number(arr[2])];
}

function debugMessage() {
  const dabugMessage = {
    gameData,
    showData: showData(),
  };
  debugDiv.innerHTML = JSON.stringify(dabugMessage, null, 2);
}

function showData() {
  const selected = gameData.selected.position;
  const res = {
    pollution: 0,
    pollute: 0,
    tree: 0,
    mine: 0,
    selectedData: fieldData[selected[0]][selected[1]],
  };
  for (let i = 0; i < BOARD_ROW; i++) {
    for (let j = 0; j < BOARD_COL; j++) {
      const cell = fieldData[i][j];
      if (cell.type === 'pollution') {
        res.pollution++;
      } else if (cell.type === 'pollute') {
        res.pollute++;
      } else if (cell.type === 'tree') {
        res.tree++;
      } else if (cell.type === 'mine') {
        res.mine++;
      }
    }
  }
  return res;
}

function around(pos, range = 1) {
  const start = range * -1;
  const end = range;
  const maxX = BOARD_ROW;
  const maxY = BOARD_COL;
  const res = [];
  for (let i = start; i <= end; i++) {
    const posX = pos[0] + i;
    for (let j = start; j <= end; j++) {
      const posY = pos[1] + j;
      if (posX >= 0 && posX < maxX && posY >= 0 && posY < maxY) {
        res.push([posX, posY]);
      }
    }
  }
  return res;
}

function apply(pos, action) {
  pos.forEach((pos) => {
    action(pos[0], pos[1], field[pos[0]][pos[1]]);
  });
}
