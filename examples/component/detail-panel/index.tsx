import React from 'react';
import GGEditor, { Flow, EditableLabel } from 'gg-editor-customer';
import { NodePanel, EdgePanel, MultiPanel, CanvasPanel } from './Panel';
import styles from './index.less';

const data = {
  nodes: [
    {
      id: '0',
      label: 'Node',
      x: 50,
      y: 50,
    },
    {
      id: '1',
      label: 'Node',
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
      <div className={styles.detailPanel}>
        <NodePanel />
        <EdgePanel />
        <MultiPanel />
        <CanvasPanel />
      </div>
      <Flow className={styles.graph} data={data} />
      <EditableLabel />
    </GGEditor>
  );
}

export default App;