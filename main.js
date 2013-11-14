
/* Permute will give all permutations for the provided array ( sourceSet )
   do not provide usedSet nor permutationSet
   Based on http://stackoverflow.com/a/9960925/7602
*/
function permute( sourceSet , usedSet , permutationsSet ) {
  permutationsSet = permutationsSet || [];
  usedSet = usedSet || [];
  for (var i = 0; i < sourceSet.length; i++) {
    usedSet.push( sourceSet.splice(i, 1)[0] );
    if (!sourceSet.length) 
      permutationsSet.push(usedSet.slice());
    permute(sourceSet, usedSet , permutationsSet);
    sourceSet.splice(i, 0, usedSet.pop());
  }
  return permutationsSet
}

//Test
console.log( permute( "abc".split("") ) );
