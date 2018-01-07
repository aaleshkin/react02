export default (count = 0, action) => {

   const { type } = action

   switch (type) {
      case 'INCREMENT': return count + 1; // not count++, we cannot modify original data, just must return new data
      default: return count;
   }

}