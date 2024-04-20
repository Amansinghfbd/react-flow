import React, { useCallback } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import { useDispatch, useSelector } from 'react-redux';
import { updateEdges, updateNodes } from './flowSlice';
import Node from './Node';
import 'reactflow/dist/style.css';

function Flow() {
  const dispatch = useDispatch();
  const nodes = useSelector((state) => state.flow.nodes);
  const edges = useSelector((state) => state.flow.edges);

  const handleDeleteNode = useCallback(
    (id) => {
      const updatedNodes = nodes.filter((node) => node.id !== id);
      const updatedEdges = edges.filter((edge) => edge.source !== id && edge.target !== id);
      dispatch(updateNodes(updatedNodes));
      dispatch(updateEdges(updatedEdges));
    },
    [dispatch, nodes, edges]
  );

  return (
    <div style={{ width: '70%', height: '500px', margin: 'auto', position: 'relative' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        style={{ width: '100%', height: '100%' }}
      >
        <Background />
        <Controls />
      </ReactFlow>
      {nodes.map((node) => (
        <Node
          key={node.id}
          id={node.id}
          position={node.position}
          onDelete={handleDeleteNode}
        />
      ))}
    </div>
  );
}

export default Flow;
