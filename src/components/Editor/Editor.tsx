import React, { Fragment, useCallback, useState } from 'react';
import { Editor as ReactWysiwygEditor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

export const Editor = () => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty() || null
  );
  const [enteredText, setEnteredText] = useState<string>('');

  const getEditorText = useCallback(
    (raw: ContentState) => raw.getPlainText(),
    []
  );

  const onEditorStateChange = useCallback(
    (editorState) => {
      const text = getEditorText(editorState.getCurrentContent());
      setEditorState(editorState);
      setEnteredText(text);
    },
    [getEditorText]
  );
  const raw = convertToRaw(editorState.getCurrentContent());

  return (
    <Fragment>
      <ReactWysiwygEditor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        placeholder="Click here to start typing in the editor..."
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
      />
      <textarea
        className="App-textarea"
        disabled
        value={editorState && draftToHtml(raw)}
      />
      <span>Input text: {enteredText}</span>
    </Fragment>
  );
};
