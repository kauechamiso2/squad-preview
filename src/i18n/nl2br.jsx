import { Fragment } from 'react';

/* Converte "\n" numa string traduzida em <br/> reais, para preservar as
   quebras de linha desenhadas nos títulos (cada idioma quebra onde fica melhor). */
export function nl2br(text) {
  const lines = String(text).split('\n');
  return lines.map((line, i) => (
    <Fragment key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </Fragment>
  ));
}
