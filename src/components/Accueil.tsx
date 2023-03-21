
import React from 'react';
import { CKEditor } from 'ckeditor4-react';
/** this function do ...
 */


export default function Accueil() {
  return (
    <>
      <h1>Accueil</h1>
      <CKEditor
                initData="<p>Hello from CKEditor 4!</p>"
                onInstanceReady={ () => {
                } }
            />
    </>
  );
}
