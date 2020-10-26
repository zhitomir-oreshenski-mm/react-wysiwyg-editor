import { createContext } from 'react';
import { EditorState } from 'draft-js';

export const EditorContext = createContext<EditorState>(
  EditorState.createEmpty()
);
