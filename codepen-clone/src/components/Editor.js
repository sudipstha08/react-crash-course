import React from 'react'
import PropTypes from 'prop-types'

import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

const  Editor = ({ displayName, language, value, onChange }) => {

  const handleChange = () => {
    onChange(value)
  }

  return (
    <div className="editor">
      <div className="editor__title">
        {displayName}
        <button>O/C</button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: 'material'
        }}
      />
    </div>
  )
}

Editor.propTypes={
  value: PropTypes.string,
}

export default Editor
