const basetools = ['hammer', 'screwdriver']
const otherTools = ['wrench', 'saw']
// spread
const allTools = [...basetools, ...otherTools]
//destructuring and Rest
const [tool1, tool2, ...rest] = allTools;
console.log(tool2);
console.log(rest);
