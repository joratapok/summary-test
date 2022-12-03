import React, {useEffect} from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism.css';
// import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import {SampleStyles} from './SampleCodeStyles';

type Props = {
  code: string;
  language: string;
};

export const Code: React.FC<Props> = ({code, language}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <SampleStyles />
      <pre className="line-numbers">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};
