import { createSlice } from '@reduxjs/toolkit';
import initialNodes from './nodes.js';
import initialEdges from './edges.js';

const initialState = {
  nodes: initialNodes,
  edges: initialEdges,
};

const flowSlice = createSlice({
  name: 'flow',
  initialState,
  reducers: {
    updateNodes(state, action) {
      state.nodes = action.payload;
    },
    updateEdges(state, action) {
      state.edges = action.payload;
    },
    updateNodeLabel(state, action) {
      const { nodeId, label } = action.payload;
      const nodeToUpdate = state.nodes.find((node) => node.id === nodeId);
      if (nodeToUpdate) {
        nodeToUpdate.data.label = label;
      }
    },
  },
});

export const { updateNodes, updateEdges, updateNodeLabel } = flowSlice.actions;
export default flowSlice.reducer;
