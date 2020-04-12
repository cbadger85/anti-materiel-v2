// eslint-disable-next-line
const fs = require('fs');
// eslint-disable-next-line
const { promisify } = require('util');

const asyncReadDir = promisify(fs.readdir);
const asyncWriteFile = promisify(fs.writeFile);

const generateFile = async () => {
  const files = await asyncReadDir('./src/images');

  const svgFiles = files.filter(file => file.includes('.svg'));

  // const imports = svgFiles.reduce((file, acc, i) => {
  //   return `
  //   ${acc}
  //   import {ReactComponent as ReactComponent${i} from './${file}';
  //     `;
  // }, '');

  const imports = svgFiles
    .map(
      (file, i) => `
  import {ReactComponent as ReactComponent${i}} from './${file}';`,
    )
    .join('');

  const fileMap = svgFiles
    .map(
      (file, i) => `
      ['${file}']: ReactComponent${i},`,
    )
    .join('');

  const code = `
  /* eslint-disable */
  ${imports}

  export default {${fileMap}
  } as Record<string, SvgComponent>
  
  type SvgComponent = React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  `;

  await asyncWriteFile('./src/images/index.ts', code);
};

generateFile();
