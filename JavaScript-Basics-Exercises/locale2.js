let extractRegion = (locale) => locale.substring(3, 5);

console.log(extractRegion('en_GB.UTF-8'));  // 'en'
console.log(extractRegion('en_US.UTF-8'));  // 'en'
console.log(extractRegion('ko_KR.UTF-16')); // 'ko'