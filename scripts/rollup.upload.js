import qcdn from '@q/qcdn';

export default options => {
  return {
    name: 'plugin-uploadCdn',
    generateBundle(_, bundle) {
      const fileKeys = Object.keys(bundle);
      const metadata = [];

      fileKeys.forEach(key => {
        const { fileName, code } = bundle[key];
        metadata.push({
          name: fileName,
          code: code,
        });
      });

      metadata.reduce((prev, next) => {
        return prev.then(() => {
          return qcdn.content(next.code, 'js').then(res => console.log(`${next.name}:  ${res}`));
        });
      }, Promise.resolve());
    },
  };
};
