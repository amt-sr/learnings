function productExceptSelf(nums: number[]): number[] {
  const res = [];
  let mul = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      mul *= nums[i];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      res[i] = mul / nums[i];
    } else {
      res[i] = mul;
    }
  }
  return res;
}

console.log(productExceptSelf([-1, 0, 1, 2, 3])); // Output: [24, 12, 8, 6]
