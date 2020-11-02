import React from 'react';
import { expect } from 'chai';
import jsdom from 'jsdom'

const {window} = new jsdom.JSDOM('<!doctype html><html><body></body></html>' , { url : 'http://localhost'})
// const win = doc.defaultView

global.document = window.document
global.window = window


Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key]
  }
})


global.React = React
global.expect = expect