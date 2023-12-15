import React from 'react';

const BrailleConverter = ({ text }) => {
  // Braille conversion logic
  const brailleMap = {
    a: '⠁',
    b: '⠃',
    c: '⠉',
    d: '⠙',
    e: '⠑',
    f: '⠋',
    g: '⠛',
    h: '⠓',
    i: '⠊',
    j: '⠚',
    k: '⠅',
    l: '⠇',
    m: '⠍',
    n: '⠝',
    o: '⠕',
    p: '⠏',
    q: '⠟',
    r: '⠗',
    s: '⠎',
    t: '⠞',
    u: '⠥',
    v: '⠧',
    w: '⠺',
    x: '⠭',
    y: '⠽',
    z: '⠵',
    ' ': ' ', // Keep spaces as is
    // Additional mappings for numbers and special characters
    '1': '⠼⠂',
    '2': '⠼⠆',
    '3': '⠼⠒',
    '4': '⠼⠲',
    '5': '⠼⠤',
    '6': '⠼⠖',
    '7': '⠼⠶',
    '8': '⠼⠦',
    '9': '⠼⠔',
    '0': '⠼⠴',
    '!': '⠖',
    '@': '⠈⠹',
    '#': '⠼⠛',
    '$': '⠈⠙',
    '%': '⠈⠺',
    '^': '⠈⠳',
    '&': '⠈⠸',
    '*': '⠠⠂',
    '(': '⠐',
    ')': '⠒',
    '-': '⠤',
    '_': '⠤⠤',
    '+': '⠤⠆',
    '=': '⠐⠤',
    '[': '⠦',
    ']': '⠴',
    '{': '⠦',
    '}': '⠴',
    ';': '⠆',
    ':': '⠰',
    ',': '⠂',
    '.': '⠄',
    '<': '⠤⠶',
    '>': '⠤⠖',
    '/': '⠸',
    '?': '⠢',
    '|': '⠸',
    '\\': '⠜',
    '`': '⠆',
    '~': '⠰',
    '"': '⠶⠶',
    "'": '⠄',
  };

  const convertToBraille = (inputText) => {
    return inputText
      .split('')
      .map((char) => brailleMap[char.toLowerCase()] || char)
      .join('');
  };

  const brailleText = convertToBraille(text);

  return (
    <div>
      <h2>Braille Conversion:</h2>
      <p>{brailleText}</p>
    </div>
  );
};

export default BrailleConverter;
