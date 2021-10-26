function apply(Fn, context, argsArr) {
    if (typeof context !== 'object' || context === null) {
      return Fn(...argsArr);
    }
    const key = Symbol('foo');
    context[key] = Fn;
    const result = context[key](...argsArr);
    delete context[key];
    return result;
  }
  
  const a = apply(Math.max, null, [1, 2, 3, 4]);
  console.log(a);
  
  function example(arg) {
    return this.name;
  }
  const obj = {
    name: 'Ben',
  };
  const b = example.apply(obj);
  console.log(b);
  const c = apply(example, obj, 'John');
  console.log(c);  