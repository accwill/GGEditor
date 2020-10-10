import React from 'react';
import GGEditor, { Flow } from 'gg-editor-customer';
import styles from './index.less';

const data = {
  nodes: [
    {
      id: '0',
      label: 'Node1',
      x: 50,
      y: 50,
    },
    {
      id: '1',
      label: 'Node2',
      x: 50,
      y: 200,
    },
  ],
  edges: [
    {
      label: 'Label',
      source: '0',
      sourceAnchor: 1,
      target: '1',
      targetAnchor: 0,
    },
  ],
};

function App() {
  return (
    <GGEditor>
      <Flow
        className={styles.graph}
        data={data}
        graphConfig={{
          hjackCommand: (commandName, node) => {
            if (commandName === 'remove' && node.type === 'circle') {
              return false;
            }
            return true;
          },
        }}
      />
    </GGEditor>
  );
}

export default App;
