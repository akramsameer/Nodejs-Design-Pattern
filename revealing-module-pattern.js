//* Revealing module pattern
// this is the core pattern for node
// used for :create a private scop, exporting only the parts that are meant to be public.

const testModule = (() => {
  const privateFoo = () => {
    console.log('from private foo');
  };
  const privateBar = () => {
    console.log('form private Bar');
  };

  const exported = {
    publicFoo: () => {
      console.log('from public foo ');
    }
  };
  return exported;
})();

console.log(testModule); // show only the exported part
