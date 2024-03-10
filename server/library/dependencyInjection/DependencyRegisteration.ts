class DependencyRegisteration {
  key:string;
  factory:()=>any
 
  constructor(key:string, factory:()=>any) {
    this.key = key;
    this.factory = factory;
  }
}
export default DependencyRegisteration;
